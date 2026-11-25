import Link from "next/link";
import Image from "next/image";

type CTA = {
  label: string;
  href: string;
};

type Props = {
  headingLine1?: string;
  headingLine2?: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  previewImageSrc?: string;
};

const DEFAULT_PRIMARY_CTA: CTA = {
  label: "Get Started",
  href: "/login",
};

const DEFAULT_SECONDARY_CTA: CTA = {
  label: "Find Your First Match",
  href: "/find-jobs",
};

export function Hero({
  headingLine1 = "Job hunting is hard.",
  headingLine2 = "Your tools shouldn't be.",
  subheadline = "Stop applying blind. JobPilot finds the jobs, researches the companies, and gives you everything you need to stand out.",
  primaryCta = DEFAULT_PRIMARY_CTA,
  secondaryCta = DEFAULT_SECONDARY_CTA,
  previewImageSrc = "/images/dashboard-demo.png",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(124,92,252,0.12),rgba(97,168,255,0.08),transparent_70%)] pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl md:leading-[1.15]">
            {headingLine1}
            <br />
            {headingLine2}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
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

        <div className="mt-12 sm:mt-16">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-sm sm:p-4">
            <Image
              src={previewImageSrc}
              alt="JobPilot Dashboard Preview"
              width={4788}
              height={2416}
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
