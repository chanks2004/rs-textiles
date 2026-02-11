import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Uniformes Empresariales y Playeras Polo en México | Bordado y Serigrafía",
  description:
    "Uniformes para tu empresa: polos y playeras con bordado o serigrafía. Imagen profesional, calidad y entrega a todo México. Cotiza rápido.",
  alternates: { canonical: SITE_URL + "/uniformes-empresariales-playeras-polo" },
  openGraph: {
    title: "Uniformes Empresariales y Playeras Polo en México | Bordado y Serigrafía",
    description: "Uniformes para tu empresa: polos y playeras con bordado o serigrafía. Imagen profesional.",
    url: SITE_URL + "/uniformes-empresariales-playeras-polo",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image" },
};

export default function UniformesEmpresarialesPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Uniformes empresariales y playeras polo", path: "/uniformes-empresariales-playeras-polo" },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs items={[{ label: "Uniformes empresariales y playeras polo", path: "/uniformes-empresariales-playeras-polo" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Uniformes empresariales y playeras polo
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Polos y playeras con bordado o serigrafía para dar imagen profesional a tu empresa. Calidad y entrega a todo México.
          </p>
          <Button href="/cotizar" variant="primary">
            Cotizar uniformes
          </Button>
        </Container>
      </section>
    </>
  );
}
