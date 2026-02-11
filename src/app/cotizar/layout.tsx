import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solicitar cotización",
  description:
    "Solicita una cotización para playeras, sudaderas o gorras personalizadas. Completa el formulario y te respondemos con precios y tiempos.",
  alternates: { canonical: SITE_URL + "/cotizar" },
  openGraph: { url: SITE_URL + "/cotizar", locale: "es_MX" },
  twitter: { card: "summary_large_image" },
};

export default function CotizarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
