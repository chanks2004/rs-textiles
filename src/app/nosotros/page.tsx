import type { Metadata } from "next";
import NextImage from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Somos un intermediario textil que conecta marcas y empresas con fabricantes confiables para playeras, sudaderas y gorras personalizadas.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Quiénes somos
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
                Nosotros
              </h1>
              <div className="mt-8 space-y-6 text-lg text-muted leading-relaxed">
                <p>
                  Somos un intermediario textil que conecta marcas y empresas con fabricantes confiables. Nos encargamos de conseguir la mejor calidad, precio y tiempos de entrega.
                </p>
                <p>
                  No fabricamos directamente: actuamos como enlace entre tu proyecto y los talleres que sí producen las prendas. Así tú te enfocas en tu negocio y nosotros en encontrar la opción que mejor se adapte a tu pedido de playeras, sudaderas o gorras personalizadas.
                </p>
                <p>
                  Nuestro objetivo es que cotizar y ordenar prendas personalizadas sea sencillo, transparente y con resultados que cumplan tus expectativas.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/cotizar" variant="primary">
                  Solicitar cotización
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg-subtle border border-border-light shadow-card">
              <NextImage
                src={images.nosotros}
                alt="Equipo RS Textiles"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
