# Azure Static Web Apps Deployment Guide

## Prerequisites

- Azure account ([Sign up free](https://azure.microsoft.com/en-us/free/))
- GitHub account with your repository
- Git installed locally

## Deployment Steps

### Step 1: Create Azure Static Web Apps Resource

1. **Go to Azure Portal**
   - Navigate to [portal.azure.com](https://portal.azure.com)
   - Sign in with your Azure account

2. **Create Static Web App**
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configure Basic Settings**
   - **Resource Group**: Create new or select existing
   - **Name**: Enter your app name (e.g., `my-portfolio`)
   - **Plan**: Select "Free" for development/small projects
   - **Region**: Choose closest to your location

4. **Configure Deployment Details**
   - **Source**: GitHub
   - Click "Sign in with GitHub"
   - **Organization**: Select your GitHub organization/account
   - **Repository**: Select this repository
   - **Branch**: Select `main`

5. **Build Presets**
   - **Build Presets**: Angular
   - **App location**: `/` (root)
   - **API location**: Leave empty (no API)
   - **Output location**: `dist/portfolio`

6. **Review and Create**
   - Review all settings
   - Click "Create"

### Step 2: Setup GitHub Actions Secret

Azure will automatically add the required secret to your GitHub repository:

1. **Verify Secret in GitHub**
   - Go to your repository on GitHub
   - Click **Settings** → **Secrets and variables** → **Actions**
   - You should see `AZURE_STATIC_WEB_APPS_API_TOKEN` secret
   - If not created automatically, copy it from Azure Portal:
     - Go to Static Web App resource
     - Click **Manage deployment token**
     - Copy the token value

2. **Add Token to GitHub**
   - In GitHub Secrets, click "New repository secret"
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: Paste the token
   - Click "Add secret"

### Step 3: Configure Angular for Production

The project is already configured for production builds:

```bash
npm run build:prod
```

This generates optimized files in `dist/portfolio/`.

### Step 4: Push to GitHub

```bash
git add .
git commit -m "Prepare for Azure Static Web Apps deployment"
git push origin main
```

The GitHub Actions workflow will automatically:

1. Build your Angular app
2. Deploy to Azure Static Web Apps
3. Create staging environments for pull requests

### Step 5: View Your App

After deployment completes:

1. **Get App URL**
   - Go to Azure Portal → Your Static Web App resource
   - Click **Overview**
   - Copy the **URL** field

2. **Visit Your Site**
   - Open the URL in your browser
   - Your portfolio is now live!

## Project Configuration

### Files Added/Modified

- **`staticwebapp.config.json`**: Azure SPA routing configuration
- **`.github/workflows/azure-static-web-apps-deploy.yml`**: CI/CD pipeline
- **`AZURE_DEPLOYMENT.md`**: This file

### Key Configuration Details

**staticwebapp.config.json** enables:

- SPA routing (all routes redirect to index.html)
- Proper MIME types for assets
- Security headers (CSP)
- Static file caching

## Troubleshooting

### Build Fails

- Check that `npm run build:prod` runs locally without errors
- Verify Node.js version in GitHub Actions matches your environment
- Check the GitHub Actions logs: **Actions** tab → Failed workflow

### Routes Not Working

- Ensure `staticwebapp.config.json` exists in repository root
- Verify `output_location` in GitHub workflow matches your dist folder

### Environment Variables

To add environment variables:

1. Go to Azure Portal → Static Web App → **Configuration**
2. Click "Add" under Application settings
3. Enter name and value
4. Access in Angular via `environment.ts`

## Performance Tips

1. **Enable Caching**
   - Update `staticwebapp.config.json` to add cache headers
   - Example: Add `"cacheControl": "public, max-age=31536000"` to routes

2. **Monitor Performance**
   - Use Azure Portal → Logs to view traffic
   - Check build/deploy times in GitHub Actions

3. **Custom Domain** (Optional)
   - Go to Static Web App → **Custom domains**
   - Add your domain and follow DNS setup instructions

## Further Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Angular Deployment Guide](https://angular.io/guide/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
