import Link from "next/link";

const navLinks = [
  { href: "/templates", label: "Templates" },
  { href: "/templates?category=productivity", label: "Productivity" },
  { href: "/templates?category=business", label: "Business" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-stone-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-sm text-white">
            N
          </span>
          NotionNest
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 transition-colors hover:text-stone-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/templates"
            className="hidden rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-700 sm:inline-block"
          >
            Browse templates
          </Link>
        </div>
      </div>
    </header>
  );
}
