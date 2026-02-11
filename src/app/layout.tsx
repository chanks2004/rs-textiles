import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationWebSiteJsonLd } from "@/components/seo/JsonLd";

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
  metadataBase: new URL("https://rstextiless.com"),
  title: {
    default: "Playeras Personalizadas en México | Cotiza en 1 Minuto - RZ Textiles",
    template: "%s | RZ Textiles",
  },
  description:
    "Cotiza playeras personalizadas en México con entrega rápida y precios de mayoreo. Serigrafía, DTF y bordado. Envíos a todo México. Recibe tu cotización hoy.",
  keywords: [
    "playeras personalizadas",
    "playeras personalizadas México",
    "cotizar playeras",
    "serigrafía",
    "DTF",
    "bordado",
    "envíos México",
  ],
  openGraph: {
    locale: "es_MX",
    type: "website",
    siteName: "RZ Textiles",
    url: "https://rstextiless.com",
  },
  twitter: {
    card: "summary_large_image",
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
        <OrganizationWebSiteJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
