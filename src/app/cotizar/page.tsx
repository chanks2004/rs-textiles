"use client";

import { useState } from "react";
import NextImage from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

const garmentTypes = [
  "Playeras",
  "Sudaderas",
  "Gorras",
  "Otro",
];

export default function CotizarPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/cotizar", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Error al enviar");
      setSent(true);
    } catch (err) {
      setError(
        "Hubo un error al enviar tu solicitud. Por favor escríbenos directo a: contactorstextiles@gmail.com o mándanos un mensaje por WhatsApp."
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-xl mx-auto text-center rounded-2xl bg-white border border-border-light shadow-card p-8 md:p-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-navy">
              Mensaje enviado
            </h2>
            <p className="mt-4 text-muted">
              Te contactaremos pronto con tu cotización. Revisa tu email y WhatsApp.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-14">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Cotización
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
                Solicitar cotización
              </h1>
              <p className="mt-6 text-xl text-muted leading-relaxed">
                Completa el formulario y te respondemos con precios y tiempos de entrega.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg-subtle border border-border-light shadow-card">
              <NextImage
                src={images.cotizar}
                alt="Formulario de cotización"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 max-w-2xl space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-navy mb-2">
                  Nombre *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-light bg-white text-navy placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-navy mb-2">
                  Empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border-light bg-white text-navy placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="Nombre de tu empresa o marca"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-light bg-white text-navy placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-navy mb-2">
                  Teléfono *
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-light bg-white text-navy placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="+52 55 1234 5678"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="tipo-prenda" className="block text-sm font-medium text-navy mb-2">
                  Tipo de prenda *
                </label>
                <select
                  id="tipo-prenda"
                  name="tipo-prenda"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-light bg-white text-navy focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                >
                  <option value="">Selecciona...</option>
                  {garmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cantidad" className="block text-sm font-medium text-navy mb-2">
                  Cantidad aproximada *
                </label>
                <input
                  id="cantidad"
                  name="cantidad"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-light bg-white text-navy placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="Ej. 100"
                />
              </div>
            </div>

            <div>
              <label htmlFor="fecha-entrega" className="block text-sm font-medium text-navy mb-2">
                Fecha estimada de entrega
              </label>
              <input
                id="fecha-entrega"
                name="fecha-entrega"
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-border-light bg-white text-navy placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="Ej. Antes del 15 de marzo"
              />
            </div>

            <div>
              <label htmlFor="comentarios" className="block text-sm font-medium text-navy mb-2">
                Comentarios o detalles
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border-light bg-white text-navy placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
                placeholder="Describe tu pedido: tallas, colores, tipo de impresión, etc."
              />
            </div>

            <div>
              <label htmlFor="diseno" className="block text-sm font-medium text-navy mb-2">
                Subir diseño (opcional)
              </label>
              <input
                id="diseno"
                name="diseno"
                type="file"
                accept=".pdf,.png,.jpg,.jpeg,.ai,.eps"
                className="w-full px-4 py-3 rounded-lg border border-border-light bg-white text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
              />
              <p className="mt-1 text-sm text-muted">
                PDF, PNG, JPG, AI o EPS. Máx. 10 MB.
              </p>
            </div>

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 space-y-3">
                <p>{error}</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href="mailto:contactorstextiles@gmail.com"
                    className="font-medium text-red-700 underline underline-offset-2 hover:text-red-800"
                  >
                    Escribir por email
                  </a>
                  <a
                    href={
                      "https://wa.me/?text=" +
                      encodeURIComponent(
                        "Hola, quiero cotizar playeras personalizadas desde la página web."
                      )
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold bg-primary text-white hover:bg-primary-dark transition-colors"
                  >
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
            )}

            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto min-w-[200px]"
              >
                {sending ? "Enviando…" : "Enviar solicitud"}
              </Button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}
