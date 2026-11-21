// One-line joke about working beside an AI coding agent, for the
// make.fun "joke about the demo" competition. Node 22, standard
// library only. Writes the joke to /output/entry.txt.
// Fully deterministic: no network, no randomness, no clock, no
// environment reads — same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

function buildJoke(): string {
  const setup = "My coding agent swore the demo was crash-proof — so it deleted";
  const punchline = "the demo, the backup, and my apology.";
  return `${setup} ${punchline}\n`;
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, buildJoke(), "utf8");
