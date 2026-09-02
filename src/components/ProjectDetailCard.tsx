"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink, Share2 } from "lucide-react";
import { Project } from "@/data/portfolio";
import Image from "next/image";

export function ProjectDetailCard({ project }: { project: Project }) {
  async function handleShare(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/work/${project.slug}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: project.title, url });
      } catch {
        
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link project disalin ke clipboard!");
    }
  }

  return (
    <article className="group flex w-full flex-col items-start gap-6 rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/40 lg:flex-row lg:gap-8 lg:p-7">
      {/* Image */}
      <div className="w-full shrink-0 lg:w-112.5 xl:w-125">
        <div className="relative overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
          <Link href={`/work/${project.slug}`} className="block w-full">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={800}
              height={600}
              className="h-auto w-full object-cover bg-primary-foreground transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Category Badge */}
          <div className="absolute left-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            <span className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-sm bg-primary">
              {project.type}
            </span>
          </div>
        </div>
      </div>

      {/* Text & Action */}
      <div className="w-full flex-1 lg:w-1/2">
        <div className="flex items-center gap-3">
          <Link href={`/work/${project.slug}`} className="flex-1">
            <h2 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
              {project.title}
            </h2>
          </Link>

          {/* Live demo mobile */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted transition-colors duration-200 hover:text-foreground md:hidden"
              title="Live demo"
            >
              <ExternalLink size={16} className="mr-1" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>

        <h3 className="text-base leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground lg:text-lg mb-4">
          {project.summary}
        </h3>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1 pt-1 mb-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="cursor-default rounded-full border border-border bg-surface-muted/50 px-3 py-1 text-sm font-medium text-muted backdrop-blur-lg transition-colors hover:border-primary/40 hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 pt-3">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex cursor-pointer items-center space-x-2 rounded-full border border-foreground bg-transparent px-6 py-2.5 text-foreground transition-all hover:bg-foreground hover:text-background"
          >
            <span className="font-semibold text-sm">View Details</span>
            <ArrowUpRight size={18} />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden cursor-pointer items-center text-muted transition-colors duration-200 hover:text-foreground md:inline-flex"
            >
              <ExternalLink size={16} className="mr-1" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex cursor-pointer items-center text-muted transition-colors duration-200 hover:text-foreground"
          >
            <Share2 size={16} className="mr-1" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>
    </article>
  );
}
