"use client";

import { useMemo, useState } from "react";
import { projects, workLastUpdated } from "@/data/portfolio";
import { ProjectDetailCard } from "@/components/ProjectDetailCard";

const PAGE_SIZE = 6;

export default function AllWorkPage() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.type)));
    return ["All", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.type === activeCategory);
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <main className="mx-auto flex-1 w-full max-w-6xl px-6 py-28 sm:px-10">
      <div className="mb-2 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">All My Work</h1>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Kumpulan project yang pernah saya kerjakan
        </p>
        <p className="mt-1 text-xs text-muted">Last updated: {workLastUpdated}</p>
      </div>

      {/* Filter pills */}
      <div className="mb-12 mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors
              ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* List project */}
      {visibleProjects.length > 0 ? (
        <div className="w-full space-y-12 lg:space-y-20">
          {visibleProjects.map((project) => (
            <ProjectDetailCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-sm text-muted">
          Belum ada project di kategori ini.
        </p>
      )}

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="rounded-full border border-primary px-8 py-3 text-sm font-semibold
                       text-primary transition-transform hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
}