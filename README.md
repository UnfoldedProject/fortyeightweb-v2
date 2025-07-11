# FortyEightWeb v2

A high-performance, SEO-optimized website for FortyEightWeb - a digital sprint build service and automation agency.

## Features

- **Sprint Website Builds**: $250-$500 packages with 48-hour delivery
- **AI Integration**: Custom automation and workflow solutions
- **Modern Tech Stack**: React, TypeScript, Vite, TailwindCSS
- **Payment Integration**: Stripe for secure payment processing
- **CRM Integration**: Airtable for lead management
- **SEO Optimized**: Google Analytics, Schema Markup, meta tags
- **Blog System**: Content marketing with search and filtering
- **Responsive Design**: Mobile-first with modern animations

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS + shadcn/ui components
- Wouter for routing
- React Query for state management
- Framer Motion for animations

### Backend
- Express.js with TypeScript
- PostgreSQL with Drizzle ORM
- Stripe payment processing
- Airtable CRM integration
- Google Analytics tracking

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   # Copy and fill in your values
   cp .env.example .env
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Environment Variables

### Required for Core Functionality
- `STRIPE_SECRET_KEY` - Stripe API secret key
- `VITE_STRIPE_PUBLIC_KEY` - Stripe public key
- `VITE_AIRTABLE_BASE_ID` - Airtable base ID
- `VITE_AIRTABLE_API_KEY` - Airtable API key
- `DATABASE_URL` - PostgreSQL connection string

### Optional
- `VITE_GA_MEASUREMENT_ID` - Google Analytics ID
- `INTERNAL_SLACK_BOT_TOKEN` - Internal team Slack bot
- `INTERNAL_SLACK_CHANNEL_ID` - Internal team channel
- `CLIENT_SLACK_BOT_TOKEN` - Client community Slack bot
- `CLIENT_SLACK_CHANNEL_ID` - Client community channel

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with these settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Node.js Version**: 18.x

### Database Setup
After deployment, run:
```bash
npm run db:push
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Drizzle Studio

## Project Structure

```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared TypeScript types
├── attached_assets/ # Static assets
└── dist/           # Production build output
```

## Contributing

This is a private project for FortyEightWeb. For questions or support, contact the development team.

## License

Private - All rights reserved.