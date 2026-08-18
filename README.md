# Independent Reinforcement Learning Lab

Publication site for `irl-lab.starvaggi.us`.

The site is intentionally separate from the Python `rl-lab` repository. The
research runner records Git provenance at the beginning of each study, and the
website must not make the experiment source tree dirty while a sequential run
is in progress.

## Local development

Use Node 22.12 or Node 24 and pnpm:

```sh
pnpm install
pnpm dev
```

Validate the static build with:

```sh
pnpm build
```

## Publication boundary

Do not copy complete Protocol v2 result directories into this repository.
Publication artifacts should be deliberate, compact exports: optimized figures,
small derived JSON or CSV tables, run IDs, configuration hashes, and the exact
`rl-lab` Git revision used to produce them.

The first article currently contains exact model predictions and a locked
empirical-results section. Full-run claims stay withheld until the corresponding
manifests are complete and validation passes.

## Vercel

Deploy this directory as the Vercel project root. Astro produces a static site,
so no adapter or server runtime is required. Set the custom production domain to
`irl-lab.starvaggi.us`; Vercel will provide the project-specific CNAME value to
enter in Squarespace DNS.
