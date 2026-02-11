import type { Metadata } from "next";
import NextImage from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";
import { images } from "@/lib/images";
import { SITE_URL } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Playeras Personalizadas en México | Cotiza en 1 Minuto - RZ Textiles",
  description:
    "Cotiza playeras personalizadas en México con entrega rápida y precios de mayoreo. Serigrafía, DTF y bordado. Envíos a todo México. Recibe tu cotización hoy.",
  alternates: { canonical: SITE_URL + "/" },
  openGraph: {
    title: "Playeras Personalizadas en México | Cotiza en 1 Minuto - RZ Textiles",
    description:
      "Cotiza playeras personalizadas en México con entrega rápida y precios de mayoreo. Serigrafía, DTF y bordado. Envíos a todo México.",
    url: SITE_URL + "/",
    locale: "es_MX",
  },
  twitter: { card: "summary_large_image", title: "Playeras Personalizadas en México | RZ Textiles" },
};

const steps = [
  {
    number: "01",
    title: "Envíanos tu idea",
    description:
      "Cuéntanos qué necesitas: tipo de prenda, cantidad, diseño y fecha de entrega.",
  },
  {
    number: "02",
    title: "Buscamos el mejor proveedor",
    description:
      "Conectamos con fabricantes confiables que cumplan con tu calidad y precio.",
  },
  {
    number: "03",
    title: "Te entregamos tu pedido",
    description:
      "Coordinar la producción y entrega para que recibas tu pedido a tiempo.",
  },
];

const products = [
  {
    title: "Playeras",
    description: "Playeras personalizadas en diversos tejidos y métodos de impresión.",
    href: "/playeras",
    imageSrc: images.productShirts,
  },
  {
    title: "Sudaderas",
    description: "Sudaderas con capucha y sin capucha, algodón y mezclas.",
    href: "/sudaderas",
    imageSrc: images.productHoodies,
  },
  {
    title: "Gorras",
    description: "Gorras bordadas o estampadas para tu marca o evento.",
    href: "/gorras",
    imageSrc: images.productCaps,
  },
];

const stats = [
  { value: "Desde 50 piezas", label: "Mínimo de pedido" },
  { value: "Tiempos de entrega competitivos", label: "Hasta la puerta de tu casa" },
  { value: "Nacional e internacional", label: "Producción" },
];

const testimonials = [
  {
    quote:
      "Excelente servicio. Nos consiguieron un proveedor de playeras con muy buena calidad y precio justo.",
    author: "María G.",
    role: "Dueña de marca",
  },
  {
    quote:
      "Pedido de 200 sudaderas entregado a tiempo. Muy profesionales en todo el proceso.",
    author: "Carlos R.",
    role: "Empresa de eventos",
  },
  {
    quote:
      "La mejor opción para cotizar gorras personalizadas sin tener que buscar fabricantes por nuestra cuenta.",
    author: "Ana L.",
    role: "Startup",
  },
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "Inicio", path: "/" }]} />
      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
                Prendas personalizadas
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                Playeras personalizadas en México
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-gray-400 leading-relaxed">
                Cotiza directamente con fabricantes confiables
              </p>
              <div className="mt-10">
                <Button href="/cotizar" variant="primary">
                  Cotizar ahora
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl">
              <NextImage
                src={images.hero}
                alt="Playeras y prendas personalizadas"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface border-y border-gray-800">
        <Container>
          <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
            Proceso
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-12">
            Tres pasos para conseguir tu pedido de prendas personalizadas.
          </p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl bg-gray-900/80 border border-gray-800 p-6 md:p-8"
              >
                <span className="text-5xl font-bold text-white">
                  {step.number}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/como-funciona"
              className="text-white font-medium hover:text-gray-300 transition-colors"
            >
              Ver proceso completo →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
            Catálogo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Productos
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-12">
            Prendas personalizadas para marcas, eventos y equipos.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.title}
                title={product.title}
                description={product.description}
                href={product.href}
                imageSrc={product.imageSrc}
                imageAlt={product.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface border-y border-gray-800">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Producción a tu medida
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl bg-gray-900/80 p-8 border border-gray-800"
              >
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            <div>
              <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
                Testimonios
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                Marcas y empresas que ya confían en nosotros.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
              <NextImage
                src={images.testimonials}
                alt="Clientes satisfechos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl bg-gray-900/80 border border-gray-800 p-6 md:p-8"
              >
                <p className="text-gray-300 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4">
                  <cite className="font-semibold text-white not-italic">
                    {t.author}
                  </cite>
                  <span className="text-gray-500 text-sm"> — {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface border-t border-gray-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Cotización
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Cotiza tu pedido hoy
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Envíanos los detalles y te respondemos con una cotización sin compromiso.
            </p>
            <div className="mt-10">
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
