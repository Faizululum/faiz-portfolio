"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-2 text-center"
      >
        <h1 className="text-3xl font-bold sm:text-4xl">All My <span className="text-primary">Work</span></h1>
        <p className="mt-3 text-sm text-muted sm:text-base">
          A comprehensive showcase of my professional and exploratory projects.
        </p>
        <p className="mt-1 text-xs text-muted font-display">Last updated: {workLastUpdated}</p>
      </motion.div>

      {/* Filter pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 mt-8 flex w-full snap-x snap-mandatory gap-2 overflow-x-auto pb-4 
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={`shrink-0 snap-start cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300
              ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "border-border bg-surface text-muted hover:border-primary/50 hover:text-primary"
              }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Project Detail Card */}
      {visibleProjects.length > 0 ? (
        <div className="w-full space-y-12 lg:space-y-20">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: (index % PAGE_SIZE) * 0.15, ease: "easeOut" }}
            >
              <ProjectDetailCard project={project} />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16 text-center text-sm text-muted"
        >
          No projects found in this category.
        </motion.p>
      )}

      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="group cursor-pointer flex items-center gap-2 rounded-full border border-primary bg-transparent px-8 py-3 text-sm font-semibold
                       text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
          >
            Load More
          </button>
        </motion.div>
      )}
    </main>
  );
}