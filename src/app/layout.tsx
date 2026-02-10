import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
    <html lang="es" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
