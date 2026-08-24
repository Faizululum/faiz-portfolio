"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import ShapeGrid from "@/components/ShapeGrid";
import TerminalPortfolio from "../TerminalPortfolio";

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

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-6 py-28 sm:px-10 lg:px-16 transition-colors"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <ShapeGrid
          speed={0.1}
          squareSize={36}
          direction="diagonal"
          borderColor="#5b6472"
          hoverFillColor="#00eeff15"
          shape="hexagon"
          hoverTrailAmount={1}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Profile & CTA */}
        <div className="flex flex-col items-start space-y-5 text-left lg:col-span-7">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary shadow-md">
              <Image
                src="/img/Foto_2.png"
                alt="Foto Muhammad Faizul Ulum"
                fill
                priority
                sizes="48px"
                className="object-cover"
              />
            </div>
            <p className="text-base font-medium text-muted sm:text-lg">
              Hello, it&apos;s me 👋
            </p>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Faizul <span className="text-primary">Ulum</span>
          </h1>

          {/* Role Animation */}
          <h2 className="font-display text-xl font-semibold text-muted sm:text-2xl">
            And I&apos;m a{" "}
            <span className="text-primary">
              {typedRole}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Mahasiswa aktif Informatika di UPN &quot;Veteran&quot; Jawa Timur
            dengan fokus di Fullstack Web Development. Tertarik membangun solusi
            digital yang inovatif, terstruktur, dan berdampak positif.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
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
              href="/cv-faizul-ulum.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-primary
                        px-7 py-3 text-sm font-semibold text-primary
                        transition-transform hover:scale-105"
            >
              My Resume
              <Download size={16} />
            </Link>
          </div>

          {/* Social Links & Email */}
          <div className="flex flex-wrap items-center gap-4 pt-4 text-muted">
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
          </div>
        </div>
        <TerminalPortfolio />
      </div>
    </section>
  );
}