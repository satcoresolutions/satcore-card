import type { CardData } from "@/lib/card";

function esc(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

/** vCard 3.0: lo entienden iOS, Android y los gestores de contactos. */
export function buildVCard(data: CardData): string {
  const waDigits = data.whatsapp.phone.replace(/\D/g, "");
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(data.lastName)};${esc(data.firstName)};;;`,
    `FN:${esc(`${data.firstName} ${data.lastName}`.trim())}`,
    `ORG:${esc(data.company)}`,
    `TITLE:${esc(data.role)}`,
    `TEL;TYPE=CELL,VOICE:${data.phone}`,
    `EMAIL;TYPE=INTERNET:${data.email}`,
    data.website ? `URL:${data.website}` : "",
    `URL;TYPE=WhatsApp:https://wa.me/${waDigits}`,
    ...data.socials.map((s) => `URL;TYPE=${esc(s.label)}:${s.url}`),
    data.location ? `ADR;TYPE=WORK:;;${esc(data.location.label)};;;;` : "",
    data.bio ? `NOTE:${esc(data.bio)}` : "",
    "END:VCARD",
  ];
  return lines.filter(Boolean).join("\r\n");
}
