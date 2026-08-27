import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ExperienceSection } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceSection />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}
