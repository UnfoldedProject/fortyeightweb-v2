# FortyEightWeb - Sprint Build Website & CRM

## Overview

FortyEightWeb is a high-performance, SEO-optimized website for a digital sprint build service and automation agency. The application is built as a modern full-stack solution using React with TypeScript on the frontend and Express.js on the backend, designed to showcase sprint offers, automate lead generation, and provide a comprehensive CRM system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds
- **Animations**: Framer Motion for micro-interactions and user engagement
- **Blog System**: Static content approach with BlogCard components for Vercel compatibility

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless database
- **Authentication**: Session-based with PostgreSQL session store
- **Payment Processing**: Stripe integration for one-time payments

### UI/UX Design System
- **Component Library**: Radix UI primitives with custom theming
- **Typography**: Plus Jakarta Sans and Inter fonts
- **Color Scheme**: Custom brand colors with CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Components
1. **Pages**: Home, Services, Portfolio, About, Contact, ThankYou, Blog, BlogPost
2. **Core Components**: 
   - Navbar with mobile responsiveness and Blog navigation
   - Footer with social links and Blog navigation
   - SEO component for meta tag management
   - OfferCard for pricing displays
   - TestimonialBlock for social proof
   - PortfolioGallery for project showcases
   - LeadRouter for qualification workflow
   - AirtableForm for lead capture
   - StripeButton for payment processing
3. **Animation Components**:
   - AnimatedButton for enhanced button interactions
   - AnimatedCard for card hover effects
   - FadeInSection for scroll-triggered animations
4. **Blog Components**:
   - BlogCard for article previews
   - Blog page with search and filtering
   - BlogPost page with full content display

### Backend Services
1. **Storage Layer**: In-memory storage with interface for future database migration
2. **API Routes**: RESTful endpoints for leads, projects, and payments
3. **Payment Integration**: Stripe payment intents for secure transactions
4. **Lead Management**: CRUD operations for lead tracking and qualification

### Database Schema
- **Users**: Basic user authentication
- **Leads**: Lead capture and qualification data
- **Projects**: Project management with Stripe integration
- **Automation Projects**: Specialized automation project tracking

## Data Flow

1. **Lead Capture**: Visitors fill out forms → Data sent to Airtable → Stored in local database
2. **Payment Processing**: User selects service → Stripe payment intent created → Payment processed → Project record created
3. **Project Management**: Leads converted to projects → Status tracking → Delivery management
4. **SEO Optimization**: Dynamic meta tags → Search engine indexing → Organic traffic

## External Dependencies

### Third-Party Services
- **Airtable**: Primary CRM and lead management system
- **Stripe**: Payment processing and subscription management
- **Neon**: PostgreSQL database hosting
- **Google Fonts**: Typography (Plus Jakarta Sans, Inter)

### Development Tools
- **Drizzle Kit**: Database schema management and migrations
- **ESBuild**: Production bundling for server code
- **PostCSS**: CSS processing with Tailwind
- **TSC**: TypeScript compilation and type checking

### UI Libraries
- **Radix UI**: Comprehensive component primitives
- **Lucide Icons**: Consistent icon system
- **React Hook Form**: Form state management
- **Zod**: Schema validation and type safety

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Hot Reload**: Vite HMR for frontend, tsx for backend
- **Environment**: NODE_ENV=development

### Production Build
- **Frontend**: Vite build → Static files in dist/public
- **Backend**: ESBuild bundle → Single file in dist/index.js
- **Database**: Drizzle push for schema deployment

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `STRIPE_SECRET_KEY`: Stripe API key for payments
- `VITE_STRIPE_PUBLIC_KEY`: Stripe public key for frontend
- `VITE_AIRTABLE_BASE_ID`: Airtable base identifier
- `VITE_AIRTABLE_API_KEY`: Airtable API authentication

## Changelog

