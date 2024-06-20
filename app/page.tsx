'use client'
import Hero from "./ui/hero/Hero";
import AboutMe from "./ui/about/AboutMe";
import Experience from "./ui/experience/ExperienceSection";
import Projects from "./ui/projects/Projects";
import TalksAndPubs from "./ui/projects/talksAndPubs/TalksAndPubs";
import Contact from "./ui/contact/Contact";
import Navbar from "./ui/navbar/Navbar";

export default function Page() {

  return (
    <main className="p-content mt-4 md:flex">
      <Navbar />
      <div className="md:m-content">
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <TalksAndPubs />
        <Contact />
      </div>
    </main>
  );
}
