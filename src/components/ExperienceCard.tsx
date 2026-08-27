import { CheckCircle2 } from "lucide-react";
import { Experience } from "@/data/portfolio";

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      {/* Badge period & type */}
      <div className="mb-4 flex gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {exp.period}
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted">
          {exp.type}
        </span>
      </div>

      {/* Role & company */}
      <h3 className="text-lg font-bold sm:text-xl">{exp.role}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{exp.company}</p>

      {/* Poin */}
      <ul className="mt-4 flex flex-col gap-3">
        {exp.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-sm leading-relaxed text-muted"
          >
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="my-4 h-px bg-border" />

      {/* Tech stack */}
      <p className="mb-2 text-xs font-semibold text-muted">Tech Stack</p>
      <div className="flex flex-wrap gap-2">
        {exp.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-primary/30 px-2.5 py-1 text-xs font-medium text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
