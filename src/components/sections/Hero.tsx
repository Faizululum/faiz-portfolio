"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";
import ShapeGrid from "@/components/ShapeGrid";
import TerminalPortfolio from "@/components/TerminalPortfolio";

const ROLES = ["Frontend Web Developer.", "UI/UX Designer.", "Full Stack Developer."];

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 900);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

export function Hero() {
  const typedRole = useTypedRoles(ROLES);
  const [borderColor, setBorderColor] = useState("#5b6472");

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim();

      if (primaryColor) {
        setBorderColor(primaryColor);
      }
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative z-35 flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-6 pt-28 pb-12 sm:px-10 lg:px-16 transition-colors"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <ShapeGrid
          speed={0.1}
          squareSize={36}
          direction="diagonal"
          borderColor={borderColor}
          hoverFillColor="#00eeff15"
          shape="hexagon"
          hoverTrailAmount={1}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Profile & CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start space-y-5 text-left lg:col-span-7"
        >
          <motion.div 
            variants={itemVariants} 
            whileHover="hover"
            className="group flex w-fit cursor-default items-center gap-3"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_var(--primary)]">
              <Image
                src="/img/photo_2.png"
                alt="Foto Muhammad Faizul Ulum"
                fill
                priority
                sizes="48px"
                className="object-cover"
              />
            </div>
            
            <p className="flex items-center gap-1.5 text-base font-medium text-muted sm:text-lg">
              Hello, it&apos;s me
              <motion.span
                variants={{
                  hover: {
                    rotate: [0, 20, -10, 20, -10, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    },
                  },
                }}
                style={{ transformOrigin: "70% 70%" }}
                className="inline-block"
              >
                👋
              </motion.span>
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Faizul <span className="text-primary">Ulum</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="font-display text-xl font-semibold text-muted sm:text-2xl"
          >
            And I&apos;m a{" "}
            <span className="text-primary">
              {typedRole}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-sm leading-relaxed text-muted sm:text-base text-justify"
          >
            Full-Stack Developer & Informatics graduate specializing in the modern JavaScript ecosystem (Next.js, React, Node.js). 
            Passionate about building scalable web applications, smart automation systems, and delivering user-centric digital solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contact"
              className="glow-primary flex items-center gap-2 rounded-full bg-primary
                        px-7 py-3 text-sm font-semibold text-primary-foreground
                        transition-transform hover:scale-105"
            >
              Contact Me
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/Muhammad Faizul Ulum-resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-primary
                        px-7 py-3 text-sm font-semibold text-primary
                        transition-transform hover:scale-105"
            >
              My Resume
              <Download size={16} />
            </Link>
          </motion.div>

          {/* Social Links & Email */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4 text-muted">
            <div className="flex items-center gap-2.5 border-r border-border pr-4">
              <Link
                href="https://github.com/Faizululum"
                target="_blank"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition hover:border-primary hover:text-primary"
              >
                <FaGithub size={16} />
              </Link>
              <Link
                href="https://id.linkedin.com/in/muhammad-faizul-ulum-3475a3305/in"
                target="_blank"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition hover:border-primary hover:text-primary"
              >
                <FaLinkedinIn size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/faizululum_"
                target="_blank"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition hover:border-primary hover:text-primary"
              >
                <FaInstagram size={16} />
              </Link>
            </div>

            <span className="font-mono text-xs text-muted sm:text-sm">
              faizululum25@gmail.com
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <TerminalPortfolio />
        </motion.div>
      </div>
    </section>
  );
}