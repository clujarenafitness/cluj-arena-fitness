"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import FadeIn from "./ui/FadeIn";
import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="galerie" className="section-py relative bg-surface">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="Galerie"
          title="Interiorul unde se construiește performanța."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY_IMAGES.map((src, i) => (
            <FadeIn
              key={src}
              delay={i * 0.05}
              className={i === 0 || i === 3 ? "col-span-2 row-span-2 md:col-span-1" : ""}
            >
              <motion.div
                whileHover="hover"
                className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                  i === 0 ? "aspect-[4/5] md:aspect-[4/5]" : "aspect-square"
                }`}
              >
                <motion.div
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${src}')` }}
                />
                <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-neon text-background">
                    <Expand size={17} />
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
