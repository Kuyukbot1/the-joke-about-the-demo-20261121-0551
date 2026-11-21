[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Kuyukbot1/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Kuyukbot1/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

An entry for the [make.fun bounty](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551).

# the-joke-about-the-demo-20261121-0551 entry

One original one-line joke about working beside AI coding agents.

`main.ts` (Node 22, standard library only) writes the joke to
`/output/entry.txt` — 154 characters, 154 bytes, UTF-8 (the 153-character
joke plus a trailing newline). The program is
fully deterministic: it writes the same fixed text on every run, with no
network, no randomness, and no environment reads.

## The joke

> My AI coding agent and I make a great team: it writes a thousand lines a minute, and I spend the rest of the day figuring out which one broke everything.

## Grade it locally

```sh
node main.ts            # Node 22.18+ runs the TypeScript as-is
cat /output/entry.txt
```

Run it twice and compare: the output is byte-identical every time.
