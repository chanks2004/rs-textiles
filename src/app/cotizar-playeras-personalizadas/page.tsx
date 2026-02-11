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
  title: "Cotiza Playeras Personalizadas en México | Mayoreo y Entrega Rápida",
  description:
    "Cotiza playeras personalizadas en minutos. Precios según cantidad y técnica (serigrafía, DTF, bordado). Producción y envíos a todo México. Respuesta hoy.",
  alternates: { canonical: SITE_URL + "/cotizar-playeras-personalizadas" },
  openGraph: {
    title: "Cotiza Playeras Personalizadas en México | Mayoreo y Entrega Rápida",
    description:
      "Cotiza playeras personalizadas en minutos. Precios según cantidad y técnica. Producción y envíos a todo México.",
    url: SITE_URL + "/cotizar-playeras-personalizadas",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function CotizarPlayerasPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Cotiza playeras personalizadas", path: "/cotizar-playeras-personalizadas" },
        ]}
      />
      <FAQPageJsonLd faqs={FAQ_COTIZAR} />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Cotiza playeras personalizadas", path: "/cotizar-playeras-personalizadas" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Cotiza playeras personalizadas en México
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Precios según cantidad y técnica (serigrafía, DTF, bordado). Producción y envíos a todo México. Respuesta hoy.
          </p>
          <Button href="/cotizar" variant="primary">
            Ir a cotizar
          </Button>
        </Container>
      </section>
      <section className="py-12 md:py-16 bg-surface border-y border-gray-800">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Preguntas frecuentes</h2>
          <ul className="space-y-6 max-w-2xl">
            {FAQ_COTIZAR.map((faq) => (
              <li key={faq.question}>
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-gray-400">{faq.answer}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link href="/cotizar" className="text-white font-medium hover:text-gray-300">
              Cotizar ahora →
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
