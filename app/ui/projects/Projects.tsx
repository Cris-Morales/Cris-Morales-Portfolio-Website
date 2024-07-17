import { projects } from "@/app/lib/portfolioData"
import { projectData } from "@/app/lib/types"
import Image from "next/image"

export default function Projects() {

    return (
        <section id='projects' className="max-h-fit min-h-screen flex flex-col items-center scroll-m-20 mt-10 text-white-text">
            <h3 className='text-primary text-3xl'>
                Projects
            </h3>
            {projects.map((project: projectData, index) => {
                return (
                    <article key={`${project.title}-${index}`} className="border-2 border-primary rounded-3xl p-5 m-5 bg-background bg-opacity-35 boxGlow w-5/6 md:w-2/3 lg:3/5 xl:w-5/12">
                        <h4 className="text-white-text text-xl font-bold text-center sm:text-left">
                            {project.title}
                        </h4>
                        <div className={`flex flex-col items-center sm:items-start sm:flex-row  my-5 ${!project.screenshot ? 'justify-center' : 'sm:justify-center'}`}>
                            {project.screenshot &&
                                <div className="rounded-xl sm:self-center sm:w-2/5 flex sm:mr-10 mb-5 sm:mb-0">
                                    <Image
                                        src={project.screenshot}
                                        alt={project.title}
                                        width={project.resolutionX}
                                        height={project.resolutionY}
                                        className="rounded-xl w-64 h-auto border border-accent "
                                    />
                                </div>
                            }
                            <p className={`text-base text-light-text opacity-75 hover:opacity-100 transition-all ${!project.screenshot ? 'w-full' : 'sm:w-3/5'}`}>
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


