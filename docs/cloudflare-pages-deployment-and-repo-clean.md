# Cloudflare Pages Deployment & Remote Repository Synchronization

**Repository:** [https://github.com/pr1hm/pr1hm.github.io](https://github.com/pr1hm/pr1hm.github.io)  
**Production Domain:** [https://prthm.xyz](https://prthm.xyz)  
**Action:** Complete remote overwrite, `unslop` purge, and Cloudflare Pages setup guide  

---

## 1. Remote Repository Sanitization & Push

1. **Unslop Purge:** The local `unslop/` nested directory (which had its own sub-git repository) was completely removed.
2. **Git Tracking:** Initialized `git` on `main`, tracked all project source files, and committed with clean attribution.
3. **Remote Overwrite:** Forced update to `https://github.com/pr1hm/pr1hm.github.io.git` on branch `main` (`+ 3da79a8...daf1e2b`), completely replacing any previous files with this complete project codebase.

---

## 2. Step-by-Step Cloudflare Pages Deployment Guide

### Step 1: Connect GitHub Repository
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation sidebar, navigate to **Compute (Workers & Pages)** &rarr; **Pages**.
3. Click **Create an application** &rarr; select the **Pages** tab &rarr; click **Connect to Git**.
4. Select your GitHub account (`pr1hm`) and choose the repository: **`pr1hm.github.io`**.
5. Click **Begin setup**.

### Step 2: Configure Build Settings
Fill in the configuration fields exactly as follows:
- **Project name:** `prthm` (or your choice)
- **Production branch:** `main`
- **Framework preset:** `Vite` (or `None`)
- **Build command:** `pnpm build`
- **Build output directory:** `dist`

### Step 3: Set Environment Variables
Under **Environment variables (advanced)**, add:
- **Variable name:** `NODE_VERSION`
- **Value:** `20` (or `22`)

*(This ensures Cloudflare's build container uses modern Node.js and native pnpm support).*

### Step 4: Deploy & Verify SPA Routing
1. Click **Save and Deploy**.
2. Cloudflare Pages will clone the repo, run `pnpm install`, and execute `pnpm build`.
3. The pre-configured [public/_redirects](file:///c:/Users/SIS/Documents/prthm/portfolio/public/_redirects) file containing `/*   /index.html   200` is automatically copied into `dist/`. This guarantees that refreshing any sub-route (such as `/blog` or `/blog/frameread-offline-ai-video-analysis-qwen2vl`) serves the application without 404 errors.

### Step 5: Custom Domain Setup (`prthm.xyz`)
1. Once the deployment succeeds, navigate to the **Custom domains** tab in your Cloudflare Pages project.
2. Click **Set up a custom domain**.
3. Enter `prthm.xyz` (and optionally `www.prthm.xyz`).
4. Click **Continue** &rarr; **Activate domain**.
5. Cloudflare will automatically provision SSL/TLS certificates and map edge routing within minutes.

