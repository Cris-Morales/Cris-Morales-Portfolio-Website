import AboutMeGrid from "./AboutMeGrid"
import { NextFont } from "next/dist/compiled/@next/font"
import { hired } from "@/app/lib/portfolioData"

export default function AboutMe({ font }: { font: NextFont }) {

    return (
        <section id='about' className=" min-h-screen max-h-fit flex flex-col items-center mt-10 w-full scroll-m-20">
            <article className="flex flex-col items-center w-full p-5">
                <h3 className='text-primary text-3xl font-semibold'>
                    About Me
                </h3>
                <div className="w-full flex flex-col xl:w-2/3 xl:flex-row xl:gap-10">
                    <p className={`${font.className} text-lg font-normal rounded-2xl pl-7 pr-5 py-5 my-5 bg-background bg-opacity-35 boxGlow text-white-text w-full self-start z-10 border-2 border-primary xl:w-1/2`}>
                        I began my professional journey as a Mechanical Engineer, where I first encountered programming through C++ for robotics and controls and MatLab for numerical methods.
                        <br /><br />
                        A few years into my career, I felt a strong pull towards software engineering which led me to diving into JavaScript and web development, ultimately securing a spot with the competitive tech accelerator OSLabs.
                        <br /><br />
                        {hired ?
                            <>
                                I was then a core contributor to the Docker Desktop Extension, Docketeer, which boasts over 50,000 downloads on DockerHub and 850 stars on GitHub.
                                <br /><br />
                                Today, I am a Software Engineer working at Codeware Inc., engineering design software for building and analyzing pressure vessels.
                                <br /><br />
                                I am not currently open to full time work opportunities, but if you have some ideas or products you would like to discuss
                                <span className='text-primary textGlow ml-1'>
                                    <a href='#contact'>
                                        feel free to contact me :)
                                    </a>
                                </span>
                            </>
                            :
                            <>
                                Today, I am a core contributor to the Docker Desktop Extension, Docketeer, which boasts over 50,000 downloads on DockerHub and 850 stars on GitHub.
                                <br /><br />
                                I am currently open to new work opportunities!
                                <br />
                                <span className='text-primary textGlow'>
                                    <a href='#contact'>
                                        Let&apos;s create something awesome together :)
                                    </a>
                                </span>
                            </>
                        }
                        <br /><br />
                        In my free time, I spend time with my wife, train in various martial arts including Brazilian Jiu-Jitsu, care for my animals, play music and game with my friends.
                    </p>
                    <AboutMeGrid />
                </div>
            </article>
        </section>
    )
}