import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ExperienceWith from "@/components/ExperienceWith";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="ms-1 space-y-[100px]">
      <HeroSection />
      <ExperienceWith />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
