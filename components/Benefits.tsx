"use client";

import {
  Dumbbell,
  BadgeCheck,
  MapPin,
  Sparkles,
  Users,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";
import FadeIn from "./ui/FadeIn";
import { BENEFITS } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Dumbbell,
  BadgeCheck,
  MapPin,
  Sparkles,
  Users,
  CalendarClock,
};

export default function Benefits() {
  return (
    <section id="beneficii" className="section-py relative bg-background">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="De ce Cluj Arena Fitness"
          title="Performanța începe cu mediul potrivit."
          description="Fiecare detaliu al sălii noastre este gândit pentru un singur scop: progresul tău."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => {
            const Icon = ICONS[benefit.icon] ?? Sparkles;
            return (
              <FadeIn key={benefit.title} delay={i * 0.08}>
                <GlowCard className="h-full">
                  <div className="flex flex-col gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-transform duration-300 group-hover:scale-110 group-hover:shadow-neon-sm">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-xl font-bold">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </GlowCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
