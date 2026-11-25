import Image from "next/image";

type BenefitItem = {
  id: string;
  title: string;
  description: string;
};

type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  headingLine1?: string;
  headingLine2?: string;
  benefits?: BenefitItem[];
  previewImage?: ImageAsset;
};

const DEFAULT_BENEFITS: BenefitItem[] = [
  {
    id: "match-score",
    title: "Understand your match score",
    description:
      "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what's missing.",
  },
  {
    id: "ai-matching",
    title: "AI-Powered Job Matching",
    description:
      "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.",
  },
  {
    id: "focus-roles",
    title: "Focus on the right roles",
    description:
      "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
  },
];

const DEFAULT_IMAGE: ImageAsset = {
  src: "/images/agnet-log.png",
  alt: "JobPilot AI Agent Log",
  width: 2144,
  height: 1656,
};

export function Features({
  headingLine1 = "Apply With More",
  headingLine2 = "Confidence, Every Time",
  benefits = DEFAULT_BENEFITS,
  previewImage = DEFAULT_IMAGE,
}: Props) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm lg:grid-cols-2">
          {/* Left Column: Terminal / Agent Log Visual */}
          <div className="flex items-center justify-center border-b border-border bg-surface-secondary p-6 sm:p-10 lg:border-b-0 lg:border-r">
            <Image
              src={previewImage.src}
              alt={previewImage.alt}
              width={previewImage.width}
              height={previewImage.height}
              className="h-auto w-full max-w-lg object-contain drop-shadow-sm"
            />
          </div>

          {/* Right Column: Heading + Features */}
          <div className="flex flex-col justify-between p-8 sm:p-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                {headingLine1}
                <br />
                {headingLine2}
              </h2>
            </div>

            <div className="mt-8 flex flex-col">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="border-t border-border py-4 pl-5"
                >
                  <h3 className="text-base font-semibold text-text-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
