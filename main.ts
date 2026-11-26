// Entry for make.fun bounty news-image-20261126 (v1): copy the prebuilt
// one-day front-page image to the sandbox output directory.
// v1: Ras Tanura smoke confirmed and two tankers hit mines in Hormuz,
// Israel kills nine in Gaza overnight, EU leaders clash over budget
// and Ukraine aid. 44 stories, all first reported Thu 26 Nov 2026.
// Navy theme (deeper, varied from 24 Nov). Built 26 Nov 2026.
// The image is 1024x1024, deterministic, written by the build script.
// The program takes no arguments and needs no network; it only copies
// the image the repository holds into the output directory.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
const size = statSync(dest).size;
if (size === 0) throw new Error("entry.png is empty after copy");
console.log(`wrote ${dest} (${size} bytes)`);
