import Image from "next/image"

export default function AboutMe() {

    return (
        <section id='about' className=" h-fit scroll-mt-20">
            <h3 className='text-primary text-3xl ml-10'>
                About Me
            </h3>
            <article className="flex flex-col items-center">
                <p className="text-white-text text-xl border-2 border-primary rounded-3xl p-5 m-5 bg-background bg-opacity-35 boxGlow">
                    I began my professional journey as a Mechanical Engineer, where I first encountered programming through MatLab to analyze mathematical models and C++ for robotics and controls. A few years into my career, I felt a strong pull towards software-centric projects. This led me to dive into JavaScript and web development, ultimately securing a spot with the competitive tech accelerator OSLabs.
                    <br /><br />
                    Today, I am a core contributor to the Docker Desktop Extension, Docketeer, which boasts over 15,000 downloads on DockerHub and 500 stars on GitHub.
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
                <div className="w-full flex flex-col items-center">
                    {/* have 2 columns, relatively positioned, 2 pics in left 1 pic in right, center both of them in the space given, same Z order, move the right over a fixed amount, left over a fixed amount, feel like genius */}
                    <Image
                        src="/aboutMe/meAndPartner.jpg"
                        alt="Me and my wife."
                        width={285}
                        height={325}
                        className="rounded-3xl relative right-32 z-20"
                    />
                    <Image
                        src="/aboutMe/meAndDoggo.jpg"
                        alt="Me and our family Chonk, I mean, Dog in a tortilla blanket."
                        width={287}
                        height={287}
                        className="rounded-3xl relative left-32 -top-24 z-10"
                    />
                    <Image
                        src="/aboutMe/jiuJitsuTournament.jpg"
                        alt="Me, at my 3rd Grappling Tournament at Blue Belt, getting bronze because I was late to my match against the silver metal winner."
                        width={300}
                        height={306}
                        className="rounded-3xl relative right-32 bottom-44"
                    />
                </div>
            </article>
        </section>
    )
}


