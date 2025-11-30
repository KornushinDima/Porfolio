---
description: How to deploy your GitHub repository to Vercel (Recommended for Next.js)
---

# Deploying to Vercel

Vercel is the company behind Next.js, so it offers the best hosting experience with zero configuration.

## Steps

1.  **Sign Up / Log In**: Go to [vercel.com](https://vercel.com) and sign up using your **GitHub** account.
2.  **Add New Project**:
    *   On your dashboard, click **"Add New..."** -> **"Project"**.
3.  **Import Repository**:
    *   You should see your `Porfolio` repository in the list.
    *   Click **"Import"**.
4.  **Configure Project**:
    *   **Framework Preset**: It should automatically detect **Next.js**.
    *   **Root Directory**: Leave as `./`.
    *   **Build Command**: Leave default.
    *   **Environment Variables**: You don't have any yet, so skip this.
5.  **Deploy**:
    *   Click **"Deploy"**.

## What happens next?
*   Vercel will clone your repo, install dependencies, and build your site.
*   In about 1-2 minutes, you will get a live URL (e.g., `porfolio-kornushindima.vercel.app`).
*   **Automatic Updates**: Every time you `git push` to your main branch, Vercel will automatically re-deploy your site!
