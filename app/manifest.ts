import type { MetadataRoute } from "next";
import { card } from "@/lib/card";

const fullName = `${card.firstName} ${card.lastName}`.trim();

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `Tarjeta digital de ${fullName}`,
    short_name: "Tarjeta digital",
    description: `${card.role} en ${card.company}. ${card.bio}`,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0a0a0a",
    theme_color: "#132a8e",
    lang: "es-CO",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}