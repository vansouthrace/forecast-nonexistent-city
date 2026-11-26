// Deadpan Forecasts for Cities That Do Not Exist — a make.fun program/v1 entry.
// It writes one line to /output/entry.txt: a deadpan weather forecast for a city
// that does not exist, absurd yet believable enough to read like a real broadcast
// line. Node 22, standard library only. Outside the grader, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const forecast =
  'In Brambleford, thick fog this morning, highs of 19, and scattered showers falling politely upward by mid-afternoon.';

// The gate allows 1 to 160 characters: refuse to hand in a line that is too long
// rather than let an invalid entry through.
if ([...forecast].length > 160) {
  throw new Error(`forecast is ${[...forecast].length} characters, over the 160 limit`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), forecast + '\n', 'utf8');
