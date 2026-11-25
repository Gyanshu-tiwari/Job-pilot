<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Read Before Anything Else

Read in this exact order before any implementation:

1. context/project-overview.md
2. context/architecture.md
3. context/ui-tokens.md
4. context/ui-rules.md
5. context/ui-registry.md
6. context/code-standards.md
7. context/library-docs.md
8. context/build-plan.md
9. context/progress-tracker.md

## Rules That Never Change

- Never use hardcoded hex values or raw Tailwind color classes
- Update `progress-tracker.md` and `ui-registry.md` after every feature
- Before any third party library — load its installed skill first,
  then read `context/library-docs.md` for project-specific rules
- If the same problem persists after one corrective prompt —
  stop immediately and run /recover

## Available Skills

- `/scope` — Turns a product idea into a living, coarse scope and keeps it current as you ship.
- `/audit` — Writes the AGENTS.md context files every other skill reads.
- `/architect` — Makes a load bearing decision and writes it as a build spec in docs/specs/.
- `/develop` — Builds a feature, UI or backend, from its spec. Gates to /architect if a decision is owed.
- `/check` — Confirms a change before merge. /check verify runs the real app; /check review reads the code on a second model.
- `/test` — Writes a test suite for the code you just changed.
- `/document` — Writes the PR text, changelog, release note, or postmortem from the real diff.    
- `/sync` — Keeps AGENTS.md, the scope, and spec statuses current after a change.
- `/debug` — Finds and fixes the root cause of a bug, then hands a regression test to /test.
