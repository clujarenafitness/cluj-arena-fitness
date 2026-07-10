
"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";
import { TRAINERS } from "@/lib/data";

export default function Trainers() {
  return (
    <section id="traineri" className="section-py relative bg-background">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="Echipa"
          title="Antrenorii care te împing mai departe."
          description="O echipă de specialiști dedicați culturismului, fitnessului și antrenamentelor de grup."
        />

        {TRAINERS.length > 0 ? (
          <div className="scrollbar-none -mx-6 flex gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-4">
            {TRAINERS.map((trainer, i) => (
              <FadeIn key={trainer.slug} delay={i * 0.06} className="min-w-[240px] md:min-w-0">
                <motion.div
                  whileHover="hover"
                  className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10"
                >
                  <motion.div
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-cover bg-center grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                    style={{ backgroundImage: `url('${trainer.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className="font-display text-lg font-bold leading-tight">
                      {trainer.name}
                    </span>
                    <span className="text-xs font-medium text-neon">
                      {trainer.role}
                    </span>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      variants={{ hover: { opacity: 1, height: "auto" } }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 overflow-hidden text-xs leading-relaxed text-white/70"
                    >
                      {trainer.bio}
                    </motion.p>
                  </div>

                  <a
                    href="#"
                    aria-label={`Instagram ${trainer.name}`}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 hover:bg-neon hover:text-background group-hover:opacity-100"
                  >
                    <Instagram size={15} />
                  </a>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn className="mx-auto max-w-lg text-center">
            <p className="text-sm leading-relaxed text-white/60">
              Echipa noastră de antrenori va fi prezentată în curând.
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
