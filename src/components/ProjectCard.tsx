"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-surface"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          loading="eager"
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className="absolute inset-0 hidden flex-col justify-between bg-linear-to-t
                     from-background/95 via-background/50 to-transparent p-5
                     opacity-0 transition-opacity duration-300 group-hover:opacity-100
                     md:flex"
        >
          <span className="mb-2 w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {project.type}
          </span>
          <div>
            <h3 className="text-lg font-bold text-foreground">
              {project.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-foreground/80">
              {project.summary}
            </p>
            <span className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary">
              View Detail <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 md:hidden">
        <span className="mb-1 inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          {project.type}
        </span>
        <h3 className="text-base font-bold">{project.title}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}
