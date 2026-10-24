import type { Metadata, Viewport } from "next";

import JsonLd from "@/components/JsonLd";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { Footer } from "@/components/footer";

import { card } from "@/lib/card";
import { THEME_KEY } from "@/lib/constants";

import "./globals.css";

const fullName = `${card.firstName} ${card.lastName}`.trim();
const title = `${fullName} · ${card.company}`;
const description = `${card.role} en ${card.company}. ${card.bio}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s · ${card.company}`,
  },

  description,

  applicationName: card.company,
  authors: [{ name: fullName }],
  creator: card.company,
  publisher: card.company,

  category: "profile",

  openGraph: {
    type: "profile",
    title: fullName,
    description: `${card.role} en ${card.company}`,
    siteName: card.company,
    locale: "es_CO",
  },

  twitter: {
    card: "summary_large_image",
    title: fullName,
    description: `${card.role} en ${card.company}`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  appleWebApp: {
    capable: true,
    title: fullName,
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

// Modo oscuro por defecto.
// Si el usuario guardó modo claro, se elimina antes del primer render.
const themeScript = `
  try {
    if (localStorage.getItem("${THEME_KEY}") === "light") {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />

        <JsonLd />
      </head>

      <body>
        {children}
        <ServiceWorkerRegister />
        <Footer />
      </body>
    </html>
  );
}