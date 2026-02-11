import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { FAQ_COTIZAR } from "@/lib/faq";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Playeras Personalizadas Mayoreo en México | Proveedor y Precios por Volumen",
  description:
    "Mayoreo de playeras personalizadas para empresas y marcas. Precios por volumen, control de calidad y entregas confiables. Cotiza hoy mismo en RZ Textiles.",
  alternates: { canonical: SITE_URL + "/playeras-personalizadas-mayoreo" },
  openGraph: {
    title: "Playeras Personalizadas Mayoreo en México | Proveedor y Precios por Volumen",
    description: "Mayoreo de playeras personalizadas para empresas y marcas. Precios por volumen y entregas confiables.",
    url: SITE_URL + "/playeras-personalizadas-mayoreo",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function PlayerasMayoreoPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Playeras personalizadas mayoreo", path: "/playeras-personalizadas-mayoreo" },
        ]}
      />
      <FAQPageJsonLd faqs={FAQ_COTIZAR} />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Playeras personalizadas mayoreo", path: "/playeras-personalizadas-mayoreo" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Playeras personalizadas mayoreo
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Mayoreo para empresas y marcas: precios por volumen, control de calidad y entregas confiables a todo México.
          </p>
          <Button href="/cotizar" variant="primary">
            Cotizar mayoreo
          </Button>
        </Container>
      </section>
      <section className="py-12 md:py-16 bg-surface border-y border-gray-800">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Preguntas frecuentes</h2>
          <ul className="space-y-6 max-w-2xl">
            {FAQ_COTIZAR.map((faq) => (
              <li key={faq.q}>
                <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                <p className="mt-2 text-gray-400">{faq.a}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link href="/cotizar" className="text-white font-medium hover:text-gray-300">
              Cotizar ahora
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
