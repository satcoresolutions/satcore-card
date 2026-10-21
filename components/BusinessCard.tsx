"use client";

import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  UserPlus,
} from "lucide-react";
import type { CardData } from "@/data/card";
import { buildVCard } from "@/lib/vcard";

const secondaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-line px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-muted/60 hover:bg-white/[0.03]";

function initials(first: string, last: string) {
  return `${first[0] ?? ""}${last[0] ?? ""}`.toUpperCase();
}

function Row({
  href,
  icon,
  label,
  value,
  external = true,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 py-3.5 transition-colors"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue/40 text-white">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-muted">{label}</span>
        <span className="block truncate text-[15px] font-medium text-ink">{value}</span>
      </span>
      <ArrowUpRight
        className="size-4 shrink-0 text-muted transition-colors group-hover:text-neon"
        aria-hidden
      />
    </a>
  );
}

export default function BusinessCard({ data }: { data: CardData }) {
  const [shared, setShared] = useState(false);
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const waDigits = data.whatsapp.phone.replace(/\D/g, "");
  const waHref = `https://wa.me/${waDigits}?text=${encodeURIComponent(data.whatsapp.message)}`;
  const telHref = `tel:${data.phone.replace(/[^\d+]/g, "")}`;

  function saveContact() {
    const blob = new Blob([buildVCard(data)], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fullName.replace(/\s+/g, "-").toLowerCase()}.vcf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: fullName, text: `${data.role} en ${data.company}`, url });
        return;
      } catch {
        // El usuario canceló: no hacemos nada.
        return;
      }
    }
    await navigator.clipboard.writeText(url);
    setShared(true);
    window.setTimeout(() => setShared(false), 1800);
  }

  return (
    <article className="w-full max-w-md overflow-hidden bg-surface sm:rounded-3xl sm:border sm:border-line">
      <div className="h-28 bg-blue" aria-hidden />

      <div className="px-6 pb-8">
        <div className="-mt-12 flex size-24 items-center justify-center overflow-hidden rounded-full bg-base text-3xl font-bold ring-4 ring-surface">
          {data.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.photo} alt={fullName} className="size-full object-cover" />
          ) : (
            <span className="font-display text-neon">{initials(data.firstName, data.lastName)}</span>
          )}
        </div>

        <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight">
          {fullName}
        </h1>
        <p className="mt-1 text-[15px] font-medium text-neon">
          {data.role} en {data.company}
        </p>
        <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-muted">{data.bio}</p>

        <div className="mt-7 space-y-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-xl bg-neon px-5 py-3.5 text-base font-bold transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-5" aria-hidden />
            Escribir por WhatsApp
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a href={telHref} className={secondaryBtn}>
              <Phone className="size-4" aria-hidden />
              Llamar
            </a>
            <a href={`mailto:${data.email}`} className={secondaryBtn}>
              <Mail className="size-4" aria-hidden />
              Correo
            </a>
            <button type="button" onClick={saveContact} className={secondaryBtn}>
              <UserPlus className="size-4" aria-hidden />
              Guardar contacto
            </button>
            <button type="button" onClick={share} className={secondaryBtn}>
              {shared ? (
                <Check className="size-4 text-success" aria-hidden />
              ) : (
                <Share2 className="size-4" aria-hidden />
              )}
              {shared ? "Enlace copiado" : "Compartir"}
            </button>
          </div>
        </div>

        {data.socials.length > 0 || (data.links?.length ?? 0) > 0 ? (
          <section className="mt-9" aria-labelledby="redes">
            <h2 id="redes" className="font-display text-base font-semibold">
              Redes y enlaces
            </h2>
            <div className="mt-2 divide-y divide-line">
              {data.socials.map((s) => (
                <Row
                  key={s.url}
                  href={s.url}
                  icon={<span className="text-sm font-bold">{s.label[0]}</span>}
                  label={s.label}
                  value={s.handle}
                />
              ))}
              {data.links?.map((l) => (
                <Row
                  key={l.url}
                  href={l.url}
                  icon={<Globe className="size-4" aria-hidden />}
                  label="Enlace"
                  value={l.label}
                />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-8" aria-labelledby="contacto">
          <h2 id="contacto" className="font-display text-base font-semibold">
            Contacto
          </h2>
          <div className="mt-2 divide-y divide-line">
            <Row href={telHref} icon={<Phone className="size-4" aria-hidden />} label="Teléfono" value={data.phone} external={false} />
            <Row href={`mailto:${data.email}`} icon={<Mail className="size-4" aria-hidden />} label="Correo" value={data.email} external={false} />
            {data.website ? (
              <Row href={data.website} icon={<Globe className="size-4" aria-hidden />} label="Sitio web" value={data.website.replace(/^https?:\/\//, "")} />
            ) : null}
            {data.location ? (
              <Row
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.location.mapsQuery)}`}
                icon={<MapPin className="size-4" aria-hidden />}
                label="Ubicación"
                value={data.location.label}
              />
            ) : null}
          </div>
        </section>

        <p className="mt-10 text-xs text-muted">Tarjeta digital por SatCore Solutions</p>
      </div>
    </article>
  );
}
