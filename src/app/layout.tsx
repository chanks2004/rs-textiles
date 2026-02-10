import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "RS Textiles | Playeras, Sudaderas y Gorras Personalizadas",
    template: "%s | RS Textiles",
  },
  description:
    "Intermediario textil que conecta marcas con fabricantes confiables. Playeras, sudaderas y gorras personalizadas. Cotiza directamente.",
  keywords: [
    "playeras personalizadas",
    "sudaderas personalizadas",
    "gorras personalizadas",
    "cotización playeras",
    "prendas personalizadas",
  ],
  openGraph: {
    locale: "es_MX",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
