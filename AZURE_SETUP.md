# Azure Static Web Apps - Setup Checklist

## ✅ Files Created/Ready

- [x] `staticwebapp.config.json` - SPA routing & security configuration
- [x] `.github/workflows/azure-static-web-apps-deploy.yml` - CI/CD pipeline
- [x] `AZURE_DEPLOYMENT.md` - Detailed deployment guide
- [x] `package.json` - Build scripts configured
- [x] `angular.json` - Build output set to `dist/portfolio`

## 🚀 Quick Setup (5 minutes)

### 1. Ensure Files Are Committed

```bash
git add .
git commit -m "Configure Azure Static Web Apps deployment"
git push origin main
```

### 2. Create Azure Static Web App

- Go to [Azure Portal](https://portal.azure.com)
- Create → Static Web Apps
- **Name**: my-portfolio
- **Source**: GitHub
- **Repository**: Your GitHub repo
- **Branch**: main
- **Build Presets**: Angular
- **App location**: `/`
- **Output location**: `dist/portfolio`

### 3. Configure GitHub Secret

Azure automatically creates `AZURE_STATIC_WEB_APPS_API_TOKEN` secret in your GitHub repo. If not:

- Copy deployment token from Azure Portal
- Go to GitHub repo → Settings → Secrets → New secret
- Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
- Paste token value

### 4. Deploy

Just push to `main` branch! GitHub Actions will:

1. Install dependencies
2. Build the Angular app with `npm run build:prod`
3. Deploy to Azure Static Web Apps
4. Create PR preview deployments automatically

## 📝 Build Information

- **Framework**: Angular 19
- **Build Command**: `npm run build:prod`
- **Build Output**: `dist/portfolio/`
- **Build Time**: ~2-3 minutes
- **Size**: Optimized with tree-shaking & minification

## 🔐 Security Features

The `staticwebapp.config.json` includes:

- Content Security Policy (CSP) headers
- SPA routing to support Angular Router
- Proper MIME type configuration
- Navigation fallback for client-side routing

## 📊 Monitoring

After deployment, monitor in Azure Portal:

- **Overview** → See live URL
- **Logs** → View access logs & errors
- **Activity** → Track deployment history
- **Environments** → View staging & preview deployments

## 🆘 Support

- Full guide: See `AZURE_DEPLOYMENT.md`
- Azure Docs: https://docs.microsoft.com/azure/static-web-apps/
- Troubleshooting: Check GitHub Actions logs

## Next Steps

1. Commit changes: `git push origin main`
2. Go to [Azure Portal](https://portal.azure.com)
3. Follow deployment guide in AZURE_DEPLOYMENT.md
4. Your site goes live at Azure-provided URL!

**Free tier includes**: 100GB bandwidth, GitHub Actions CI/CD, preview deployments
