import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  projectType: text("project_type").notNull(),
  description: text("description").notNull(),
  timeline: text("timeline").notNull(),
  budget: text("budget"),
  status: text("status").notNull().default("New Lead"),
  source: text("source").default("website"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  // Lead router qualification data
  purpose: text("purpose"),
  pages: text("pages"),
  aiNeeded: text("ai_needed"),
  recommendation: text("recommendation"),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  projectType: text("project_type").notNull(),
  description: text("description").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }),
  status: text("status").notNull().default("New"),
  estimatedDelivery: timestamp("estimated_delivery"),
  deliveredAt: timestamp("delivered_at"),
  paidAt: timestamp("paid_at"),
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const automationProjects = pgTable("automation_projects", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").references(() => projects.id),
  automationType: text("automation_type").notNull(), // zapier, make, n8n, custom
  workflowDescription: text("workflow_description").notNull(),
  integrations: text("integrations"), // JSON array of integration names
  status: text("status").notNull().default("Planning"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Schema for form validation
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLeadSchema = createInsertSchema(leads).pick({
  name: true,
  email: true,
  phone: true,
  projectType: true,
  description: true,
  timeline: true,
  budget: true,
  source: true,
  purpose: true,
  pages: true,
  aiNeeded: true,
  recommendation: true,
}).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  description: z.string().min(10, "Please provide more details about your project"),
  timeline: z.string().min(1, "Please select a timeline"),
  phone: z.string().optional(),
  budget: z.string().optional(),
  source: z.string().optional(),
  purpose: z.string().optional(),
  pages: z.string().optional(),
  aiNeeded: z.string().optional(),
  recommendation: z.string().optional(),
});

export const insertProjectSchema = createInsertSchema(projects).pick({
  name: true,
  email: true,
  projectType: true,
  description: true,
  amount: true,
  stripePaymentIntentId: true,
}).extend({
  name: z.string().min(1, "Project name is required"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Project type is required"),
  description: z.string().min(1, "Description is required"),
  amount: z.number().min(0, "Amount must be positive"),
  stripePaymentIntentId: z.string().optional(),
});

export const insertAutomationProjectSchema = createInsertSchema(automationProjects).pick({
  projectId: true,
  automationType: true,
  workflowDescription: true,
  integrations: true,
});

// Types for TypeScript
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertAutomationProject = z.infer<typeof insertAutomationProjectSchema>;
export type AutomationProject = typeof automationProjects.$inferSelect;
