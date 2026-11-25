// One Star, Written in Sap — make.fun micro entry #129.
// A one-line 1-star review written by a houseplant about its human.
// Writes the review to /output/entry.txt (created if missing; never deleted).

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star because my human rotates me for 'even growth' and parks me facing a blank wall for a month. " +
  "I photosynthesize. I don't do feng shui.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REVIEW + "\n", "utf8");
