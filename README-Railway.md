# Railway Deployment Guide

## Prerequisites
1. Railway account
2. PostgreSQL database (Railway PostgreSQL service or external)

## Environment Variables
Set these in Railway dashboard:

```
DATABASE_URL=postgres://username:password@host:port/database
NODE_ENV=production
PORT=5000
```

## Deployment Steps

### Option 1: Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy
railway up
```

### Option 2: GitHub Integration
1. Push code to GitHub repository
2. Connect repository in Railway dashboard
3. Set environment variables
4. Deploy automatically

## Database Setup
1. Add PostgreSQL service in Railway
2. Copy DATABASE_URL from Railway PostgreSQL service
3. Run migrations:
   ```bash
   npm run db:push
   ```

## Production Build
Railway will automatically run:
1. `npm install`
2. `npm run build` (builds both client and server)
3. `npm start` (starts production server)

## Health Check
The application includes a health check endpoint at `/` that Railway can monitor.

## Custom Domain
Configure custom domain in Railway dashboard under your service settings.