# FortyEightWeb v2 Deployment Checklist

## Pre-Deployment Tasks

### ✅ Fixed Issues
- [x] Removed newsletter signup functionality (was causing Airtable 422 errors)
- [x] Fixed nested `<a>` tag warnings in Navbar component
- [x] All Stripe payment links working ($250/$500 packages)
- [x] All navigation and routing working properly
- [x] Blog system fully functional with sample content
- [x] Contact forms working with Airtable integration
- [x] SEO meta tags and analytics setup complete

### 🔧 Required for Deployment

#### 1. Environment Variables Setup
**In your new GitHub repo and Vercel deployment, you'll need these secrets:**

**Required for Core Functionality:**
- `STRIPE_SECRET_KEY` - For payment processing
- `VITE_STRIPE_PUBLIC_KEY` - For Stripe frontend integration
- `VITE_AIRTABLE_BASE_ID` - For CRM/lead management
- `VITE_AIRTABLE_API_KEY` - For Airtable API access
- `DATABASE_URL` - PostgreSQL connection (Vercel will provide this)

**Required for Analytics:**
- `VITE_GA_MEASUREMENT_ID` - Google Analytics tracking

**Optional (Slack Integration):**
- `INTERNAL_SLACK_BOT_TOKEN` - Internal team notifications
- `INTERNAL_SLACK_CHANNEL_ID` - Internal team channel
- `CLIENT_SLACK_BOT_TOKEN` - Client community notifications  
- `CLIENT_SLACK_CHANNEL_ID` - Client community channel

#### 2. Vercel Configuration
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x or higher

#### 3. Database Setup
- Vercel will provide PostgreSQL via Vercel Storage
- Run `npm run db:push` after deployment to create tables
- Or use Neon/Supabase for dedicated PostgreSQL

#### 4. Domain Configuration
- Update DNS records to point to Vercel
- Configure custom domain in Vercel dashboard
- SSL certificates will be handled automatically

### 🚨 Known Issues to Watch
- Some Airtable API calls may fail (422 errors) - these are non-blocking
- Analytics tracking errors are logged but don't affect user experience
- Newsletter functionality completely removed to avoid issues

### 📋 Post-Deployment Verification
1. Test all payment flows ($250 and $500 packages)
2. Verify contact form submissions go to Airtable
3. Check Google Analytics tracking is working
4. Test all navigation and routing
5. Verify mobile responsiveness
6. Test blog functionality and search
7. Check all external links (Calendly, etc.)

### 🔄 Migration Notes
- This is a complete rebuild, not a migration
- Keep v1 repo for portfolio purposes
- All content and functionality has been recreated in v2
- No data migration needed (fresh start)

## Deployment Steps

1. **Create GitHub v2 repo**
2. **Push current code to new repo**
3. **Connect repo to Vercel**
4. **Configure environment variables**
5. **Deploy and test**
6. **Update DNS from v1 to v2**
7. **Post-deployment verification**

## Ready for Deployment? ✅

The site is technically ready for deployment. All core functionality works, payments are integrated, and the user experience is polished. The only remaining step is the actual deployment process.