import { Dumbbell, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/data";
import TikTokIcon from "./ui/TikTokIcon";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-surface">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-neon/10 blur-[140px]" />

      <div className="container-px relative z-10 grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <a href="#hero" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neon/10 text-neon">
              <Dumbbell size={18} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              {SITE.name}
            </span>
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {SITE.legalName} — antrenament premium chiar în inima Stadionului
            Cluj Arena. Forță, energie și performanță, în fiecare sesiune.
          </p>
          <div className="flex gap-3">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-neon/50 hover:text-neon hover:shadow-neon-sm"
              aria-label="Instagram Cluj Arena Fitness"
            >
              <Instagram size={17} />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-neon/50 hover:text-neon hover:shadow-neon-sm"
              aria-label="Facebook Cluj Arena Fitness"
            >
              <Facebook size={17} />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-neon/50 hover:text-neon hover:shadow-neon-sm"
              aria-label="TikTok Cluj Arena Fitness"
            >
              <TikTokIcon size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Navigare
          </span>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-neon"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </span>
          <ul className="flex flex-col gap-3 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-neon" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-neon" />
              {SITE.phone}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-neon" />
              {SITE.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px relative z-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-muted md:flex-row">
        <span>
          © {new Date().getFullYear()} {SITE.legalName}. Toate drepturile rezervate.
        </span>
        <span>Design premium pentru performanță reală.</span>
      </div>
    </footer>
  );
}
