import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Entry: THE WORLD TODAY — Friday 27 November 2026.
// The front page is drawn into entry.png at build time; this program
// only copies that one file to the grader's output directory.

// Resolve paths from this file's own location, never from the
// process working directory: the grader runs us from anywhere.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");

if (!existsSync(src)) {
  throw new Error(`entry.png not found next to main.ts (${here})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
