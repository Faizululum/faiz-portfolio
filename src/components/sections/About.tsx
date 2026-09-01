"use client";

import { Code2, GraduationCap } from "lucide-react";
import Lanyard from "@/components/Lanyard";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const INFO_CARDS = [
  {
    icon: Code2,
    title: "Core Technologies",
    detail: "Next.js, TypeScript, React.js, Node.js, Express, PostgreSQL",
  },
  {
    icon: GraduationCap,
    title: "Education",
    detail: "Bachelor of Informatics, UPN \"Veteran\" Jawa Timur",
  },
];

export function About() {
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
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 md:pt-24 sm:px-10"
    >
      {/* 3D Lanyard */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        transition={{ duration: 1 }}
        className="absolute xl:-left-90 md:top-20 -top-30 inset-0 z-30 pointer-events-none flex justify-center lg:justify-start xl:w-[75vw]"
      >
        <div className="pointer-events-auto relative w-full shrink-0 cursor-grab active:cursor-grabbing">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 opacity-50 blur-[80px]" />
          <Lanyard
            position={[0, 0, 15]}
            gravity={[0, -40, 0]}
            frontImage="/img/photo 4.png"
            backImage="/img/logo-tr.png"
            imageFit="contain"
            lanyardWidth={0.7}
          />
        </div>
      </motion.div>

      {/* Content & Info Cards */}
      <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
        <div className="h-100 w-full shrink-0 sm:h-125 lg:h-137.5 lg:w-112.5" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50% 0px" }}
          className="flex flex-1 flex-col gap-6 text-center lg:text-left mt-20 md:mt-0"
        >
          <motion.div variants={itemVariants}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Introduction
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              About <span className="text-primary">Me</span>
            </h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-sm leading-relaxed text-muted sm:text-base"
          >
            I am an Informatics graduate with a strong passion for transforming complex problems into elegant, user-centric digital solutions. As a Full-Stack Developer and UI/UX enthusiast, I thrive on exploring modern web technologies and building scalable applications that leave a positive impact.
          </motion.p>

          {/* Info cards */}
          <motion.div 
            variants={itemVariants} 
            className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {INFO_CARDS.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="group flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 text-left transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <Icon size={24} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xs text-muted">{detail}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}