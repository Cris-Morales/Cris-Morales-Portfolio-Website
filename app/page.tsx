import Hero from "./ui/hero/Hero";
import AboutMe from "./ui/about/AboutMe";
import Experience from "./ui/experience/Experience";
import Projects from "./ui/projects/Projects";
import TalksAndPubs from "./ui/projects/talksAndPubs/TalksAndPubs";
import Contact from "./ui/contact/Contact";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/Footer";
import { roboto } from "./ui/fonts";
import { NextFont } from "next/dist/compiled/@next/font";

export default function Page() {
  const font: NextFont = roboto;
  return (
    <main className="md:flex z-30 ">
      <Navbar />
      <div className="md:flex md:flex-col md:items-center md:w-full">
        <Hero />
        <AboutMe font={font} />
        <Experience font={font} />
        <Projects font={font} />
        <TalksAndPubs />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
