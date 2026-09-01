"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experiences } from "@/data/portfolio";
import type { Experience } from "@/data/portfolio";
import { ExperienceCard } from "../ExperienceCard";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          My Journey
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Work <span className="text-primary">Experience</span>
        </h2>
      </motion.div>

      <div ref={containerRef} className="relative">
        <div className="absolute left-6 top-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed border-border md:left-1/2" />

        <motion.div
          style={{ scaleY }}
          className="absolute left-6 top-0 h-full w-0.5 origin-top -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_1px_var(--color-primary)] md:left-1/2"
        />

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
    <div className="group relative pl-16 md:pl-0">

      <motion.span
        initial={{ 
          backgroundColor: "var(--background)", 
          scale: 1,
          boxShadow: "0 0 0px 0px transparent"
        }}
        whileInView={{ 
          backgroundColor: "var(--primary)", 
          scale: 1.3,
          boxShadow: "0 0 12px 2px var(--primary)"
        }}
        viewport={{ once: false, margin: "0px 0px -50% 0px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute left-6 top-6 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-primary md:left-1/2"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`md:w-[calc(50%-2.5rem)] ${isRight ? "md:ml-auto" : ""}`}
      >
        <ExperienceCard exp={exp} />
      </motion.div>
    </div>
  );
}