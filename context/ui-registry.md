# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

### Layout Components

#### Navbar
- **File:** `components/layout/Navbar.tsx`
- **Props:** `{ activeItem?: "dashboard" | "find-jobs" | "profile", navItems?: NavItem[], cta?: NavCTA }`
- **Classes:** `sticky top-0 z-50 w-full border-b border-border bg-surface h-16`
- **Nav items:** Active `text-accent font-medium text-sm`, Inactive `text-text-dark hover:text-accent font-medium text-sm`
- **CTA:** `bg-text-black text-white font-medium text-sm rounded-md px-4 py-2 hover:opacity-90`

#### Footer
- **File:** `components/layout/Footer.tsx`
- **Props:** `{ links?: FooterLink[] }`
- **Classes:** `w-full border-t border-border bg-surface py-8`
- **Links:** `text-sm text-text-secondary hover:text-text-primary transition-colors`

### Homepage Components

#### Hero
- **File:** `components/homepage/Hero.tsx`
- **Props:** `{ headingLine1?: string, headingLine2?: string, subheadline?: string, primaryCta?: CTA, secondaryCta?: CTA, previewImageSrc?: string }`
- **Container:** `relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(124,92,252,0.12),rgba(97,168,255,0.08),transparent_70%)] pt-16 pb-12 sm:pt-24 sm:pb-16`
- **Headline:** `text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary`
- **Subheadline:** `text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed`
- **Primary CTA:** `bg-text-black text-white px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 inline-flex items-center gap-2`
- **Secondary CTA:** `bg-surface border border-border text-text-primary px-5 py-2.5 rounded-md text-sm font-medium hover:bg-surface-secondary inline-flex items-center`
- **Dashboard Preview Wrapper:** `rounded-2xl border border-border bg-surface p-2 shadow-sm sm:p-4 max-w-5xl mx-auto`

#### SectionDivider
- **File:** `components/homepage/SectionDivider.tsx`
- **Classes:** `h-10 sm:h-12 w-full border-y border-border bg-diagonal-stripes`

#### HowItWorks ("Manage Your Job Search With Ease")
- **File:** `components/homepage/HowItWorks.tsx`
- **Props:** `{ headingLine1?: string, headingLine2?: string, features?: FeatureItem[], previewImage?: ImageAsset }`
- **Card:** `rounded-2xl border border-border bg-surface overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2`
- **Feature (Active):** `border-l-2 border-accent py-4 pl-5`
- **Feature (Default):** `border-t border-border py-4 pl-5`
- **Image Container:** `border-t lg:border-t-0 lg:border-l border-border bg-surface-secondary p-6 sm:p-10 flex items-center justify-center`

#### Features ("Apply With More Confidence, Every Time")
- **File:** `components/homepage/Features.tsx`
- **Props:** `{ headingLine1?: string, headingLine2?: string, benefits?: BenefitItem[], previewImage?: ImageAsset }`
- **Card:** `rounded-2xl border border-border bg-surface overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2`
- **Terminal Visual Container:** `border-b lg:border-b-0 lg:border-r border-border bg-surface-secondary p-6 sm:p-10 flex items-center justify-center`
- **Feature Row:** `border-t border-border py-4 pl-5`

#### Testimonial
- **File:** `components/homepage/Testimonial.tsx`
- **Props:** `{ eyebrow?: string, quote?: string, author?: Author }`
- **Eyebrow:** `text-xs font-semibold tracking-wider text-accent uppercase`
- **Quote:** `text-xl sm:text-2xl font-medium leading-relaxed text-text-primary max-w-3xl mx-auto`
- **Author Avatar:** `h-11 w-11 rounded-full object-cover`

#### BottomCTA
- **File:** `components/homepage/BottomCTA.tsx`
- **Props:** `{ heading?: string, subheadline?: string, primaryCta?: CTA, secondaryCta?: CTA }`
- **Card:** `rounded-2xl border border-border bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(124,92,252,0.14),rgba(97,168,255,0.08),transparent_75%)] p-10 sm:p-16 text-center shadow-sm`
- **Heading:** `text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary max-w-2xl mx-auto`
