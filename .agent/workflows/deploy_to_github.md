---
description: How to push your portfolio to GitHub and deploy it.
---

# How to Push to GitHub & Deploy

## 1. Initialize Git (if not already done)
Your project is already a git repository (Next.js does this automatically).

## 2. Create a Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g., `portfolio`).
3. Make it **Public** or **Private**.
4. **Do not** initialize with README, .gitignore, or License (you already have them).
5. Click **Create repository**.

## 3. Push Your Code
Copy the commands from the "…or push an existing repository from the command line" section on GitHub, or run these commands in your terminal:

```bash
# Replace <YOUR_USERNAME> with your GitHub username
git remote add origin https://github.com/<YOUR_USERNAME>/portfolio.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 4. Deploy (Recommended: Vercel)
The easiest way to "run" a Next.js app online is using Vercel (creators of Next.js).

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub.
2. Click **Add New...** -> **Project**.
3. Import your `portfolio` repository.
4. Click **Deploy**.

Vercel will build your site and give you a live URL (e.g., `portfolio-dmytro.vercel.app`).

## 5. Alternative: GitHub Pages
If you prefer GitHub Pages:
1. Open `next.config.mjs` and add `output: 'export'`.
2. Run `npm run build`.
3. The `out` folder will contain your static site.
4. You'll need to configure GitHub Actions to deploy this folder. (Vercel is much easier for Next.js).