- July 07, 2025. Initial setup
- July 07, 2025. Fixed TypeScript date/timestamp errors in storage layer
- July 07, 2025. Updated Stripe API integration to handle missing keys gracefully
- July 07, 2025. Updated sitemap.xml with current date
- July 07, 2025. Application now runs successfully awaiting Stripe API keys
- July 09, 2025. Added comprehensive Airtable CRM integration with automated workflows
- July 09, 2025. Implemented Slack notifications for leads and payments
- July 09, 2025. Added SEO analytics tracking system
- July 09, 2025. Created comprehensive automation system for lead management
- July 09, 2025. Added PostgreSQL database integration for production scalability
- July 09, 2025. Logo navigation now scrolls to hero section when on homepage
- July 09, 2025. Updated Footer with social media links and contact information
- July 11, 2025. Fixed navigation system to scroll to top of pages instead of bottom
- July 11, 2025. Updated all "Start Your Project" buttons to navigate to Contact page project section
- July 11, 2025. Corrected all Calendly links: 15-minute Sprint calls and 30-minute Advanced consultations
- July 11, 2025. Fixed footer navigation to route to correct destinations instead of all going to Services page
- July 11, 2025. Implemented comprehensive button routing system for proper user journey flow
- July 11, 2025. Added Google Analytics (GA4) integration setup with analytics library and hooks
- July 11, 2025. Added LinkedIn Insight Tag for LinkedIn advertising tracking
- July 11, 2025. Enhanced Schema Markup implementation for better SEO optimization
- July 11, 2025. Fixed critical Stripe payment integration issue by making Airtable logging non-blocking
- July 11, 2025. Implemented micro-animations using Framer Motion for enhanced user engagement
- July 11, 2025. Built comprehensive blog/CMS system with BlogCard components and sample content
- July 11, 2025. Added blog navigation to main menu and footer with proper routing
- July 11, 2025. Enhanced existing components with subtle animations and improved user experience
- July 11, 2025. Completed all blog article paragraph tightening for improved readability
- July 11, 2025. Integrated user-provided Stripe payment links for direct $250/$500 package payments  
- July 11, 2025. Fixed footer service navigation to route to proper service sections with hosting links
- July 11, 2025. Updated all payment buttons site-wide to use new Stripe checkout links
- July 11, 2025. Completely removed newsletter signup functionality after persistent Airtable integration issues
- July 11, 2025. Replaced newsletter sections with conversion-focused CTAs directing to consultation bookings
- July 11, 2025. Site now fully functional without newsletter-related errors, ready for deployment

## User Preferences

Preferred communication style: Simple, everyday language.

## Deployment Notes

- **Vercel Compatible**: Architecture supports Vercel deployment with serverless functions
- **Database**: PostgreSQL with Airtable backup for comprehensive CRM
- **Automation**: Full workflow automation with dual Slack integration and analytics tracking
- **SEO**: Comprehensive SEO optimization with structured data and analytics
- **Pricing Structure**: Starter ($250), Standard ($500), Advanced ($750+) with add-ons
- **Dual Slack Integration**: Separate internal team and client community channels

## Required Environment Variables

### Slack Integration (Dual Setup)
- **INTERNAL_SLACK_BOT_TOKEN**: Bot token for "FortyEight AI Team Agency" (internal operations)
- **INTERNAL_SLACK_CHANNEL_ID**: Channel ID for internal team notifications
- **CLIENT_SLACK_BOT_TOKEN**: Bot token for "FortyEightWeb Community" (client community)
- **CLIENT_SLACK_CHANNEL_ID**: Channel ID for client community welcome messages

### Other Required Variables
- **STRIPE_SECRET_KEY**: Stripe API key for payments
- **VITE_STRIPE_PUBLIC_KEY**: Stripe public key for frontend
- **VITE_AIRTABLE_BASE_ID**: Airtable base identifier
- **VITE_AIRTABLE_API_KEY**: Airtable API authentication