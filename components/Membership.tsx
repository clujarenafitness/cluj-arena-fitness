"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";
import MagneticButton from "./ui/MagneticButton";
import { MEMBERSHIP_PLANS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Membership() {
  return (
    <section id="planuri" className="section-py relative bg-surface">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="Membership"
          title="Un plan pentru fiecare nivel de ambiție."
          description="Fără costuri ascunse. Anulezi oricând, fără penalizări."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MEMBERSHIP_PLANS.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative flex h-full flex-col gap-8 rounded-3xl border p-8",
                  plan.highlighted
                    ? "border-neon/40 bg-gradient-to-b from-neon/[0.08] to-transparent shadow-neon"
                    : "border-white/10 bg-background/40"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neon px-4 py-1 text-xs font-bold uppercase tracking-wider text-background">
                    Preț special
                  </span>
                )}

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-bold">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted">{plan.description}</p>
                </div>

                <div className="flex items-end gap-1">
                  <span className="font-display text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-muted">RON {plan.period}</span>
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-white/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-neon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  href="#contact"
                  className={cn(
                    "w-full rounded-full py-3.5 text-center text-sm font-semibold transition-all duration-300",
                    plan.highlighted
                      ? "bg-neon text-background hover:shadow-neon"
                      : "border border-white/20 text-white hover:border-neon/50 hover:bg-white/5"
                  )}
                >
                  Alege {plan.name}
                </MagneticButton>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
