import Headshot from "./Headshot"
import TechstackCarousel from "./TechstackCarousel"
import HeroTitle from "./HeroTitle"

export default function Hero() {

    return (
        <section id="hero" className="h-fit flex flex-col items-center justify-center md:flex-row md:h-hero md:mb-10 gap-10 md:mt-0 mt-5 p-hero md:p-8">
            <Headshot />
            <div className="w-full h-fit p-4 md:w-5/12 ">
                <p className=" text-base font-semibold">
                    Hello! My name is
                </p>
                <h1 className="text-5xl text-primary leading-none font-semibold">
                    Cristian Morales
                </h1>
                <HeroTitle />
                <div className="carousel ">
                    <TechstackCarousel />
                </div>
                <a className="text-dark-text font-bold text-xl bg-primary rounded-xl h-32 p-3 iconGlow" href='#contact'>
                    Work with Me!
                </a>
            </div>
        </section>
    )
}


