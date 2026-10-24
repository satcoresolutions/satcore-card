import type { CardData } from "@/lib/types";

function esc(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

/**
 * Genera una vCard 3.0 compatible con iOS, Android
 * y gestores de contactos.
 */
export function buildVCard(data: CardData): string {
  const waDigits = data.whatsapp.phone.replace(/\D/g, "");
  const fullName = `${data.firstName} ${data.lastName}`.trim();

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(data.lastName)};${esc(data.firstName)};;;`,
    `FN:${esc(fullName)}`,
    `ORG:${esc(data.company)}`,
    `TITLE:${esc(data.role)}`,
    `TEL;TYPE=CELL,VOICE:${data.phone}`,
    `EMAIL;TYPE=INTERNET:${data.email}`,
    data.website ? `URL:${data.website}` : "",
    `URL;TYPE=WhatsApp:https://wa.me/${waDigits}`,
    ...data.socials.map(
      (social) => `URL;TYPE=${esc(social.label)}:${social.url}`,
    ),
    data.location
      ? `ADR;TYPE=WORK:;;${esc(data.location.label)};;;;`
      : "",
    data.bio ? `NOTE:${esc(data.bio)}` : "",
    "END:VCARD",
  ];

  return lines.filter(Boolean).join("\r\n");
}
