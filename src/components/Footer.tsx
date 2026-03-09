import Link from "next/link";

const footerLinks = [
  { href: "/playeras", label: "Playeras" },
  { href: "/sudaderas", label: "Sudaderas" },
  { href: "/gorras", label: "Gorras" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/faq", label: "Preguntas frecuentes" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
  { href: "/cotizar", label: "Cotizar" },
];

export function Footer() {
  return (
    <footer className="bg-bg-subtle border-t border-border-light mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading text-lg font-bold text-navy"
            >
              RS Textiles
            </Link>
            <p className="mt-3 text-sm text-muted max-w-sm leading-relaxed">
              Soluciones textiles y de prendas personalizadas para marcas y empresas. Conectamos tu proyecto con producción confiable en México.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <p className="text-sm text-muted">
              <a
                href="mailto:contactorstextiles@gmail.com"
                className="hover:text-primary transition-colors"
              >
                contactorstextiles@gmail.com
              </a>
            </p>
            <Link
              href="/cotizar"
              className="mt-4 inline-block px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border-light">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} RS Textiles. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
