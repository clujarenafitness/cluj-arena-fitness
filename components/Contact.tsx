"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";
import { SITE } from "@/lib/data";

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Locație", value: SITE.address },
  { icon: Phone, label: "Telefon", value: SITE.phone },
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: Clock, label: "Program", value: SITE.hours },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitAt, setLastSubmitAt] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field — bots usually do.
    if ((data.get("company") as string)?.trim()) {
      return;
    }

    // Basic client-side throttle to blunt rapid automated resubmits.
    // A production backend must still enforce its own rate limiting.
    const now = Date.now();
    if (now - lastSubmitAt < 4000) {
      return;
    }

    setIsSubmitting(true);
    setLastSubmitAt(now);

    // NOTE: this demo form only flips local UI state. Before going live,
    // wire it to a server endpoint that re-validates every field, applies
    // rate limiting/CAPTCHA, and never trusts client-side checks alone.
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="section-py relative bg-surface">
      <div className="container-px grid grid-cols-1 gap-16 lg:grid-cols-2">
        <FadeIn>
          <div className="flex h-full flex-col gap-10">
            <SectionHeading
              eyebrow="Contact"
              title="Hai să vorbim despre obiectivele tale."
              align="left"
            />

            <div className="flex flex-col gap-6">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neon/10 text-neon">
                    <item.icon size={18} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-white">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{
                  backgroundImage: "url('/images/gym-05.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="relative z-10 flex h-full min-h-[180px] items-end p-6">
                <span className="font-display text-sm font-semibold text-white">
                  Stadionul Cluj Arena, Cluj-Napoca
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="glass relative overflow-hidden rounded-3xl p-8 shadow-card md:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon/10 blur-[80px]" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[400px] flex-col items-center justify-center gap-4 text-center"
              >
                <CheckCircle2 size={48} className="text-neon" />
                <h3 className="font-display text-2xl font-bold">
                  Mesaj trimis!
                </h3>
                <p className="max-w-xs text-sm text-muted">
                  Îți vom răspunde în cel mai scurt timp pentru a-ți confirma
                  programarea.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Honeypot field — hidden from real users, ignored by screen readers,
                    but bots that auto-fill every input will trip it. */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden opacity-0"
                />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted">
                      Nume
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      maxLength={80}
                      autoComplete="name"
                      placeholder="Numele tău"
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-neon/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted">
                      Telefon
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      maxLength={20}
                      autoComplete="tel"
                      pattern="[0-9+()\s-]{6,20}"
                      title="Introdu un număr de telefon valid"
                      placeholder="07xx xxx xxx"
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-neon/50"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    maxLength={120}
                    autoComplete="email"
                    placeholder="tu@exemplu.ro"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-neon/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted">
                    Program de interes
                  </label>
                  <select
                    name="program"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-neon/50"
                  >
                    <option className="bg-surface">Hipertrofie & Masă Musculară</option>
                    <option className="bg-surface">Powerlifting & Forță</option>
                    <option className="bg-surface">Definire & Recompoziție Corporală</option>
                    <option className="bg-surface">Personal Training 1-la-1</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted">
                    Mesaj
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    maxLength={1000}
                    placeholder="Spune-ne despre obiectivele tale..."
                    className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-neon/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary mt-2 w-full group disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
