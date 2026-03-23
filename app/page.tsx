import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import CircuitBackground from "@/components/CircuitBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CircuitBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Vision />
      <Contact />
    </main>
  );
}
