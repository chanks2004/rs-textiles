import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Serigrafía en Playeras | Durabilidad y Mejor Precio por Volumen",
  description:
    "Conoce cuándo conviene la serigrafía, ventajas, tiempos y recomendaciones para tu pedido. Cotiza playeras con serigrafía en México.",
  alternates: { canonical: SITE_URL + "/tecnicas/serigrafia" },
  openGraph: {
    title: "Serigrafía en Playeras | Durabilidad y Mejor Precio por Volumen",
    description: "Cuándo conviene la serigrafía, ventajas y recomendaciones. Cotiza playeras con serigrafía en México.",
    url: SITE_URL + "/tecnicas/serigrafia",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function SerigrafiaPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Técnicas", path: "/tecnicas/serigrafia" },
          { name: "Serigrafía en playeras", path: "/tecnicas/serigrafia" },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Técnicas", path: "/tecnicas/serigrafia" },
              { label: "Serigrafía en playeras", path: "/tecnicas/serigrafia" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Serigrafía en playeras
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Ideal para grandes cantidades: mejor precio por volumen y gran durabilidad. Te explicamos ventajas, tiempos y cuándo conviene.
          </p>
          <Button href="/cotizar" variant="primary">
            Cotizar serigrafía
          </Button>
        </Container>
      </section>
    </>
  );
}
