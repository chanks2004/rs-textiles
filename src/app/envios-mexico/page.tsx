import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { FAQ_COTIZAR } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Envíos de Playeras Personalizadas a Todo México | Tiempos y Cobertura",
  description:
    "Consulta tiempos de producción, cobertura y envíos a todo México para playeras personalizadas. Cotiza y recibe seguimiento.",
  alternates: { canonical: SITE_URL + "/envios-mexico" },
  openGraph: {
    title: "Envíos de Playeras Personalizadas a Todo México | Tiempos y Cobertura",
    description: "Tiempos de producción, cobertura y envíos a todo México para playeras personalizadas.",
    url: SITE_URL + "/envios-mexico",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function EnviosMexicoPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Envíos a todo México", path: "/envios-mexico" },
        ]}
      />
      <FAQPageJsonLd faqs={FAQ_COTIZAR} />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Envíos a todo México", path: "/envios-mexico" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Envíos a todo México
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Tiempos de producción, cobertura y envíos a todo México para playeras personalizadas. Cotiza y recibe seguimiento.
          </p>
          <Button href="/cotizar" variant="primary">
            Cotizar y consultar envíos
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
        </Container>
      </section>
    </>
  );
}
