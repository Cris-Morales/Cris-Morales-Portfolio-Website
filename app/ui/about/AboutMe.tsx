import Image from "next/image"

export default function AboutMe() {

    return (
        <section id='about' className=" max-h-fit min-h-screen xl:scroll-mt-14 xl:mb-20 mt-10">
            <article className="flex flex-col items-center justify-center xl:flex-row-reverse ">
                <div className="xl:w-about-content">
                    <h3 className='text-primary text-3xl ml-10'>
                        About Me
                    </h3>
                    <p className="text-white-text text-xl border-2 border-primary rounded-3xl pl-7 pr-5 py-5 m-5 bg-background bg-opacity-35 boxGlow">
                        I began my professional journey as a Mechanical Engineer, where I first encountered programming through MatLab to analyze mathematical models and C++ for robotics and controls. A few years into my career, I felt a strong pull towards software-centric projects. This led me to dive into JavaScript and web development, ultimately securing a spot with the competitive tech accelerator OSLabs.
                        <br /><br />
                        Today, I am a core contributor to the Docker Desktop Extension, Docketeer, which boasts over 50,000 downloads on DockerHub and 850 stars on GitHub.
                        <br /><br />
                        I am currently open to new opportunities!
                        <span className='text-primary ml-1 textGlow'>
                            <a href='#contact'>
                                Let's create something awesome together :)
                            </a>
                        </span>
                        <br /><br />
                        When I'm not working, you can find me spending time with my wife, training in boxing, grappling, or mixed martial arts, caring for my animals, or gaming with friends.
                    </p>

                </div>
                <div className="flex flex-col items-center xl:w-3/5 xl:mr-5 xl:ml-24">
                    <Image
                        src="/aboutMe/meAndPartner.jpg"
                        alt="Me and my wife."
                        width={1331}
                        height={1536}
                        className="rounded-3xl relative right-32 top-20 z-20 min-w-60 max-w-72 aboutImageGlow"
                    />
                    <Image
                        src="/aboutMe/meAndDoggo.jpg"
                        alt="Me and our family Chonk, I mean, Dog in a tortilla blanket."
                        width={793}
                        height={887}
                        className="rounded-3xl relative left-32 z-10  min-w-60 max-w-72 aboutImageGlow"
                    />
                    <Image
                        src="/aboutMe/jiuJitsuTournament.jpg"
                        alt="Me, at my 3rd Grappling Tournament at Blue Belt, getting bronze because I was late to my match against the silver metal winner."
                        width={1022}
                        height={995}
                        className="rounded-3xl relative right-32 bottom-20  min-w-60 max-w-72 aboutImageGlow"
                    />
                </div>
            </article>
        </section>
    )
}


