import Headshot from "./Headshot"
import TechstackCarousel from "./TechstackCarousel"
import HeroTitle from "./HeroTitle"
import { Suspense } from "react"

export default function Hero() {

    return (
        <section id="hero" className="h-fit flex flex-col items-center justify-center p-hero md:flex-row md:h-hero md:mb-10 gap-10 md:mt-0 mt-5">
            <Headshot />
            <div className="w-full h-fit p-4 md:w-1/2 ">
                <p className=" text-base text-light-text">
                    Hello! My name is
                </p>
                <h1 className="text-5xl text-primary leading-none">
                    Cristian Morales
                </h1>
                <HeroTitle />
                <div className="carousel">
                    <Suspense>
                        <TechstackCarousel />
                    </Suspense>
                </div>
                <a className="text-dark-text font-bold text-xl bg-primary rounded-xl h-32 p-3 iconGlow" href='#contact'>
                    Work with Me!
                </a>
            </div>
        </section>
    )
}


