# Progress Tracker

Update this file after every completed feature. Any AI agent reading this should immediately know what is done, what is in progress, and what is next.

---

## Current Status

**Phase:** Phase 1 — Foundation
**Last completed:** 01 Homepage
**Next:** 02 Auth

---

## Progress

### Phase 1 — Foundation

- [x] 01 Homepage
- [ ] 02 Auth
- [ ] 03 PostHog Initialization
- [ ] 04 Database Schema

### Phase 2 — Profile Page

- [ ] 05 Profile Page — Full UI
- [ ] 06 Profile Save Logic
- [ ] 07 AI Profile Extraction from Resume
- [ ] 08 Resume PDF Generation from Profile

### Phase 3 — Find Jobs Page

- [ ] 09 Find Jobs Page — Full UI
- [ ] 10 Adzuna Job Discovery
- [ ] 11 Filter + Sort + Pagination

### Phase 4 — Job Details Page

- [ ] 12 Job Details Page — Full UI
- [ ] 13 Company Research Agent

### Phase 5 — Dashboard

- [ ] 14 Dashboard Page — Full UI
- [ ] 15 Stats Bar — Real Data
- [ ] 16 Recent Activity — Real Data
- [ ] 17 Analytics Charts — PostHog Data

---

## Decisions Made During Build

- Used Next.js `next/font/google` with Inter font applied to root layout as specified in `ui-rules.md`.
- Implemented SectionDivider component using `.bg-diagonal-stripes` repeating linear gradient with border tokens for the exact section dividers from `landing-page.png`.
- Embedded high-res PNG visual assets from `public/images/` (`dashboard-demo.png`, `jobs-lists.png`, `agnet-log.png`, `user-icon.png`) and `public/logo.png`.
- Used only design tokens (`text-text-primary`, `text-text-secondary`, `bg-surface`, `bg-text-black`, `border-border`, `text-accent`, etc.) with zero hardcoded hex or raw Tailwind colors.

---

## Notes

- Feature 01 Homepage is built with mock data and links ready for wiring with auth in Feature 02.
