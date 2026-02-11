import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { FAQ_COTIZAR } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Playeras Personalizadas, Tiempos, Mínimos y Envíos",
  description:
    "Resuelve dudas: mínimos de pedido, técnicas (serigrafía/DTF/bordado), tiempos de entrega, envíos y cómo cotizar playeras personalizadas en México.",
  alternates: { canonical: SITE_URL + "/faq" },
  openGraph: {
    title: "Preguntas Frecuentes | Playeras Personalizadas, Tiempos, Mínimos y Envíos",
    description: "Mínimos, técnicas, tiempos de entrega, envíos y cómo cotizar playeras personalizadas en México.",
    url: SITE_URL + "/faq",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Preguntas frecuentes", path: "/faq" },
        ]}
      />
      <FAQPageJsonLd faqs={FAQ_COTIZAR} />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Preguntas frecuentes", path: "/faq" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Preguntas frecuentes
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12">
            Resuelve dudas sobre mínimos, técnicas, tiempos de entrega, envíos y cómo cotizar playeras personalizadas en México.
          </p>
          <ul className="space-y-8 max-w-2xl">
            {FAQ_COTIZAR.map((faq) => (
              <li key={faq.q} className="border-b border-gray-800 pb-8 last:border-0">
                <h2 className="text-xl font-semibold text-white">{faq.q}</h2>
                <p className="mt-3 text-gray-400">{faq.a}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Button href="/cotizar" variant="primary">
              Cotizar ahora
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
