// The joke about the demo — make.fun entry.
// Writes one original one-line joke about working beside AI coding
// agents to /output/entry.txt. Node 22, standard library only.
// Fully deterministic: same input, same bytes, every run. No network,
// no randomness, no wall clock, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent and I make a great team: it writes a thousand lines a minute, and I spend the rest of the day figuring out which one broke everything.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
