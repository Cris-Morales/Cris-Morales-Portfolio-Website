import Image from "next/image"
import { aboutMeImages } from "@/app/lib/portfolioData"
import { aboutMeImageType } from "@/app/lib/types"
import AboutMeGrid from "./AboutMeGrid"

export default function AboutMe() {

    return (
        <section id='about' className=" min-h-screen max-h-fit flex flex-col items-center mt-10 w-full scroll-m-20">
            {/* xl:w-10/12 2xl:w-full */}
            <article className="flex flex-col items-center w-full p-5">
                {/* -mt-10 */}
                <h3 className='text-primary text-3xl ml-10'>
                    About Me
                </h3>
                <div className="w-full flex flex-col xl:w-2/3 xl:flex-row xl:gap-10">
                    <p className="text-lg rounded-3xl pl-7 pr-5 py-5 my-5 bg-background bg-opacity-35 boxGlow text-white-text w-full self-start z-10 border-2 border-primary xl:w-1/2">
                        I began my professional journey as a Mechanical Engineer, where I first encountered programming through MatLab for numerical methods and C++ for robotics and controls.
                        <br /><br />
                        A few years into my career, I felt a strong pull towards software engineering which led me to diving into JavaScript and web development, ultimately securing a spot with the competitive tech accelerator OSLabs.
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
                        In my free time, I spend time with my wife, train in various martial arts including Brazilian Jiu-Jitsu, care for my animals, play music and game with my friends.
                    </p>
                    <AboutMeGrid />
                </div>
            </article>
        </section>
    )
}



// <div className="grid grid-cols-2 py-5 w-full gap-10 z-0">
//     {aboutMeImages.map((imageData: aboutMeImageType, index: number) =>
//         <div className="min-w-24 max-w-64 hover:scale-105 duration-300 transition-all" key={imageData.source}>
//             {/* lg:hover:scale-110 lg:duration-300 lg:transition-all */}
//             <Image
//                 src={imageData.source}
//                 alt={imageData.alt}
//                 width={imageData.resolutionX}
//                 height={imageData.resolutionY}
//                 className="rounded-3xl aboutImageGlow"
//             />
//         </div>)
//     }
// </div>