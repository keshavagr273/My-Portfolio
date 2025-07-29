import { portfolioConfig } from "@/config/portfolio.js";
import NavBar from "@/components/layout/nav-bar.jsx";
import Hero from "@/components/sections/Hero.jsx";
import Projects from "@/components/sections/Projects.jsx";
import Skills from "@/components/sections/Skills.jsx";
import Contact from "@/components/sections/Contact.jsx";
import Footer from "@/components/layout/Footer.jsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <Hero config={portfolioConfig.hero} />

      {/* Projects Section */}
      <Projects projects={portfolioConfig.projects} />

      {/* Skills Section */}
      <Skills skills={portfolioConfig.skills} />

      {/* Contact Section */}
      <Contact config={portfolioConfig.contact} />

      {/* Footer */}
      <Footer author={portfolioConfig.metadata.author} />
    </main>
  );
}
