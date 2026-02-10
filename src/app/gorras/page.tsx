import type { Metadata } from "next";
import NextImage from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gorras personalizadas",
  description:
    "Gorras personalizadas bordadas o estampadas. Diferentes estilos y opciones de bordado para tu marca.",
};

const capTypes = [
  "Gorra tipo trucker (malla atrás)",
  "Gorra estructurada (frente rígido)",
  "Gorra plana / snapback",
  "Gorra tipo dad cap",
  "Gorra con cierre ajustable",
];

const embroideryOptions = [
  "Logo o texto bordado en frente (1–3 ubicaciones típicas).",
  "Hilos estándar y metalizados según disponibilidad.",
  "Mínimos desde 24–50 piezas según estilo y proveedor.",
  "Muestras disponibles antes de producción.",
];

export default function GorrasPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
                Gorras
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Gorras personalizadas
              </h1>
              <p className="mt-6 text-xl text-gray-400 leading-relaxed">
                Gorras bordadas o estampadas para eventos, equipos y marcas.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
              <NextImage
                src={images.gorrasHero}
                alt="Gorras personalizadas"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-surface border-y border-gray-800">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Gorras en detalle
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Trucker, estructuradas o planas. Ofrecemos gran variedad de colores de muestra en el catálogo, no solo unos colores en específico. Con malla o sólidas, listas para bordar tu logo.
          </p>
          <div className="relative aspect-[2/1] md:aspect-[21/9] max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
            <NextImage
              src={images.gorrasColores}
              alt="Gorras con gran variedad de colores en catálogo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Cómo se ven en persona
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Nuestras gorras en fotos reales. Estilo trucker, estructurado o plano, con bordado o estampado.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {images.gorrasModelos.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800"
              >
                <NextImage
                  src={src}
                  alt={`Gorra personalizada, modelo ${i + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-surface border-y border-gray-800">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Tipos de gorras
              </h2>
              <ul className="space-y-3 max-w-2xl">
                {capTypes.map((type) => (
                  <li key={type} className="flex items-center gap-3 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
              <NextImage
                src={images.gorrasHero}
                alt="Tipos de gorras"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 order-2 lg:order-1">
              <NextImage
                src={images.gorrasEmbroidery}
                alt="Opciones de bordado en gorras"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Opciones de bordado
              </h2>
              <ul className="space-y-3 max-w-2xl">
                {embroideryOptions.map((option, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    {option}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-400 leading-relaxed">
                También ofrecemos estampado en gorras cuando el diseño lo permite. Te recomendamos la mejor opción según tu arte y cantidad.
              </p>
            </div>
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
              Cotiza tus gorras
            </h2>
            <p className="mt-4 text-gray-400">
              Envíanos estilo, cantidad y tu logo; te respondemos con precios y muestras.
            </p>
            <div className="mt-8">
              <Button href="/cotizar" variant="primary">
                Cotizar gorras
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
