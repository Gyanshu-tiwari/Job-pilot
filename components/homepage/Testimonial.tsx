import Image from "next/image";

type Author = {
  name: string;
  role: string;
  avatarSrc: string;
};

type Props = {
  eyebrow?: string;
  quote?: string;
  author?: Author;
};

const DEFAULT_AUTHOR: Author = {
  name: "Tom Wilson",
  role: "Junior Developer",
  avatarSrc: "/images/user-icon.png",
};

export function Testimonial({
  eyebrow = "SUCCESS STORIES",
  quote = "“I used to spend my evenings copy-pasting resumes. Now I open my dashboard to see interviews waiting. It feels like cheating. Had 3 offers on the table simultaneously.”",
  author = DEFAULT_AUTHOR,
}: Props) {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold tracking-wider text-accent uppercase">
          {eyebrow}
        </p>

        <blockquote className="mx-auto mt-6 max-w-3xl text-xl font-medium leading-relaxed text-text-primary sm:text-2xl">
          {quote}
        </blockquote>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Image
            src={author.avatarSrc}
            alt={author.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-text-primary">
              {author.name}
            </p>
            <p className="text-xs text-text-secondary">{author.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
