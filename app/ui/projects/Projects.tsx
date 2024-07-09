import { projects } from "@/app/lib/portfolioData"
import { projectData } from "@/app/lib/types"
import Image from "next/image"

export default function Projects() {

    return (
        <section id='projects' className="max-h-fit min-h-screen flex flex-col items-center md:scroll-m-20 mt-10 text-white-text">
            <h3 className='text-primary text-3xl'>
                Projects
            </h3>
            {projects.map((project: projectData, index) => {
                return (
                    <article key={`${project.title}-${index}`} className=" border-2 border-primary rounded-3xl p-5 m-5 bg-background bg-opacity-35 boxGlow w-5/6 xl:w-1/2">
                        <h4 className="text-white-text text-xl font-bold">
                            {project.title}
                        </h4>
                        <div className="flex gap-10 my-5">
                            {project.screenshot &&
                                <div className=" w-52 h-auto rounded-xl self-center">
                                    <Image
                                        src={project.screenshot}
                                        alt={project.title}
                                        width={200}
                                        height={125}
                                        className="rounded-xl border border-accent w-52 h-auto"
                                    />
                                </div>
                            }
                            <p className="text-base text-light-text opacity-75 w-3/5 hover:opacity-100 transition-all">
                                {project.description}
                            </p>
                        </div>
                        <div className="mt-2 flex justify-between items-end">
                            <div className="flex flex-wrap gap-1 text-sm opacity-85">
                                {project.techstack.map((tech, techIndex) => {
                                    return (
                                        <p key={`project-${index}-techstack-${tech}-${techIndex}`} className="border border-accent text-white-text rounded-full p-2">
                                            {tech}
                                        </p>
                                    )
                                })}
                            </div>
                            <div className="flex gap-1 justify-end">
                                {project.githubLink &&
                                    <a href={project.githubLink} className="iconGlow">
                                        <Image
                                            src="/github.svg"
                                            alt={`${project.title} - github link`}
                                            width={32}
                                            height={32}
                                            className=" min-w-8"
                                        />
                                    </a>}
                                {project.externalLink &&
                                    <a href={project.externalLink} className="iconGlowXl">
                                        <Image
                                            src="/externalLight.svg"
                                            alt={`${project.title} - project external link`}
                                            width={32}
                                            height={32}
                                            className=" min-w-8"
                                        />
                                    </a>}
                            </div>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}


