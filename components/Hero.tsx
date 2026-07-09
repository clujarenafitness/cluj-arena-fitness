"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import AnimatedCounter from "./ui/AnimatedCounter";
import { HERO_STATS, SITE } from "@/lib/data";

const titleWords = ["ANTRENEAZĂ-TE", "CA UN", "CAMPION."];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-background"
    >
      {/* Background image + parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <div
          className="h-[120%] w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/gym-01.jpg')",
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid opacity-30 mask-fade-b" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neon/10 blur-[120px]" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="container-px relative z-10 flex flex-col gap-10 pb-20 pt-40 md:pb-28"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-neon" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            {SITE.name} · Stadionul Cluj Arena
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-[13vw] font-bold leading-[0.92] tracking-tighter sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          {titleWords.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  i === titleWords.length - 1
                    ? "block text-transparent [-webkit-text-stroke:1.5px_#00FF88]"
                    : "block"
                }
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="max-w-xl text-lg text-muted md:text-xl"
        >
          {SITE.tagline} Echipamente premium, antrenori certificați și
          energia unei comunități care nu se oprește din progres.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center gap-5"
        >
          <MagneticButton href="#planuri" className="btn-primary group">
            Începe acum
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </MagneticButton>
          <MagneticButton href="#galerie" className="btn-secondary group">
            <PlayCircle size={18} className="text-neon" />
            Vezi sala
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-white md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
