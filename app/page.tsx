import { AuroraBackground } from "@/components/ui/aurora-background";
import { Nav } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Writing } from "@/components/sections/writing";
import { ResumeCta } from "@/components/sections/resume-cta";

export default function HomePage() {
  return (
    <>
      <AuroraBackground />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Writing />
        <ResumeCta />
      </main>
      <Footer />
    </>
  );
}
