# Dmytro Pishchenkov | Portfolio

Welcome to the source code for my personal landing page! I use this space as my digital business card to showcase my work across Platform Engineering, Cloud Operations, and DevSecOps.

## What's Baked In

I wanted the site to be fast, accessible, and easy to navigate. Here is what it currently features:

* **Trilingual Support:** English, Ukrainian, and Polish (handled via `react-i18next`).
* **Theming:** Language-specific visual themes, plus the mandatory Light/Dark mode toggle.
* **The Goods:** Easy access to my downloadable CV, live project demos, and repository links.
* **The Highlights:** A breakdown of my core work, emphasizing Kubernetes automation, IaC (Terraform), Go/Python/Bash scripting, and observability.

### Featured Projects

If you are poking around to see what I build, the portfolio specifically highlights:

* **Splunk Operator:** PostgreSQL Platform Controllers
* **Serverless Cloud-Native Web Application**
* **Secure Communication Infrastructure**

## Under the Hood (The Stack)

While I spend most of my day wrestling with Kubernetes and cloud infrastructure, I built this frontend using:

* **Vite** (for that sweet, lightning-fast build time)
* **React**
* **Chakra UI** (for clean, accessible component styling)

## Spin It Up Locally

Want to run it on your machine? It's pretty straightforward.

**1. Install dependencies:**

```bash
npm install

```

**2. Start the dev server:**

```bash
npm run dev

```

**3. Build for production:**

```bash
npm run build

```

**4. Preview the production build:**

```bash
npm run preview

```

## How It Ships (Deployment)

This site is deployed and hosted using **Azure Static Web Apps**.

* **CI/CD Pipeline:** Fully automated via GitHub Actions (you can check out the workflow at `.github/workflows/azure-static-web-apps-ashy-bay-06902e503.yml`).
* **Workflow Target:** Pushes to the `master` branch trigger deployments from the `/` app location, outputting to the `dist` directory (API location is currently empty).
* **Routing:** SPA routing fallback and custom headers are managed cleanly via `public/staticwebapp.config.json`.