import type {
  CardData,
  SocialLink,
  CardLink,
  WhatsAppData,
  CardLocation,
} from "./types";

/** Configuración de la tarjeta digital */
export const CARD_CONFIG = {
  nameLabel: "Nombre",
  roleLabel: "Cargo",
  companyLabel: "Empresa",
  bioLabel: "Acerca de",
  phoneLabel: "Teléfono",
  emailLabel: "Correo",
  websiteLabel: "Sitio web",
  locationLabel: "Ubicación",
  socialsLabel: "Redes y enlaces",
  contactLabel: "Contacto",
} as const;

/** Clave de preferencia del tema */
export const THEME_KEY = "satcore-card-theme";

/** Reexportación de los tipos de la tarjeta */
export type {
  CardData,
  SocialLink,
  CardLink,
  WhatsAppData,
  CardLocation,
};

/** Clases compartidas de la interfaz */
export { ui } from "./ui";