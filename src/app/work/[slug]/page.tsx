import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ShareButton } from "@/components/ShareButton";
import { projects } from "@/data/portfolio";
import { FaGithub } from "react-icons/fa6";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    notFound();
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  const galleryImages = [project.thumbnail, ...(project.gallery ?? [])];

  return (
    <main className="mx-auto max-w-5xl px-6 py-28 sm:px-10">
      <Link
        href="/#work"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
      >
        <ArrowLeft size={16} /> Back to Work
      </Link>

      {/* Gallery */}
      <ProjectGallery images={galleryImages} alt={project.title} />

      {/* Main info */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {project.type}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold text-white
                ${project.status === "Completed" ? "bg-emerald-500" : "bg-amber-500"}`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl">{project.title}</h1>
          <p className="mt-2 text-sm text-muted">
            {project.year} · {project.role}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-primary flex items-center gap-2 rounded-full bg-primary
                           px-6 py-3 text-sm font-semibold text-primary-foreground
                           transition-transform hover:scale-105"
              >
                Live Demo <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-primary
                           px-6 py-3 text-sm font-semibold text-primary
                           transition-transform hover:scale-105"
              >
                Source Code <FaGithub size={16} />
              </a>
            )}
            <ShareButton title={project.title} />
          </div>
        </div>

        {/* Sidebar tech stack */}
        <aside className="h-fit rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-28">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Tech Stack
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-primary/30 px-3 py-1.5 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-1.5 border-t border-border pt-4 text-sm text-muted">
            <p>
              <span className="font-medium text-foreground">Year:</span>{" "}
              {project.year}
            </p>
            <p>
              <span className="font-medium text-foreground">Role:</span>{" "}
              {project.role}
            </p>
          </div>
        </aside>
      </div>

      {/* Content detail */}
      <div className="mt-14 flex flex-col gap-10">
        <div>
          <h2 className="text-xl font-bold">My Contributions</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {project.contributions.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div>
            <h2 className="text-xl font-bold">Key Features</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {project.keyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.designApproach && project.designApproach.length > 0 && (
          <div>
            <h2 className="text-xl font-bold">Design Approach</h2>
            <div className="mt-3 flex flex-col gap-4">
              {project.designApproach.map((point) => (
                <div key={point.title}>
                  <p className="text-sm font-semibold text-foreground">
                    {point.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.outcome && (
          <div>
            <h2 className="text-xl font-bold">Outcome</h2>
            <p className="mt-3 text-sm leading-relaxed text-primary sm:text-base">
              {project.outcome}
            </p>
          </div>
        )}
      </div>

      {/* Previous / Next project */}
      <div className="mt-16 flex gap-4 border-t border-border pt-8 items-center justify-between">
        {prevProject ? (
          <Link
            href={`/work/${prevProject.slug}`}
            className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>{prevProject.title}</span>
          </Link>
        ) : (
          <span />
        )}

        {nextProject ? (
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary sm:text-right"
          >
            <span>{nextProject.title}</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </main>
  );
}
