"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import type { Experience } from "@/data/portfolio";
import { ExperienceCard } from "../ExperienceCard";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <div className="mb-16 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          My Journey
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Work <span className="text-primary">Experience</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-px -translate-x-1/2 bg-border md:left-1/2" />

        <div className="flex flex-col gap-10 md:gap-14">
          {experiences.map((exp, index) => (
            <ExperienceRow key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ exp, index }: { exp: Experience; index: number }) {
  const isRight = index % 2 === 1;

  return (
    <div className="relative pl-16 md:pl-0">
      <span
        className="absolute left-6 top-6 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full
                   border-2 border-primary bg-background md:left-1/2"
      />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`md:w-[calc(50%-2.5rem)] ${isRight ? "md:ml-auto" : ""}`}
      >
        <ExperienceCard exp={exp} />
      </motion.div>
    </div>
  );
}
