"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/playeras", label: "Playeras" },
  { href: "/sudaderas", label: "Sudaderas" },
  { href: "/gorras", label: "Gorras" },
  { href: "/blog", label: "Blog" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/faq", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-light shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-heading text-xl md:text-2xl font-bold text-navy tracking-tight"
          >
            RS Textiles
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cotizar"
              className="ml-4 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm"
            >
              Solicitar cotización
            </Link>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <Link
              href="/cotizar"
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold"
            >
              Cotizar
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-muted hover:bg-bg-subtle hover:text-navy"
              aria-label="Menú"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-border-light">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2.5 px-3 text-sm font-medium rounded-lg ${
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted hover:bg-bg-subtle hover:text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
