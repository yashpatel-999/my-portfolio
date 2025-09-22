# Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Angular and use the configuration from `vercel.json`
   - Click "Deploy"

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

## Configuration Files

### vercel.json
- Configures static build and SPA routing
- Ensures all routes redirect to index.html for Angular Router

### angular.json
- Updated CSS budget limits for production builds
- FontAwesome configured in build assets

## Environment Variables

If you need to add environment variables on Vercel:

1. Go to your project dashboard on Vercel
2. Navigate to Settings → Environment Variables
3. Add variables like:
   - `WEB3FORMS_ACCESS_KEY`: Your Web3Forms API key

## Build Commands

- **Development**: `npm start`
- **Production Build**: `npm run build:prod`
- **Test Build**: `npm run build`

## Build Output

- Output directory: `dist/portfolio`
- Build includes FontAwesome CSS and optimized chunks
- Lazy loading enabled for all components

## Post-Deployment

After deployment:
1. Test all routes work correctly
2. Verify contact form submits properly
3. Check responsive design on mobile
4. Test dark/light mode toggle
5. Ensure all FontAwesome icons display

## Domain Configuration

To use a custom domain:
1. Go to Vercel project settings
2. Navigate to Domains
3. Add your custom domain
4. Configure DNS records as instructed

## Troubleshooting

- **Build Failures**: Check TypeScript errors and CSS budget limits
- **Routing Issues**: Ensure vercel.json has proper SPA configuration
- **Icons Missing**: Verify FontAwesome is properly included in angular.json
- **Environment Variables**: Check they're properly set in Vercel dashboard