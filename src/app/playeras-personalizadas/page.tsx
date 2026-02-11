import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Playeras Personalizadas | Serigrafía, DTF y Bordado en México",
  description:
    "Playeras personalizadas para marcas, negocios y eventos. Elige técnica, calidad y tiempos de entrega. Cotiza fácil con RZ Textiles y recibe atención rápida.",
  alternates: { canonical: SITE_URL + "/playeras-personalizadas" },
  openGraph: {
    title: "Playeras Personalizadas | Serigrafía, DTF y Bordado en México",
    description:
      "Playeras personalizadas para marcas, negocios y eventos. Elige técnica, calidad y tiempos de entrega.",
    url: SITE_URL + "/playeras-personalizadas",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function PlayerasPersonalizadasPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Playeras personalizadas", path: "/playeras-personalizadas" },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Playeras personalizadas", path: "/playeras-personalizadas" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Playeras personalizadas
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Para marcas, negocios y eventos. Elige técnica (serigrafía, DTF, bordado), calidad y tiempos de entrega. Cotiza fácil con RZ Textiles.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/playeras" variant="primary">
              Ver playeras y opciones
            </Button>
            <Button href="/cotizar" variant="secondary">
              Cotizar
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
