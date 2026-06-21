# Dmytro Pishchenkov Portfolio

Modern portfolio landing page for Platform Engineering, Cloud Operations, and DevSecOps work.

## Stack

- Vite
- React
- Chakra UI
- i18next / react-i18next
- Lucide React icons

## Current Direction

The portfolio is being refactored from an older static HTML/CSS/JavaScript site into a React application. The new positioning focuses on:

- Kubernetes and cloud platform engineering
- Infrastructure as Code with Terraform
- Cloud security and DevSecOps
- Automation with Go, Python, and Bash
- Observability and enterprise cloud operations

## Languages And Themes

The site supports three languages:

- English
- Ukrainian
- Polish

Language selection is handled by `i18next`. The visual palette changes with the selected language:

- English: blue, red, and white
- Ukrainian: blue and yellow
- Polish: red and white

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The selected hosting target is Azure Static Web Apps.

Recommended Azure settings:

- App location: `/`
- API location: empty
- Output location: `dist`
- Build command: `npm run build`

The repository includes:

- `.github/workflows/azure-static-web-apps.yml` for GitHub Actions deployment
- `public/staticwebapp.config.json` for SPA fallback and basic security headers

Create a GitHub secret named `AZURE_STATIC_WEB_APPS_API_TOKEN` with the deployment token from Azure Static Web Apps. If Azure generates a different secret name, either rename the secret or update the workflow.

## Project Content

The current project cards are placeholders for:

- Secure OPSEC Communication Protocol
- Serverless Multi-language Web Application
- Multi-Cloud IaC & Automated Deployment

Final live demo and repository links will be added after the first refactor pass is reviewed.

## Notes

The previous static assets and helper scripts are still present during the transition so the old implementation can be referenced if needed. They can be removed once the React version is accepted.
