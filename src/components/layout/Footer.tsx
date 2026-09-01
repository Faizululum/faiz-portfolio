"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const SOCIALS = [
  { href: "https://github.com/Faizululum", icon: FaGithub, label: "GitHub" },
  {
    href: "https://id.linkedin.com/in/muhammad-faizul-ulum-3475a3305/in",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/faizululum_",
    icon: FaInstagram,
    label: "Instagram",
  },
  { href: "mailto:faizululum25@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative border-t border-border bg-surface overflow-hidden">
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-50" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        className="mx-auto max-w-7xl px-6 pt-8 pb-4 sm:px-10"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          
          {/* Brand & Bio */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <Link
              href="/#home"
              className="flex items-center gap-2 text-xl font-bold transition-transform hover:scale-105 origin-left w-fit"
            >
              <Image src="/img/logo-tr.png" alt="Logo" width={32} height={32} />
              <div>
                Faiz<span className="text-primary">Dev</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Crafting scalable web apps and intuitive digital experiences.
            </p>
          </motion.div>

          {/* Social Connect */}
          <motion.div variants={itemVariants} className="flex flex-col md:items-end justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              Let&apos;s Connect
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/50 bg-surface-muted
                             text-muted-foreground transition-all duration-300 
                             hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_var(--primary)]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-border/50 pt-4 sm:flex-row"
        >
          <p className="text-xs text-muted font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Muhammad Faizul Ulum. All Rights Reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-muted-foreground
                       transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20"
          >
            <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
}