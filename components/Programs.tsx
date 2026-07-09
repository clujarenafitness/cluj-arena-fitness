"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Gauge } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";
import { PROGRAMS } from "@/lib/data";

export default function Programs() {
  return (
    <section id="programe" className="section-py relative bg-background">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="Programele noastre"
          title="Alege-ți ritmul de antrenament."
          description="De la forță pură la cardio pe ritmuri latino — patru moduri de a-ți depăși limitele."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROGRAMS.map((program, i) => (
            <FadeIn key={program.slug} delay={i * 0.1}>
              <motion.div
                whileHover="hover"
                className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/10"
              >
                <motion.div
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${program.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
                <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-8">
                  <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wider text-neon">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> {program.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Gauge size={13} /> {program.level}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-bold">
                    {program.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/70">
                    {program.description}
                  </p>
                  <motion.div
                    variants={{ hover: { x: 6 } }}
                    className="mt-2 flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    Descoperă programul
                    <ArrowUpRight
                      size={16}
                      className="text-neon transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
