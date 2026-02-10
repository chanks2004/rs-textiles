import type { Metadata } from "next";
import NextImage from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Playeras personalizadas",
  description:
    "Playeras personalizadas: tipos de tela, serigrafía, bordado e impresión digital. Cotiza desde 50 piezas.",
};

const fabricTypes = [
  "Algodón 100% (peinado, cardado)",
  "Poliéster",
  "Mezclas algodón-poliéster (50/50, 80/20)",
  "Triblend",
  "Dry-fit y deportivas",
];

const printMethods = [
  {
    name: "Serigrafía",
    description: "Ideal para grandes cantidades y diseños con pocos colores. Duradero y económico.",
    imageSrc: images.playerasSerigrafia,
  },
  {
    name: "Bordado",
    description: "Logos y textos con acabado premium. Perfecto para uniformes y branding corporativo.",
    imageSrc: images.playerasBordado,
  },
  {
    name: "Impresión digital",
    description: "Diseños full color, fotos y gradientes. Sin mínimo de colores, ideal para pedidos cortos.",
    imageSrc: images.digital,
  },
];

export default function PlayerasPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
                Playeras
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Playeras personalizadas
              </h1>
              <p className="mt-6 text-xl text-gray-400 leading-relaxed">
                Diferentes tipos de tela y métodos de impresión para que tu marca luzca como quieres.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
              <NextImage
                src={images.playerasHero}
                alt="Playeras personalizadas"
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
            Playeras en detalle
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Ofrecemos gran variedad de colores de muestra en el catálogo, no solo unos colores en específico. Cuello redondo, manga corta y tejido suave para personalizar.
          </p>
          <div className="relative aspect-[2/1] md:aspect-[21/9] max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
            <NextImage
              src={images.playerasColores}
              alt="Playeras con gran variedad de colores en catálogo"
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
            Nuestras playeras en fotos reales. Corte clásico, cuello redondo y manga corta para un look profesional o casual.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {images.playerasModelos.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800"
              >
                <NextImage
                  src={src}
                  alt={`Playera personalizada, modelo ${i + 1}`}
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
                Tipos de tela
              </h2>
              <ul className="space-y-3 max-w-2xl">
                {fabricTypes.map((fabric) => (
                  <li
                    key={fabric}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {fabric}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
              <NextImage
                src={images.playerasColores}
                alt="Tipos de tela para playeras"
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Métodos de impresión
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {printMethods.map((method) => (
              <div
                key={method.name}
                className="rounded-2xl border border-gray-800 overflow-hidden bg-gray-900/80"
              >
                <div className="relative aspect-video bg-gray-800">
                  <NextImage
                    src={method.imageSrc}
                    alt={method.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-white">
                    {method.name}
                  </h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-surface border-y border-gray-800">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Amplia variedad a tu medida
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Contamos con una amplia gama de materiales, tipos de tela, cortes, moldes y más. Aquí estamos para ayudarte a hacer tu idea una realidad. <strong className="text-white">Pregúntanos, es gratis.</strong>
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gray-900/80 border border-gray-800 p-8 md:p-12 text-center">
            <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Cotización
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              ¿Listo para cotizar?
            </h2>
            <p className="mt-4 text-gray-400">
              Envíanos tu idea y te respondemos con precios y tiempos.
            </p>
            <div className="mt-8">
              <Button href="/cotizar" variant="primary">
                Cotizar playeras
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
