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
      <section className="py-16 md:py-24">
        <Container>
          <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
            Proceso
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Cómo funciona
          </h1>
          <p className="mt-6 text-xl text-gray-400 leading-relaxed max-w-3xl">
            Desde tu idea hasta la entrega: te guiamos en cada paso.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-surface border-y border-gray-800">
        <Container>
          <div className="max-w-3xl space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative pl-8 md:pl-12 border-l-2 border-primary/50">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <span className="text-sm font-semibold text-white">
                  Paso {index + 1}
                </span>
                <h2 className="mt-1 text-2xl font-bold text-white">
                  {step.title}
                </h2>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gray-900/80 border border-gray-800 p-8 md:p-12 text-center">
            <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Cotización
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              ¿Listo para empezar?
            </h2>
            <p className="mt-4 text-gray-400">
              Envíanos los datos de tu pedido y te respondemos con una cotización.
            </p>
            <div className="mt-8">
              <Button href="/cotizar" variant="primary">
                Solicitar cotización
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
