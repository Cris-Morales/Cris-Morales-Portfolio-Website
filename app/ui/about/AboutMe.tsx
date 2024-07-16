import Image from "next/image"
import { aboutMeImages } from "@/app/lib/portfolioData"
import { aboutMeImageType } from "@/app/lib/types"

export default function AboutMe() {

    return (
        <section id='about' className=" min-h-screen max-h-fit border border-primary flex flex-col items-center lg:scroll-m-20 mb-20 mt-10 w-full">
            {/* xl:w-10/12 2xl:w-full */}
            <article className="flex flex-col items-center w-10/12 p-2 border border-error">
                {/* -mt-10 */}
                <h3 className='text-primary text-3xl ml-10'>
                    About Me
                </h3>
                <div className="lg:w-10/12 border border-accent flex items-center">
                    <p className="text-lg border-2 border-primary rounded-3xl pl-7 pr-5 py-5 my-5 mx-10 bg-background bg-opacity-35 boxGlow text-white-text w-1/2 lg:max-w-about-content self-start z-10">
                        I began my professional journey as a Mechanical Engineer, where I first encountered programming through MatLab for numerical methods and C++ for robotics and controls. A few years into my career, I felt a strong pull towards software engineering which led me to dive into JavaScript and web development, ultimately securing a spot with the competitive tech accelerator OSLabs.
                        <br /><br />
                        Today, I am a core contributor to the Docker Desktop Extension, Docketeer, which boasts over 50,000 downloads on DockerHub and 850 stars on GitHub.
                        <br /><br />
                        I am currently open to new work opportunities!
                        <br />
                        <span className='text-primary textGlow'>
                            <a href='#contact'>
                                Let&apos;s create something awesome together :)
                            </a>
                        </span>
                        <br /><br />
                        In my free time, I spend time with my wife, train in various Brazilian Jiu-Jitsu, care for my animals, play music and game with my friends.
                    </p>
                    <div className="grid grid-cols-2 py-5 w-1/2 gap-10 z-0">
                        {aboutMeImages.map((imageData: aboutMeImageType) =>
                            <div className="min-w-44 max-w-64 hover:scale-110 duration-300 transition-all" key={imageData.source}>
                                <Image
                                    src={imageData.source}
                                    alt={imageData.alt}
                                    width={imageData.resolutionX}
                                    height={imageData.resolutionY}
                                    className="rounded-3xl aboutImageGlow"
                                />
                            </div>)
                        }
                    </div>
                </div>
            </article>
        </section>
    )
}


