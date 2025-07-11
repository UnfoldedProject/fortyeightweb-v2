import { Lead, Project } from "@shared/schema";

const AIRTABLE_BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = process.env.VITE_AIRTABLE_API_KEY;

if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
  console.warn('Airtable credentials not found. CRM features will be disabled.');
}

export interface AirtableRecord {
  [key: string]: any;
}

class AirtableService {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`;
    this.headers = {
      'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    };
  }

  async createRecord(tableName: string, fields: AirtableRecord) {
    if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
      console.log('Airtable not configured, skipping record creation');
      return null;
    }

    try {
      const response = await fetch(`${this.baseUrl}/${tableName}`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          records: [{ fields }]
        })
      });

      if (!response.ok) {
        throw new Error(`Airtable API error: ${response.status}`);
      }

      const result = await response.json();
      return result.records[0];
    } catch (error) {
      console.error('Airtable creation error:', error);
      throw error;
    }
  }

  async updateRecord(tableName: string, recordId: string, fields: AirtableRecord) {
    if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
      console.log('Airtable not configured, skipping record update');
      return null;
    }

    try {
      const response = await fetch(`${this.baseUrl}/${tableName}/${recordId}`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({ fields })
      });

      if (!response.ok) {
        throw new Error(`Airtable API error: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Airtable update error:', error);
      throw error;
    }
  }

  async getRecords(tableName: string, maxRecords: number = 100) {
    if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
      console.log('Airtable not configured, returning empty records');
      return [];
    }

    try {
      const response = await fetch(`${this.baseUrl}/${tableName}?maxRecords=${maxRecords}`, {
        headers: this.headers
      });

      if (!response.ok) {
        throw new Error(`Airtable API error: ${response.status}`);
      }

      const result = await response.json();
      return result.records;
    } catch (error) {
      console.error('Airtable fetch error:', error);
      throw error;
    }
  }

  // Specialized methods for FortyEightWeb CRM
  async createLead(lead: Partial<Lead>) {
    return this.createRecord('Leads', {
      'Name': lead.name,
      'Email': lead.email,
      'Phone': lead.phone,
      'Project Type': lead.projectType,
      'Description': lead.description,
      'Timeline': lead.timeline,
      'Budget': lead.budget,
      'Status': lead.status || 'New Lead',
      'Source': lead.source || 'Website',
      'Purpose': lead.purpose,
      'Pages': lead.pages,
      'AI Needed': lead.aiNeeded,
      'Recommendation': lead.recommendation,
      'Created At': new Date().toISOString(),
    });
  }

  async createProject(project: Partial<Project>) {
    return this.createRecord('Projects', {
      'Name': project.name,
      'Email': project.email,
      'Project Type': project.projectType,
      'Description': project.description,
      'Amount': project.amount,
      'Status': project.status || 'New',
      'Stripe Payment Intent': project.stripePaymentIntentId,
      'Created At': new Date().toISOString(),
    });
  }

  async createCustomer(customerData: any) {
    return this.createRecord('Customers', {
      'Name': customerData.name,
      'Email': customerData.email,
      'Phone': customerData.phone,
      'Company': customerData.company,
      'Total Spent': customerData.totalSpent || 0,
      'Projects Count': customerData.projectsCount || 0,
      'Status': customerData.status || 'Active',
      'Created At': new Date().toISOString(),
    });
  }

  async logActivity(activityData: any) {
    return this.createRecord('Activity_Log', {
      'Type': activityData.type,
      'Description': activityData.description,
      'Customer Email': activityData.customerEmail,
      'Project ID': activityData.projectId,
      'Amount': activityData.amount,
      'Source': activityData.source,
      'Timestamp': new Date().toISOString(),
    });
  }

  async trackAnalytics(analyticsData: any) {
    if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
      console.log('Airtable not configured, skipping analytics tracking');
      return null;
    }
    
    return this.createRecord('Analytics', {
      'Event': analyticsData.event,
      'Page': analyticsData.page,
      'User Agent': analyticsData.userAgent,
      'IP Address': analyticsData.ipAddress,
      'Referrer': analyticsData.referrer,
      'Timestamp': new Date().toISOString(),
    });
  }
}

export const airtableService = new AirtableService();