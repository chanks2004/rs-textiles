import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitar cotización",
  description:
    "Solicita una cotización para playeras, sudaderas o gorras personalizadas. Completa el formulario y te respondemos con precios y tiempos.",
};

export default function CotizarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
