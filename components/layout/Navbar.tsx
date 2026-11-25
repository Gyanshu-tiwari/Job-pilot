import Link from "next/link";
import Image from "next/image";

type NavItem = {
  id: "dashboard" | "find-jobs" | "profile";
  label: string;
  href: string;
};

type NavCTA = {
  label: string;
  href: string;
};

type Props = {
  activeItem?: "dashboard" | "find-jobs" | "profile";
  navItems?: NavItem[];
  cta?: NavCTA;
};

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard" },
  { id: "find-jobs", label: "Find Jobs", href: "/find-jobs" },
  { id: "profile", label: "Profile", href: "/profile" },
];

const DEFAULT_CTA: NavCTA = {
  label: "Start for free",
  href: "/login",
};

export function Navbar({
  activeItem,
  navItems = DEFAULT_NAV_ITEMS,
  cta = DEFAULT_CTA,
}: Props) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="JobPilot"
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                activeItem === item.id
                  ? "text-accent"
                  : "text-text-dark hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center rounded-md bg-text-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
