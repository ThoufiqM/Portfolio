import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ExperienceWith from "@/components/ExperienceWith";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="ms-1 space-y-[100px]">
      <HeroSection />
      <ExperienceWith />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
