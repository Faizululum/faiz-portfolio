"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <div className="z-10 flex flex-col items-center gap-4">
        <h1 className="text-7xl font-bold sm:text-8xl">404</h1>
        <p className="text-sm text-muted sm:text-base">
          Page not found: <span className="text-primary">{pathname}</span>
        </p>
        <Link
          href="/"
          className="mt-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background
                     transition-transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>

      {/* Watermark nama brand raksasa di bawah, memudar ke atas */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 md:-bottom-24 left-1/2 -translate-x-1/2 select-none whitespace-nowrap
                   text-[45vw] md:text-[20vw] font-black leading-none text-foreground/20 flex"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      >
        FAIZ<p className="hidden md:block">DEV</p>
      </span>
    </main>
  );
}