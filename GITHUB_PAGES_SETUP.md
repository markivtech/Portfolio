# GitHub Pages Setup Guide

Since the Personal Access Token doesn't have the `workflow` scope, follow these manual steps to enable GitHub Pages:

## Step 1: Enable GitHub Pages

1. Go to your repository: [https://github.com/markivtech/Portfolio](https://github.com/markivtech/Portfolio)
2. Click on **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` and `/root` folder
5. Click **Save**

## Step 2: Wait for Deployment

- GitHub will automatically build and deploy your site
- You'll see a green checkmark when deployment is complete
- Your site will be available at: `https://markivtech.github.io/Portfolio`

## Step 3: Update Your Portfolio URL

Once deployed, you can:
- Add the GitHub Pages URL to your GitHub profile
- Share it with recruiters and employers
- Update any links in your resume

## Alternative: Deploy to Vercel (Recommended)

For better performance and automatic deployments:

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Your site will be live at a Vercel URL

## Troubleshooting

**If deployment fails:**
- Check the "Actions" tab in your GitHub repository
- Look for error messages in the workflow logs
- Ensure all files are properly committed and pushed

**If you see a 404 error:**
- Wait a few minutes for GitHub Pages to build
- Clear your browser cache
- Check that the branch is set correctly in Settings → Pages

---

For more help, visit: [GitHub Pages Documentation](https://docs.github.com/en/pages)
