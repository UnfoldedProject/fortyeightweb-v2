import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { insertLeadSchema, insertProjectSchema } from "@shared/schema";
import { airtableService } from "./airtable";
import { notifyNewLead, notifyNewPayment, welcomeNewClient } from "./slack";

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-06-30.basil",
}) : null;

export async function registerRoutes(app: Express): Promise<Server> {
  // Stripe payment route for one-time payments
  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      const { amount, description = "FortyEightWeb Service", metadata = {} } = req.body;
      
      if (!amount || amount < 50) {
        return res.status(400).json({ message: "Invalid amount" });
      }

      if (!stripe) {
        return res.status(500).json({ message: "Stripe not configured. Please contact support." });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        description,
        metadata: {
          service: "FortyEightWeb",
          ...metadata
        },
      });

      // Log payment intent creation to storage (non-blocking for Airtable)
      try {
        const project = await storage.createProject({
          name: `Payment Intent ${paymentIntent.id}`,
          email: metadata.email || "unknown@email.com",
          projectType: metadata.projectType || "unknown",
          amount,
          stripePaymentIntentId: paymentIntent.id,
          description: description || ""
        });

        // Create project in Airtable (non-blocking)
        airtableService.createProject(project).catch(err => 
          console.error('Airtable project creation failed:', err)
        );

        // Send Slack notification for new payment (non-blocking)
        notifyNewPayment({
          amount,
          email: metadata.email,
          projectType: metadata.projectType,
          stripePaymentIntentId: paymentIntent.id
        }).catch(err => 
          console.error('Slack notification failed:', err)
        );

        // Welcome new client to community Slack (non-blocking)
        welcomeNewClient({
          name: metadata.name || 'New Client',
          email: metadata.email,
          projectType: metadata.projectType,
          timeline: metadata.timeline || 'Standard'
        }).catch(err => 
          console.error('Slack welcome failed:', err)
        );

        // Log activity (non-blocking)
        airtableService.logActivity({
          type: 'payment_intent_created',
          description: `Payment intent created for ${metadata.projectType} package`,
          customerEmail: metadata.email,
          amount,
          source: 'stripe'
        }).catch(err => 
          console.error('Activity logging failed:', err)
        );
      } catch (err) {
        console.error('Storage error:', err);
      }

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error("Payment intent creation error:", error);
      res.status(500).json({ message: "Error creating payment intent: " + error.message });
    }
  });

  // Lead submission endpoint with full CRM integration
  app.post("/api/submit-lead", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      
      // Create lead in local storage
      const lead = await storage.createLead(leadData);
      
      // Create lead in Airtable
      await airtableService.createLead(lead);
      
      // Send Slack notification for new lead
      await notifyNewLead({
        name: lead.name,
        email: lead.email,
        budget: lead.budget,
        timeline: lead.timeline,
        projectType: lead.projectType,
        description: lead.description,
        recommendation: lead.recommendation
      });
      
      // Log activity
      await airtableService.logActivity({
        type: 'new_lead',
        description: `New lead submitted: ${lead.name} (${lead.email})`,
        customerEmail: lead.email,
        source: 'lead_router'
      });
      
      // Track analytics
      await airtableService.trackAnalytics({
        event: 'lead_submitted',
        page: 'lead_router',
        userAgent: req.get('User-Agent'),
        referrer: req.get('Referrer')
      });
      
      res.json({ 
        success: true, 
        message: "Lead submitted successfully",
        leadId: lead.id 
      });
    } catch (error: any) {
      console.error("Lead submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Error submitting lead: " + error.message 
      });
    }
  });

  // Get leads (for admin/CRM purposes)
  app.get("/api/leads", async (req, res) => {
    try {
      const { status, limit = 50 } = req.query;
      const leads = await storage.getLeads({ 
        status: status as string, 
        limit: parseInt(limit as string) 
      });
      
      res.json(leads);
    } catch (error: any) {
      console.error("Get leads error:", error);
      res.status(500).json({ message: "Error fetching leads: " + error.message });
    }
  });

  // Update lead status
  app.patch("/api/leads/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;
      
      const lead = await storage.updateLead(parseInt(id), { status, notes });
      
      if (!lead) {
        return res.status(404).json({ message: "Lead not found" });
      }
      
      res.json(lead);
    } catch (error: any) {
      console.error("Update lead error:", error);
      res.status(500).json({ message: "Error updating lead: " + error.message });
    }
  });

  // Project management endpoints
  app.get("/api/projects", async (req, res) => {
    try {
      const { status, limit = 50 } = req.query;
      const projects = await storage.getProjects({ 
        status: status as string, 
        limit: parseInt(limit as string) 
      });
      
      res.json(projects);
    } catch (error: any) {
      console.error("Get projects error:", error);
      res.status(500).json({ message: "Error fetching projects: " + error.message });
    }
  });

  app.patch("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      
      const project = await storage.updateProject(parseInt(id), updates);
      
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      res.json(project);
    } catch (error: any) {
      console.error("Update project error:", error);
      res.status(500).json({ message: "Error updating project: " + error.message });
    }
  });

  // Webhook endpoint for Stripe events
  app.post("/api/webhooks/stripe", async (req, res) => {
    try {
      const sig = req.headers['stripe-signature'];
      const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
      
      if (!webhookSecret || !sig) {
        return res.status(400).json({ message: "Missing webhook signature or secret" });
      }

      const event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
      
      switch (event.type) {
        case 'payment_intent.succeeded':
          const paymentIntent = event.data.object;
          // Update project status when payment succeeds
          await storage.updateProjectByStripeId(paymentIntent.id, {
            status: "Paid - In Queue",
            paidAt: new Date().toISOString()
          });
          break;
        
        case 'payment_intent.payment_failed':
          const failedPayment = event.data.object;
          await storage.updateProjectByStripeId(failedPayment.id, {
            status: "Payment Failed"
          });
          break;
      }
      
      res.json({ received: true });
    } catch (error: any) {
      console.error("Webhook error:", error);
      res.status(400).json({ message: "Webhook error: " + error.message });
    }
  });

  // Analytics tracking endpoint
  app.post("/api/track-analytics", async (req, res) => {
    try {
      const { event, page, userAgent, referrer } = req.body;
      
      // Track in Airtable
      await airtableService.trackAnalytics({
        event,
        page,
        userAgent,
        referrer,
        ipAddress: req.ip || req.connection.remoteAddress
      });
      
      res.json({ success: true });
    } catch (error: any) {
      console.error("Analytics tracking error:", error);
      res.status(500).json({ message: "Error tracking analytics: " + error.message });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      service: "FortyEightWeb API"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
