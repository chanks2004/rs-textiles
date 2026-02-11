import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Playeras para Eventos en México | Carreras, Graduaciones y Equipos",
  description:
    "Playeras personalizadas para eventos: carreras, graduaciones, despedidas y equipos. Paquetes por cantidad, tiempos claros y envíos nacionales.",
  alternates: { canonical: SITE_URL + "/playeras-para-eventos" },
  openGraph: {
    title: "Playeras para Eventos en México | Carreras, Graduaciones y Equipos",
    description: "Playeras para eventos: carreras, graduaciones, despedidas y equipos. Paquetes y envíos nacionales.",
    url: SITE_URL + "/playeras-para-eventos",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function PlayerasParaEventosPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Playeras para eventos", path: "/playeras-para-eventos" },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Playeras para eventos", path: "/playeras-para-eventos" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Playeras para eventos
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Carreras, graduaciones, despedidas y equipos: paquetes por cantidad, tiempos claros y envíos a todo México.
          </p>
          <Button href="/cotizar" variant="primary">
            Cotizar playeras para eventos
          </Button>
        </Container>
      </section>
    </>
  );
}
