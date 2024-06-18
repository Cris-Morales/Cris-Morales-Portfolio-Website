'use client'
import Hero from "./ui/hero/Hero";
import AboutMe from "./ui/about/AboutMe";
import Experience from "./ui/experience/ExperienceSection";
import Projects from "./ui/projects/Projects";
import TalksAndPubs from "./ui/projects/talksAndPubs/TalksAndPubs";
import Contact from "./ui/contact/Contact";
import Navbar from "./ui/navbar/Navbar";

import { useState, useEffect } from "react";

export default function Page() {


  return (
    <main className="flex p-content">
      <Navbar />
      <div className=" p-main">
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
