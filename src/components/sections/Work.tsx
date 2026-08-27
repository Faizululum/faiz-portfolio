"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export function Work() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleProjects = featuredProjects.slice(0, visibleCount);

  const canLoadMore = visibleCount < 6 && visibleCount < featuredProjects.length;

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="mb-16 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Portfolio
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          My <span className="text-primary">Work</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
          Beberapa project pilihan yang pernah saya kerjakan, mulai dari web
          app, e-commerce, hingga UI/UX design.
        </p>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        {canLoadMore ? (
          <button
            type="button"
            onClick={() => setVisibleCount(6)}
            className="flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105 cursor-pointer"
          >
            Load More <ChevronDown size={16} />
          </button>
        ) : (
          <Link
            href="/work"
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Lihat Selengkapnya <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </section>
  );
}