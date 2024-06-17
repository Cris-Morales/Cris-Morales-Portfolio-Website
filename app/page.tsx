'use client'
import Image from "next/image";
import { techstackIcons } from "./lib/portfolioData";
import Hero from "./ui/hero/Hero";
import AboutMe from "./ui/about/AboutMe";
import Experience from "./ui/experience/ExperienceSection";
import Projects from "./ui/projects/Projects";
import TalksAndPubs from "./ui/projects/talksAndPubs/TalksAndPubs";
import Contact from "./ui/contact/Contact";

export default function Home() {
  return (
    <main className="p-main m-hero">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <TalksAndPubs />
      <Contact />
    </main>
  );
}
