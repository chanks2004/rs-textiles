import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bordado en Playeras y Polos | Acabado Premium para Empresas",
  description:
    "Bordado profesional para uniformes y marcas. Te explicamos cuándo conviene y cómo asegurar calidad. Cotiza bordado en México.",
  alternates: { canonical: SITE_URL + "/tecnicas/bordado" },
  openGraph: {
    title: "Bordado en Playeras y Polos | Acabado Premium para Empresas",
    description: "Bordado profesional para uniformes y marcas. Cuándo conviene y cómo asegurar calidad.",
    url: SITE_URL + "/tecnicas/bordado",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function BordadoPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Técnicas", path: "/tecnicas/bordado" },
          { name: "Bordado en playeras y polos", path: "/tecnicas/bordado" },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Técnicas", path: "/tecnicas/bordado" },
              { label: "Bordado en playeras y polos", path: "/tecnicas/bordado" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Bordado en playeras y polos
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Acabado premium para uniformes y marcas. Te explicamos cuándo conviene el bordado y cómo asegurar calidad en tu pedido.
          </p>
          <Button href="/cotizar" variant="primary">
            Cotizar bordado
          </Button>
        </Container>
      </section>
    </>
  );
}
