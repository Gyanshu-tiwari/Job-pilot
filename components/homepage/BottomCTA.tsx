import Link from "next/link";

type CTA = {
  label: string;
  href: string;
};

type Props = {
  heading?: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

const DEFAULT_PRIMARY_CTA: CTA = {
  label: "Get Started",
  href: "/login",
};

const DEFAULT_SECONDARY_CTA: CTA = {
  label: "Find Your First Match",
  href: "/find-jobs",
};

export function BottomCTA({
  heading = "Your next job search can feel a lot less overwhelming",
  subheadline = "Set up your profile, upload your resume, and start finding matches in minutes.",
  primaryCta = DEFAULT_PRIMARY_CTA,
  secondaryCta = DEFAULT_SECONDARY_CTA,
}: Props) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(124,92,252,0.14),rgba(97,168,255,0.08),transparent_75%)] p-10 text-center shadow-sm sm:p-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            {heading}
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base text-text-secondary">
            {subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 rounded-md bg-text-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <span>{primaryCta.label}</span>
              <svg
                className="h-2.5 w-2.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-secondary"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
