import Image from "next/image";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  isActive?: boolean;
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
  features?: FeatureItem[];
  previewImage?: ImageAsset;
};

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    id: "fit",
    title: "Find jobs that actually fit",
    description:
      "Search by title and location or paste a job link. Get matched roles you can quickly scan.",
    isActive: true,
  },
  {
    id: "company",
    title: "Know the Company Before You Apply",
    description:
      "Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence.",
  },
  {
    id: "track",
    title: "Keep track of every application",
    description:
      "Keep a clear view of every job you've found, tailored. Your activity and progress all stay in one simple place.",
  },
];

const DEFAULT_IMAGE: ImageAsset = {
  src: "/images/jobs-lists.png",
  alt: "Job matches and applications",
  width: 2364,
  height: 1778,
};

export function HowItWorks({
  headingLine1 = "Manage Your Job",
  headingLine2 = "Search With Ease",
  features = DEFAULT_FEATURES,
  previewImage = DEFAULT_IMAGE,
}: Props) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm lg:grid-cols-2">
          {/* Left Column: Heading + Features */}
          <div className="flex flex-col justify-between p-8 sm:p-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                {headingLine1}
                <br />
                {headingLine2}
              </h2>
            </div>

            <div className="mt-8 flex flex-col">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`py-4 pl-5 ${
                    feature.isActive
                      ? "border-l-2 border-accent"
                      : "border-t border-border"
                  }`}
                >
                  <h3 className="text-base font-semibold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Preview */}
          <div className="flex items-center justify-center border-t border-border bg-surface-secondary p-6 sm:p-10 lg:border-t-0 lg:border-l">
            <Image
              src={previewImage.src}
              alt={previewImage.alt}
              width={previewImage.width}
              height={previewImage.height}
              className="h-auto w-full max-w-lg object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
