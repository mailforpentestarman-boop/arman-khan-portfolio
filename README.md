# Md Arman Khan - Junior Penetration Tester Portfolio

A modern, fast, professional, and lightweight personal cybersecurity portfolio website for **Md Arman Khan**, Junior Penetration Tester at **Bytecapsule**.

Built specifically for **100% FREE hosting on GitHub Pages** with zero backend, zero database, zero paid APIs, and no server maintenance required.

---

## Table of Contents
1. [Project Structure](#project-structure)
2. [How to Edit Your Information (One-File Configuration)](#how-to-edit-your-information)
3. [How to Run Locally](#how-to-run-locally)
4. [Step-by-Step GitHub Upload Instructions](#step-by-step-github-upload-instructions)
5. [How to Enable GitHub Pages (Free Hosting)](#how-to-enable-github-pages)
6. [How to Add a Custom Domain (Optional)](#how-to-add-a-custom-domain)
7. [Security & Performance Principles](#security--performance-principles)

---

## 1. Project Structure

```
├── index.html                   # HTML entry point (SEO, OpenGraph, JSON-LD schema)
├── metadata.json                # Project identity & description
├── package.json                 # Fast lightweight dependencies (React 19, Tailwind, Lucide)
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite configuration (base: './' for GitHub Pages compatibility)
├── README.md                    # Deployment and editing manual
└── src/
    ├── main.tsx                 # React DOM mount point
    ├── App.tsx                  # Main portfolio container
    ├── index.css                # Tailwind CSS & cybersecurity grid styling
    ├── portfolioData.ts         # ⭐ SINGLE CENTRAL FILE TO EDIT ALL YOUR INFO
    └── components/
        ├── Navbar.tsx           # Sticky responsive navbar with blur & mobile drawer
        ├── HeroSection.tsx      # High-impact hero with telemetry diagnostic visual
        ├── AboutSection.tsx     # Profile & background card with ethical mandate
        ├── FocusSection.tsx     # 5 Core Cybersecurity Focus Areas (OWASP, API, etc.)
        ├── SkillsSection.tsx    # Offensive Security, Tools & Languages (No fake %)
        ├── ProjectsSection.tsx  # 5 Security Labs & Research Prototypes
        ├── JourneySection.tsx   # Visual learning roadmap from Diploma to Pentest
        ├── TechWallSection.tsx  # Interactive Tools & Technologies Wall
        ├── PhilosophySection.tsx# Security Mindset & Ethics Statement
        ├── ContactSection.tsx   # Direct email/call links & client-side mail composer
        ├── Footer.tsx           # Clean footer with copyright & back-to-top
        └── CvModal.tsx          # Interactive & printable Curriculum Vitae modal
```

---

## 2. How to Edit Your Information

**All your personal data, contact details, skills, and projects can be changed in ONE file:**
👉 **`src/portfolioData.ts`**

Open `src/portfolioData.ts` to customize:

| Field to Change | Location in `src/portfolioData.ts` |
| :--- | :--- |
| **Name** | `PORTFOLIO_DATA.personal.fullName` |
| **Title & Role** | `PORTFOLIO_DATA.personal.title` & `subTitle` |
| **Organization** | `PORTFOLIO_DATA.personal.organization` (`Bytecapsule`) |
| **Email** | `PORTFOLIO_DATA.personal.email` |
| **Phone** | `PORTFOLIO_DATA.personal.phone` |
| **Location** | `PORTFOLIO_DATA.personal.location` |
| **Hero Intro & Bio** | `PORTFOLIO_DATA.personal.heroIntro` & `aboutBio` |
| **Profile Photo** | Place your real photo in `public/profile.jpg` (configured in `PORTFOLIO_DATA.personal.profileImage`) |
| **Social Links** | `PORTFOLIO_DATA.socials` (Add your GitHub, LinkedIn, Telegram URLs) |
| **Skills & Levels** | `PORTFOLIO_DATA.skillCategories` (Add or change skills and tags) |
| **Projects & Labs** | `PORTFOLIO_DATA.projects` (Update titles, descriptions, and repo links) |
| **Career Journey** | `PORTFOLIO_DATA.journeyTimeline` (Add milestones or certifications) |
| **Security Philosophy**| `PORTFOLIO_DATA.personal.philosophy` |
| **CV Content** | Automatically updates from the fields above, plus printable layout in `CvModal.tsx` |

---

## 3. How to Run Locally

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

1. Clone or download your repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

2. Install the lightweight dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your web browser.

---

## 4. Step-by-Step GitHub Upload Instructions

If you are publishing this project to a new GitHub repository:

### Step 1: Create a new repository on GitHub
1. Log into your GitHub account at [github.com](https://github.com) (`mailforpentestarman-boop`).
2. Click the **+** (plus) icon at the top right and select **New repository**.
3. Name it either:
   - `mailforpentestarman-boop.github.io` (for your primary personal URL e.g. `https://mailforpentestarman-boop.github.io/`)
   - OR any repository name e.g. `portfolio` (will be hosted at `https://mailforpentestarman-boop.github.io/portfolio/`)
4. Set the repository to **Public**.
5. Do **not** initialize with README or license (we already have them here).
6. Click **Create repository**.

### Step 2: Push your code using Git
Open your local terminal in the project directory and run:

```bash
# Initialize git repository (if not already initialized)
git init

# Add all project files
git add .

# Commit your changes
git commit -m "feat: portfolio for Md Arman Khan - Junior Penetration Tester"

# Rename default branch to main
git branch -M main

# Link to your remote GitHub repository
git remote add origin https://github.com/mailforpentestarman-boop/YOUR-REPO-NAME.git

# Push the code to GitHub
git push -u origin main
```

---

## 5. How to Enable GitHub Pages (Free Hosting)

You can deploy to GitHub Pages in either of two easy ways:

### Option A: Automatic Deployment via GitHub Actions (Recommended)

1. In your GitHub repository, create a workflow file:
   `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build static site
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. On GitHub, navigate to your repository's **Settings** tab.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment > Source**, select **GitHub Actions**.
5. Every time you push to the `main` branch, your website will automatically build and publish!

---

### Option B: Quick CLI Build & Deploy via `gh-pages`

If you prefer building locally and pushing the static files directly:

1. Build the production files:
   ```bash
   npm run build
   ```
   *(This outputs the compiled static assets into the `dist/` directory).*

2. Use the `gh-pages` tool:
   ```bash
   npx gh-pages -d dist
   ```

3. In your GitHub repository **Settings > Pages**:
   - Set **Source** to **Deploy from a branch**.
   - Select the `gh-pages` branch and `/ (root)` folder.
   - Click **Save**.

Your portfolio is now live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`!

---

## 6. How to Add a Custom Domain (Optional)

If you later purchase a domain (e.g., `armankhan.security` or `armanpentest.com`):

1. Go to your repository **Settings > Pages**.
2. Under **Custom domain**, type your domain (e.g., `www.armankhan.security`).
3. Click **Save**.
4. At your domain registrar (Namecheap, GoDaddy, Cloudflare, Google Domains), add:
   - For an apex domain (`armankhan.security`): A records pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - For a `www` subdomain: A CNAME record pointing to `YOUR-USERNAME.github.io`.
5. Check **Enforce HTTPS** in GitHub Settings.

---

## 7. Security & Performance Highlights

- **Static Architecture:** Zero attack surface, no database injection risk, zero server maintenance.
- **Privacy & Sanitization:** All contact forms run client-side via mailto protocols; no private tokens, API keys, or cookies stored.
- **SEO & Social Cards:** Comprehensive meta tags, OpenGraph tags, Twitter cards, and Schema.org JSON-LD formatted for cybersecurity recruiters.
- **Fast Load Times:** Built with Vite and Tailwind CSS; compiles to minified static JS/CSS (< 80KB gzipped).
- **Accessibility:** Respects user's `prefers-reduced-motion` settings and meets WCAG AA contrast standards.

---

Designed for **Md Arman Khan** • Junior Penetration Tester • **Bytecapsule**
