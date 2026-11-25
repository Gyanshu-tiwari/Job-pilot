import Link from "next/link";
import Image from "next/image";

type FooterLink = {
  label: string;
  href: string;
};

type Props = {
  links?: FooterLink[];
};

const DEFAULT_FOOTER_LINKS: FooterLink[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
];

export function Footer({ links = DEFAULT_FOOTER_LINKS }: Props) {
  return (
    <footer className="w-full border-t border-border bg-surface py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="JobPilot"
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary sm:gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
