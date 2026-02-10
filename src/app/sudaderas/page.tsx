import type { Metadata } from "next";
import NextImage from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sudaderas personalizadas",
  description:
    "Sudaderas con capucha y sin capucha, algodón y mezclas. Personalización por bordado o estampado. Cotiza tu pedido.",
};

const types = [
  "Con capucha (hoodie)",
  "Sin capucha (crewneck)",
  "Con cremallera (full zip / quarter zip)",
  "Con bolsillo canguro",
];

const materials = [
  "Algodón peinado (interior suave)",
  "Mezcla algodón-poliéster",
  "Frisa (felpa) interior",
  "Peso ligero o pesado según temporada",
];

const productionDetails = [
  "Personalización por bordado o serigrafía según cantidad y diseño.",
  "Mínimos desde 50 piezas según proveedor y tipo.",
  "Gran variedad de colores de muestra en el catálogo; no solo unos colores en específico.",
  "Tiempos de entrega típicos: 10 a 21 días después de aprobación.",
];

export default function SudaderasPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
                Sudaderas
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Sudaderas personalizadas
              </h1>
              <p className="mt-6 text-xl text-gray-400 leading-relaxed">
                Hoodies y crewnecks para tu marca, evento o equipo. Calidad y buen precio.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
              <NextImage
                src={images.sudaderasHero}
                alt="Sudaderas personalizadas"
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
            Sudaderas en detalle
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Ofrecemos gran variedad de colores de muestra en el catálogo, no solo unos colores en específico. Todas con capucha, bolsillo canguro y acabado de calidad.
          </p>
          <div className="relative aspect-[4/3] max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
            <NextImage
              src={images.sudaderasColores}
              alt="Sudaderas con gran variedad de colores en catálogo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
              quality={90}
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
            Nuestras sudaderas en fotos reales. Cuello redondo, capucha y bolsillo canguro para un look casual y profesional.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {images.sudaderasModelos.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800"
              >
                <NextImage
                  src={src}
                  alt={`Sudadera personalizada, modelo ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[#0f0f0f]">
        <Container>
          <div className="text-center mb-14">
            <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Calidad premium
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Materiales a la vista
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Tejidos que elegimos: desde French Terry y felpa cepillada hasta mezclas con acabado tipo velvet. Cada detalle pensado para comodidad y durabilidad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {images.sudaderasMateriales.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl"
              >
                <div className="relative aspect-[4/3]">
                  <NextImage
                    src={item.src}
                    alt={item.material}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={92}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="text-white font-semibold text-lg">
                      {item.material}
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      {item.detail}
                    </p>
                  </div>
                </div>
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
                Tipos de sudaderas
              </h2>
              <ul className="space-y-3 max-w-2xl">
                {types.map((type) => (
                  <li key={type} className="flex items-center gap-3 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
              <NextImage
                src={images.sudaderasTypes}
                alt="Tipos de sudaderas"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
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
                src={images.sudaderasModelos[1]}
                alt="Materiales de sudaderas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Materiales
              </h2>
              <ul className="space-y-3 max-w-2xl">
                {materials.map((material) => (
                  <li
                    key={material}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-surface border-y border-gray-800">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Detalles de producción
              </h2>
              <ul className="space-y-3 max-w-2xl">
                {productionDetails.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
              <NextImage
                src={images.sudaderasModelos[2]}
                alt="Producción de sudaderas"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
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
              Cotiza tus sudaderas
            </h2>
            <p className="mt-4 text-gray-400">
              Cuéntanos tipo, cantidad y diseño; te enviamos cotización sin compromiso.
            </p>
            <div className="mt-8">
              <Button href="/cotizar" variant="primary">
                Cotizar sudaderas
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
