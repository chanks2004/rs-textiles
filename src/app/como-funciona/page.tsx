import type { Metadata } from "next";
import NextImage from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "Proceso de cotización, muestras, producción y entrega de playeras, sudaderas y gorras personalizadas.",
};

const steps = [
  {
    title: "Cotización",
    description:
      "Nos envías tu idea: tipo de prenda, cantidad aproximada, diseño (o descripción) y fecha en que necesitas el pedido. Revisamos con nuestros fabricantes y te respondemos con precios, opciones de tela/estilo y tiempo de entrega estimado. Sin compromiso.",
  },
  {
    title: "Muestras",
    description:
      "Si lo requieres, coordinamos muestras de tela, tallas o una prenda de prueba con tu diseño antes de producir el pedido completo. Así confirmas calidad y acabado.",
  },
  {
    title: "Producción",
    description:
      "Una vez aprobada la cotización y, en su caso, la muestra, confirmas el pedido. Nos encargamos de coordinar con el proveedor, dar seguimiento y mantenerte informado del avance.",
  },
  {
    title: "Entrega",
    description:
      "El pedido se entrega en el lugar y fecha acordados. Revisamos que todo esté conforme. Si surge algún ajuste, lo gestionamos con el fabricante.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Proceso
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
            Cómo funciona
          </h1>
          <p className="mt-6 text-xl text-muted leading-relaxed max-w-3xl">
            Desde tu idea hasta la entrega: te guiamos en cada paso.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-bg-subtle">
        <Container>
          <div className="max-w-3xl space-y-14 md:space-y-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative pl-8 md:pl-12 border-l-2 border-primary/40">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <span className="text-sm font-semibold text-primary">
                  Paso {index + 1}
                </span>
                <h2 className="mt-1 text-2xl font-bold text-navy">
                  {step.title}
                </h2>
                <p className="mt-4 text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-primary">
        <Container>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-primary border border-white/20 shadow-card p-8 md:p-12 text-center">
            <p className="text-white/90 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Cotización
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              ¿Listo para empezar?
            </h2>
            <p className="mt-4 text-white/90">
              Envíanos los datos de tu pedido y te respondemos con una cotización.
            </p>
            <div className="mt-8">
              <a
                href="/cotizar"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold bg-primary-dark text-white hover:bg-primary-dark/90 transition-all duration-200 shadow-sm ring-2 ring-white/30"
              >
                Solicitar cotización
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
