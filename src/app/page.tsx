import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceSection />
      <Work />
    </main>
  );
}
