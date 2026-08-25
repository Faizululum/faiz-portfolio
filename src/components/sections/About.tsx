import Image from "next/image";
import { Code2, GraduationCap } from "lucide-react";

const INFO_CARDS = [
  {
    icon: Code2,
    title: "Top Languages",
    detail: "JavaScript, Next.js, React.js, Express.js, Laravel, PostgreSQL",
  },
  {
    icon: GraduationCap,
    title: "Education",
    detail: 'Informatics Student at UPN "Veteran" Jawa Timur',
  },
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 sm:px-10 md:flex-row"
    >
      {/* Photo */}
      <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl sm:h-80 sm:w-80">
        <Image
          src="/img/Foto.png"
          alt="Foto About Faizul Ulum"
          fill
          sizes="320px"
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 text-center md:text-left">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Introduction
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Saya memiliki antusiasme tinggi untuk mempelajari hal baru guna
          menambah wawasan, dan sangat tertarik untuk berkarier sebagai UI/UX
          Designer maupun Full Stack Web Developer. Saya ingin terus
          mengembangkan diri di bidang teknologi yang terus berkembang.
        </p>

        {/* Info cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {INFO_CARDS.map(({ icon: Icon, title, detail }) => (
            <div
              key={title}
              className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 text-left"
            >
              <Icon size={24} className="text-primary" />
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="text-xs text-muted">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}