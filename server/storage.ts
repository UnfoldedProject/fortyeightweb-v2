import { users, leads, projects, automationProjects, type User, type InsertUser, type Lead, type InsertLead, type Project, type InsertProject, type AutomationProject, type InsertAutomationProject } from "@shared/schema";

// Storage interface for all CRUD operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Lead operations
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(filters?: { status?: string; limit?: number }): Promise<Lead[]>;
  getLead(id: number): Promise<Lead | undefined>;
  updateLead(id: number, updates: Partial<Lead>): Promise<Lead | undefined>;
  deleteLead(id: number): Promise<boolean>;

  // Project operations
  createProject(project: InsertProject): Promise<Project>;
  getProjects(filters?: { status?: string; limit?: number }): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  updateProject(id: number, updates: Partial<Project>): Promise<Project | undefined>;
  updateProjectByStripeId(stripeId: string, updates: Partial<Project>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;

  // Automation project operations
  createAutomationProject(automation: InsertAutomationProject): Promise<AutomationProject>;
  getAutomationProjects(projectId?: number): Promise<AutomationProject[]>;
  updateAutomationProject(id: number, updates: Partial<AutomationProject>): Promise<AutomationProject | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private leads: Map<number, Lead>;
  private projects: Map<number, Project>;
  private automationProjects: Map<number, AutomationProject>;
  private currentUserId: number;
  private currentLeadId: number;
  private currentProjectId: number;
  private currentAutomationId: number;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
    this.projects = new Map();
    this.automationProjects = new Map();
    this.currentUserId = 1;
    this.currentLeadId = 1;
    this.currentProjectId = 1;
    this.currentAutomationId = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Lead operations
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.currentLeadId++;
    const now = new Date();
    const lead: Lead = {
      ...insertLead,
      id,
      status: "New Lead",
      source: insertLead.source || "website",
      createdAt: now,
      updatedAt: now,
      notes: null,
      purpose: insertLead.purpose || null,
      pages: insertLead.pages || null,
      aiNeeded: insertLead.aiNeeded || null,
      recommendation: insertLead.recommendation || null,
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getLeads(filters?: { status?: string; limit?: number }): Promise<Lead[]> {
    let leadsArray = Array.from(this.leads.values());
    
    if (filters?.status) {
      leadsArray = leadsArray.filter(lead => lead.status === filters.status);
    }
    
    // Sort by creation date (newest first)
    leadsArray.sort((a, b) => {
      const dateA = a.createdAt instanceof Date ? a.createdAt : new Date(a.createdAt);
      const dateB = b.createdAt instanceof Date ? b.createdAt : new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
    
    if (filters?.limit) {
      leadsArray = leadsArray.slice(0, filters.limit);
    }
    
    return leadsArray;
  }

  async getLead(id: number): Promise<Lead | undefined> {
    return this.leads.get(id);
  }

  async updateLead(id: number, updates: Partial<Lead>): Promise<Lead | undefined> {
    const lead = this.leads.get(id);
    if (!lead) return undefined;
    
    const updatedLead: Lead = {
      ...lead,
      ...updates,
      updatedAt: new Date(),
    };
    
    this.leads.set(id, updatedLead);
    return updatedLead;
  }

  async deleteLead(id: number): Promise<boolean> {
    return this.leads.delete(id);
  }

  // Project operations
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const now = new Date();
    
    // Calculate estimated delivery based on project type
    let estimatedHours = 48; // default
    if (insertProject.projectType === "advanced") {
      estimatedHours = 96;
    }
    
    const estimatedDelivery = new Date();
    estimatedDelivery.setHours(estimatedDelivery.getHours() + estimatedHours);
    
    const project: Project = {
      ...insertProject,
      id,
      status: "New",
      estimatedDelivery: estimatedDelivery,
      deliveredAt: null,
      paidAt: null,
      notes: null,
      createdAt: now,
      updatedAt: now,
    };
    
    this.projects.set(id, project);
    return project;
  }

  async getProjects(filters?: { status?: string; limit?: number }): Promise<Project[]> {
    let projectsArray = Array.from(this.projects.values());
    
    if (filters?.status) {
      projectsArray = projectsArray.filter(project => project.status === filters.status);
    }
    
    // Sort by creation date (newest first)
    projectsArray.sort((a, b) => {
      const dateA = a.createdAt instanceof Date ? a.createdAt : new Date(a.createdAt);
      const dateB = b.createdAt instanceof Date ? b.createdAt : new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
    
    if (filters?.limit) {
      projectsArray = projectsArray.slice(0, filters.limit);
    }
    
    return projectsArray;
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async updateProject(id: number, updates: Partial<Project>): Promise<Project | undefined> {
    const project = this.projects.get(id);
    if (!project) return undefined;
    
    const updatedProject: Project = {
      ...project,
      ...updates,
      updatedAt: new Date(),
    };
    
    this.projects.set(id, updatedProject);
    return updatedProject;
  }

  async updateProjectByStripeId(stripeId: string, updates: Partial<Project>): Promise<Project | undefined> {
    const project = Array.from(this.projects.values()).find(
      p => p.stripePaymentIntentId === stripeId
    );
    
    if (!project) return undefined;
    
    return this.updateProject(project.id, updates);
  }

  async deleteProject(id: number): Promise<boolean> {
    return this.projects.delete(id);
  }

  // Automation project operations
  async createAutomationProject(insertAutomation: InsertAutomationProject): Promise<AutomationProject> {
    const id = this.currentAutomationId++;
    const now = new Date();
    
    const automation: AutomationProject = {
      ...insertAutomation,
      id,
      status: "Planning",
      createdAt: now,
      updatedAt: now,
    };
    
    this.automationProjects.set(id, automation);
    return automation;
  }

  async getAutomationProjects(projectId?: number): Promise<AutomationProject[]> {
    let automationsArray = Array.from(this.automationProjects.values());
    
    if (projectId) {
      automationsArray = automationsArray.filter(automation => automation.projectId === projectId);
    }
    
    return automationsArray.sort((a, b) => {
      const dateA = a.createdAt instanceof Date ? a.createdAt : new Date(a.createdAt);
      const dateB = b.createdAt instanceof Date ? b.createdAt : new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
  }

  async updateAutomationProject(id: number, updates: Partial<AutomationProject>): Promise<AutomationProject | undefined> {
    const automation = this.automationProjects.get(id);
    if (!automation) return undefined;
    
    const updatedAutomation: AutomationProject = {
      ...automation,
      ...updates,
      updatedAt: new Date(),
    };
    
    this.automationProjects.set(id, updatedAutomation);
    return updatedAutomation;
  }
}

export const storage = new MemStorage();
