// Runs after `next build --webpack` (see package.json "build" script).
//
// `next build` with `output: "export"` writes a static site to `out/`, but
// every asset reference (scripts, stylesheets, the favicon, and the fonts a
// stylesheet pulls in) is root-absolute ("/_next/..."). That's fine on a real
// server, but it breaks when someone just double-clicks index.html, because
// "/_next/..." resolves against the filesystem root under file://, not the
// folder the html lives in.
//
// This script does two things:
//   1. Renames out/ -> build/ (the folder name the assessment asks for).
//   2. Rewrites every absolute "/_next" and "/favicon" reference (in the
//      html files themselves *and* inside React's embedded hydration
//      payload) to a relative one, and fixes the extra "../" hop that CSS
//      files need for their own @font-face url()s, so the exported site
//      works fully — including click handlers — from a plain file:// open.
//
// Re-run automatically by `npm run build`; safe to re-run any time.

import { readdirSync, readFileSync, writeFileSync, renameSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const buildDir = join(root, "build");

if (!existsSync(outDir)) {
  console.error("postbuild: no out/ directory found — did `next build` run first?");
  process.exit(1);
}

if (existsSync(buildDir)) rmSync(buildDir, { recursive: true, force: true });
renameSync(outDir, buildDir);

const walk = (dir, matcher, found = []) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, matcher, found);
    else if (matcher(entry.name)) found.push(full);
  }
  return found;
};

const htmlFiles = walk(buildDir, (name) => name.endsWith(".html"));
for (const file of htmlFiles) {
  let html = readFileSync(file, "utf8");
  html = html
    .replace(/"\/_next/g, '"_next')
    .replace(/'\/_next/g, "'_next")
    .replace(/"\/favicon/g, '"favicon')
    .replace(/'\/favicon/g, "'favicon")
    .replace(/ crossorigin=""/g, "");
  writeFileSync(file, html);
}

const cssFiles = walk(buildDir, (name) => name.endsWith(".css"));
for (const file of cssFiles) {
  let css = readFileSync(file, "utf8");
  // CSS url()s resolve relative to the CSS file's own folder
  // (build/_next/static/css/), so media assets need one extra "../" hop.
  css = css.replace(/url\(\/_next\/static\/media\//g, "url(../media/");
  writeFileSync(file, css);
}

console.log(
  `postbuild: build/ ready — rewrote ${htmlFiles.length} html file(s) and ${cssFiles.length} css file(s) for file:// compatibility.`
);
