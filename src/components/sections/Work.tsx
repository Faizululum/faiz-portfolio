"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export function Work() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleProjects = featuredProjects.slice(0, visibleCount);
  const canLoadMore = visibleCount < 6 && visibleCount < featuredProjects.length;

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Portfolio
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Featured <span className="text-primary">Work</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
          A curated selection of my recent projects, showcasing scalable web applications, interactive UI/UX designs, and full-stack solutions.
        </p>
      </motion.div>

      {/* Project List */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15, ease: "easeOut" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 flex justify-center"
      >
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
            View All Projects <ArrowRight size={16} />
          </Link>
        )}
      </motion.div>
    </section>
  );
}