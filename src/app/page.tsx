import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import ScrollOverlay from "./components/ScrollOverlay";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />

      {/* Fixed Hero Section with fade effect */}
      <ScrollOverlay>
        <Hero />
      </ScrollOverlay>

      {/* Scrollable Content that overlays Hero */}
      <div className="relative z-10">
        {/* Spacer to allow initial view of Hero */}
        <div className="h-screen"></div>

        {/* Content sections that will slide over Hero */}
        <div className="bg-white shadow-2xl">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  );
}
