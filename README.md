# CivicKit Design System — Docs Site Starter

This is a minimal starter for the CivicKit documentation site, used as part of a take-home exercise.

CivicKit is a fictional shared design system used by teams across a state agency to build consistent, accessible digital services. It includes a React component library and an Astro-based documentation site.

## What's included

- A working Astro + React project
- An `Alert` component in `src/components/Alert.tsx`
- A skeleton documentation page at `src/pages/components/alert.astro`
- A basic docs layout and home page

## Your task

Build out the documentation page for the `Alert` component at `src/pages/components/alert.astro`. See the take-home instructions for what the completed page should include.

## Getting started

You'll need [Node.js](https://nodejs.org/) 18 or later.

```bash
npm install
npm run dev
```

The dev server will start at `http://localhost:4321`.

Other commands:

```bash
npm run build    # build for production
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/
    Alert.tsx          # The Alert component — read this carefully
  layouts/
    DocsLayout.astro   # Shared page layout
  pages/
    index.astro        # Home page
    components/
      alert.astro      # Your documentation page (this is what you'll build)
```
## Development overview

### My Process
- Started with rendering components
- Looked up usability guidance wording from USWDS, Carbon Design, Shop Minis, and Material UI
- Read up on accessability concerns with alerts and `role=alert`
- If the alert isn't dymanically generated, could `role` be optional?
- Changed contrast for alert to make them AAA contrast compliant
- Added props info table

### Iteration
- I would like to make the pages mobile-friendly and responsive
- Would like to clean up styling for the site and documentation page

### Resources
- [Astro’s Client Directives: When and Where to Use Each](https://dev.to/lovestaco/astros-client-directives-when-and-where-to-use-each-165g)
- [USWDS Alert Components](https://designsystem.digital.gov/components/alert/)
- [Status indicators](https://carbondesignsystem.com/patterns/status-indicator-pattern/)
- [Shop Minis Alert Component](https://shopify.dev/docs/api/shop-minis/components/primitives/alert)