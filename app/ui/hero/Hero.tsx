import Headshot from "./Headshot"
import { techstackIcons } from "@/app/lib/portfolioData"
import Image from "next/image"

export default function Hero() {
    const myTitles: string[] = ['Software', 'Mechanical', 'Fullstack', 'Robotics']


    return (
        <section id="hero" className="h-fit flex flex-col items-center justify-center p-hero md:flex-row md:h-hero md:mb-20">
            <Headshot />
            <div className="w-full h-fit p-4 md:w-1/2 ">
                <p className=" text-base text-light-text">
                    Hello! My name is
                </p>
                <h1 className="text-5xl text-primary leading-none">
                    Cristian Morales
                </h1>
                <h2 className='text-light-text text-2xl font-normal'>
                    <span>Software
                    </span> Engineer
                </h2>
                <div className=' max-w-carousel min-w-carousel flex justify-between gap-6 overflow-hidden my-6 h-14'>
                    {techstackIcons.map((icon: string) => {
                        return (
                            <Image
                                src={icon}
                                alt={icon.slice(16, 26)}
                                width={50}
                                height={50}
                                key={icon}
                            />
                        )
                    })}
                </div>
                <a className="text-dark-text font-bold text-xl bg-primary rounded-xl h-32 p-3 iconGlow" href='#contact'>
                    Work with Me!
                </a>
            </div>
        </section>
    )
}


