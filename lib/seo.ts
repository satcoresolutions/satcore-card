/**
 * Configuración central de SEO.
 * Define NEXT_PUBLIC_SITE_URL en producción.
 */
import { card } from "@/lib/card";

const fullName = `${card.firstName} ${card.lastName}`.trim();

export const SITE = {
  name: `Tarjeta digital de ${fullName}`,
  brand: card.company,
  description: `${card.role} en ${card.company}. ${card.bio}`,
  shortDescription: `Conoce el perfil profesional, los servicios y la información de contacto de ${fullName}.`,
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, ""),
  locale: "es_CO",
  language: "es-CO",
  themeColor: "#132a8e",
  keywords: [
    "tarjeta digital",
    "tarjeta de presentación digital",
    "perfil profesional",
    "contacto profesional",
    "presentación profesional",
    "información de contacto",
    "SatCore Solutions",
    card.firstName,
    card.lastName,
    card.company,
    card.role,
  ],
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;