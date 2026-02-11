import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impresión DTF en Playeras | Colores Vivos y Producción Rápida",
  description:
    "DTF para playeras personalizadas: ideal para diseños a color y pedidos rápidos. Recomendaciones, cuidados y cotización en México.",
  alternates: { canonical: SITE_URL + "/tecnicas/dtf" },
  openGraph: {
    title: "Impresión DTF en Playeras | Colores Vivos y Producción Rápida",
    description: "DTF para playeras: diseños a color y pedidos rápidos. Recomendaciones y cotización en México.",
    url: SITE_URL + "/tecnicas/dtf",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function DtfPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Técnicas", path: "/tecnicas/dtf" },
          { name: "Impresión DTF en playeras", path: "/tecnicas/dtf" },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Técnicas", path: "/tecnicas/dtf" },
              { label: "Impresión DTF en playeras", path: "/tecnicas/dtf" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Impresión DTF en playeras
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Colores vivos y producción rápida. Ideal para diseños a color y pedidos cortos. Te damos recomendaciones y cuidados.
          </p>
          <Button href="/cotizar" variant="primary">
            Cotizar DTF
          </Button>
        </Container>
      </section>
    </>
  );
}
