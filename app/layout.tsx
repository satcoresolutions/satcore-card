import type { Metadata, Viewport } from "next";
import { card } from "@/data/card";
import "./globals.css";

const fullName = `${card.firstName} ${card.lastName}`.trim();

export const metadata: Metadata = {
  title: `${fullName} · ${card.company}`,
  description: `${card.role} en ${card.company}. ${card.bio}`,
  openGraph: {
    title: fullName,
    description: `${card.role} en ${card.company}`,
    type: "profile",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
