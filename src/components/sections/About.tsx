"use client";

import { Code2, GraduationCap } from "lucide-react";
import Lanyard from "@/components/Lanyard";

const INFO_CARDS = [
  {
    icon: Code2,
    title: "Top Languages",
    detail: "JavaScript, Next.js, React.js, Express.js, Laravel, PostgreSQL",
  },
  {
    icon: GraduationCap,
    title: "Education",
    detail: 'Informatics Student at UPN "Veteran" Jawa Timur',
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 md:pt-24 sm:px-10"
    >
      {/* 3D Lanyard */}
      <div className="absolute xl:-left-90 md:top-20 -top-30 inset-0 z-30 pointer-events-none flex justify-center lg:justify-start xl:w-[75vw]">
        <div className="pointer-events-auto relative w-full shrink-0 cursor-grab active:cursor-grabbing">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 opacity-50 blur-[80px]" />
          <Lanyard
            position={[0, 0, 15]}
            gravity={[0, -40, 0]}
            frontImage="/img/Foto.png"
            backImage="/img/logo-tr.png"
            imageFit="contain"
            lanyardWidth={0.7}
          />
        </div>
      </div>

      {/* Content & Info Cards */}
      <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
        <div className="h-100 w-full shrink-0 sm:h-125 lg:h-137.5 lg:w-112.5" />
        <div className="flex flex-1 flex-col gap-6 text-center lg:text-left mt-20 md:mt-0">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Introduction
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              About <span className="text-primary">Me</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Saya memiliki antusiasme tinggi untuk mempelajari hal baru guna
            menambah wawasan, dan sangat tertarik untuk berkarier sebagai UI/UX
            Designer maupun Full Stack Web Developer. Saya ingin terus
            mengembangkan diri di bidang teknologi yang terus berkembang.
          </p>

          {/* Info cards */}
          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {INFO_CARDS.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 text-left transition-colors hover:border-primary/40"
              >
                <Icon size={24} className="text-primary" />
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xs text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
