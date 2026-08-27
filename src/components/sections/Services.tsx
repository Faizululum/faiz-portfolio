"use client";

import { Code2, LayoutTemplate, Palette } from "lucide-react";

const SERVICES = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Merancang antarmuka yang intuitif dan enak dipakai menggunakan Figma & Canva, mulai dari riset singkat, wireframe, sampai high-fidelity prototype.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Membangun aplikasi web end-to-end dengan Next.js, Express.js, dan Laravel, terhubung ke database PostgreSQL/MySQL menggunakan Prisma.",
  },
  {
    icon: LayoutTemplate,
    title: "Front End Development",
    description:
      "Membangun antarmuka yang responsif dan performa tinggi dengan React, Vue, dan Tailwind CSS, dengan fokus pada aksesibilitas & UX yang mulus.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="mb-16 text-center">
        <p className="text-sm font-display font-medium uppercase tracking-widest text-primary">
          What I Do
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          My <span className="text-primary">Services</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-border bg-surface
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
        ))}
      </div>
    </section>
  );
}
