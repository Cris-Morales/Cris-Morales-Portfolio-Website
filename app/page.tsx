'use client'
import Hero from "./ui/hero/Hero";
import AboutMe from "./ui/about/AboutMe";
import Experience from "./ui/experience/Experience";
import Projects from "./ui/projects/Projects";
import TalksAndPubs from "./ui/projects/talksAndPubs/TalksAndPubs";
import Contact from "./ui/contact/Contact";
import Navbar from "./ui/navbar/Navbar";

export default function Page() {

  return (
    <main className="p-content md:flex">
      <Navbar />
      <div className="md:flex md:flex-col md:items-center md:w-full">
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
