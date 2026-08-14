# RainFocus Summit UI — Michelle Stermitz

A single-page event registration setup screen built for the RainFocus UI Developer assessment, matching the provided Figma design.

**Live sandbox:** https://codesandbox.io/p/sandbox/github/michmitz/rf-ui

## Tech Stack

- [Next.js](https://nextjs.org) (React)
- SCSS Modules, compiled with [Sass](https://sass-lang.com/) — no CSS framework (no Bootstrap/Tailwind); all layout and styling is custom
- TypeScript

## Viewing the Finished Build (no install required)

This zip includes a pre-compiled, static export of the app in the `build/` folder. To view it:

1. Unzip the project.
2. Open `build/index.html` directly in your browser (double-click it, or drag it into a browser window).

No `npm install` or build step is needed — the app, styles, and images are fully self-contained in that folder.

## Running from Source

If you'd rather run the project locally in development mode:

```bash
cd src
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To produce a fresh static build yourself (outputs to `build/`):

```bash
npm run build
```

## Responsiveness

The layout is fully responsive from a standard desktop width down to 320px, with breakpoints adjusting the navigation, cards, and settings layout for smaller viewports.

## Notes

- Icons and images were exported from the Figma file into `src/public/icons`.
- This README and a couple of final packaging fixes (static export configuration) were completed with Claude's help; the entire design implementation and component build were done by hand.
