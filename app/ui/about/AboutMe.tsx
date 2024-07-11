import Image from "next/image"

export default function AboutMe() {

    return (
        <section id='about' className="max-h-fit min-h-screen flex flex-col items-center justify-center md:scroll-m-14 mb-20 mt-10 border border-error w-full">
            <article className="flex flex-col items-center justify-center lg:flex-row-reverse lg:items-start w-full 2xl:w-2/3 p-2 -mt-10">
                <div className="lg:w-about-content">
                    <h3 className='text-primary text-3xl ml-10'>
                        About Me
                    </h3>
                    <p className="text-xl border-2 border-primary rounded-3xl pl-7 pr-5 py-5 m-5 bg-background bg-opacity-35 boxGlow text-white-text">
                        I began my professional journey as a Mechanical Engineer, where I first encountered programming through MatLab to analyze mathematical models and C++ for robotics and controls. A few years into my career, I felt a strong pull towards software-centric projects. This led me to dive into JavaScript and web development, ultimately securing a spot with the competitive tech accelerator OSLabs.
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
                        When I&apos;m not working, you can find me spending time with my wife, training in boxing, grappling, or mixed martial arts, caring for my animals, playing music or gaming with my  friends.
                    </p>
                </div>
                <div className="flex flex-col items-center lg:w-1/2 lg:mr-5 self-center pt-10">
                    <div className="w-2/5 md:w-1/3  lg:w-5/12 xl:w-1/3 2xl:w-5/12 relative aboutRight top-8 sm:top-14 z-20 ">
                        <Image
                            src="/aboutMe/meAndPartner.jpg"
                            alt="Me and my wife."
                            width={1331}
                            height={1536}
                            className="rounded-3xl aboutImageGlow"
                        />
                    </div >
                    <div className="w-2/5 md:w-1/3 lg:w-5/12 xl:w-1/3 2xl:w-5/12 relative aboutLeft z-10">
                        <Image
                            src="/aboutMe/meAndDoggo.jpg"
                            alt="Me and our family Chonk, I mean Dog, in a tortilla blanket."
                            width={793}
                            height={887}
                            className="rounded-3xl aboutImageGlow "
                        />
                    </div>
                    <div className="w-2/5 md:w-1/3 lg:w-5/12 xl:w-1/3 2xl:w-5/12 relative aboutRight bottom-14 sm:bottom-24 lg:bottom-14 xl:bottom-24">
                        <Image
                            src="/aboutMe/jiuJitsuTournament.jpg"
                            alt="Me, at my 3rd Grappling Tournament at Blue Belt, getting bronze because I was late to my match against the silver metal winner."
                            width={1022}
                            height={995}
                            className="rounded-3xl aboutImageGlow"
                        />
                    </div>
                </div>
            </article>
        </section>
    )
}


