"use client";

import { Code2, LayoutTemplate, Palette } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const SERVICES_EN = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually engaging interfaces using Figma. From user research and wireframing to high-fidelity, interactive prototypes.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building robust, end-to-end web applications using Next.js and Node.js/Express, integrated with PostgreSQL databases via Prisma ORM.",
  },
  {
    icon: LayoutTemplate,
    title: "Front-End Development",
    description:
      "Crafting highly responsive and performant user interfaces with React and Tailwind CSS, focusing on seamless UX and pixel-perfect implementation.",
  },
];

const SERVICES_ID = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Merancang antarmuka yang intuitif dan menarik menggunakan Figma, mulai dari pembuatan wireframe hingga prototipe interaktif high-fidelity.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Membangun aplikasi web end-to-end yang tangguh dengan Next.js dan Node.js/Express, terhubung ke basis data PostgreSQL menggunakan Prisma ORM.",
  },
  {
    icon: LayoutTemplate,
    title: "Front-End Development",
    description:
      "Menciptakan antarmuka yang responsif dan berkinerja tinggi dengan React dan Tailwind CSS, berfokus pada UX yang mulus dan implementasi pixel-perfect.",
  },
];

export function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          What I Do
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          My <span className="text-primary">Services</span>
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {SERVICES_EN.map(({ icon: Icon, title, description }) => (
          <motion.div key={title} variants={itemVariants}>
            <div
              className="group relative flex h-full flex-col items-center gap-4 overflow-hidden rounded-2xl border border-border bg-surface
                         p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                <Icon
                  size={30}
                  className="transition-transform duration-500 group-hover:-rotate-6"
                />
              </div>

              <h3 className="relative z-10 text-lg font-bold transition-colors duration-300">
                {title}
              </h3>
              <p className="relative z-10 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}