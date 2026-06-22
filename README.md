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
