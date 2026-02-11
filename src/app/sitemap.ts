import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/cotizar",
    "/cotizar-playeras-personalizadas",
    "/playeras",
    "/playeras-personalizadas",
    "/playeras-personalizadas-mayoreo",
    "/uniformes-empresariales-playeras-polo",
    "/playeras-para-eventos",
    "/tecnicas/serigrafia",
    "/tecnicas/dtf",
    "/tecnicas/bordado",
    "/envios-mexico",
    "/faq",
    "/sudaderas",
    "/gorras",
    "/como-funciona",
    "/contacto",
    "/nosotros",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("weekly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
