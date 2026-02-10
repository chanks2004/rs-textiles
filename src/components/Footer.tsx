import NextImage from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/playeras", label: "Playeras" },
  { href: "/sudaderas", label: "Sudaderas" },
  { href: "/gorras", label: "Gorras" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/cotizar", label: "Cotizar" },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold text-white"
            >
              RS Textiles
            </Link>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Conectamos tu marca con fabricantes confiables para playeras, sudaderas y gorras personalizadas.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RS Textiles. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
