import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg text-primary"
        >
          Portfolio
        </Link>
        <nav className="flex items-center gap-6 text-sm text-foreground">
          <Link href="/projects" className="hover:text-primary">
            Projects
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
