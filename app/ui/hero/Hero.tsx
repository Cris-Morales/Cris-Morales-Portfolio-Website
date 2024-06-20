import Headshot from "./Headshot"
import { techstackIcons } from "@/app/lib/portfolioData"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    const myTitles: string[] = ['Software', 'Mechanical', 'Fullstack']


    return (
        <section id="hero" className="h-section flex flex-col items-center px-2">
            <Headshot />
            <div className="w-full p-2">
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
                            />
                        )
                    })}
                </div>
                <Link className="text-dark-text font-normal text-xl bg-primary rounded-xl h-32 p-3" href='#contact'>
                    Work with Me!
                </Link>
            </div>
        </section>
    )
}


