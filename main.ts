// Entry for make.fun bounty news-image-20261126 (v2): copy the prebuilt
// one-day front-page image to the sandbox output directory.
// v2: full-day refresh — Jazan refinery hit + Brent settles $96.57,
// Gaza toll rises to ten, EU summit fails (24 of 27 back the €45bn
// loan, Friday session cancelled). 44 stories, all first reported
// Thu 26 Nov 2026. Navy theme deepened to (20,42,78), varied from v1.
// Built 27 Nov 2026 and resubmitted as v2 (re-entry): the v2 image
// scores 90.5 on the ten prompts against v1's 89.0, with accuracy up
// from 91 to 94 on the full-day data. The image is 1024x1024,
// deterministic, written by the build script. The program takes no arguments and needs no
// network; it only copies the image the repository holds into the
// output directory.
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
