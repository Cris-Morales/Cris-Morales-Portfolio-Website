import { projects, techstackIcons } from "@/app/lib/portfolioData"
import { projectData } from "@/app/lib/types"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {

    return (
        <section id='projects' className="max-h-fit min-h-screen flex flex-col items-center md:scroll-m-16 mb-5">
            <h3 className='text-primary text-3xl ml-10'>
                Projects
            </h3>
            {projects.map((project: projectData, index) => {
                return (
                    <article key={`${project.title}-${index}`} className="text-white-text border-2 border-primary rounded-3xl pl-7 pr-5 py-5 m-5 bg-background bg-opacity-35 boxGlow w-11/12 md:w-3/5">
                        <h4 className=" text-xl font-bold">
                            {project.title}
                        </h4>
                        <div className="flex items-center gap-10">
                            {project.screenshot && <Image
                                src={project.screenshot}
                                alt={project.title}
                                width={200}
                                height={125}
                                className=" w-52 h-auto rounded-xl border border-accent"
                            />}
                            <p className="text-base text-light-text opacity-85">
                                {project.description}
                            </p>
                        </div>
                        <div className="mt-2 flex justify-between items-end">
                            <div className="flex flex-wrap gap-1 text-sm opacity-85">
                                {project.techstack.map((tech, techIndex) => {
                                    return (
                                        <p key={`project-${index}-techstack-${tech}-${techIndex}`} className="border border-accent rounded-full p-2">
                                            {tech}
                                        </p>
                                    )
                                })}
                            </div>
                            <div className="flex gap-1 justify-end">
                                {project.githubLink &&
                                    <a href={project.githubLink} className="">
                                        <Image
                                            src="/github.svg"
                                            alt={`${project.title} - github link`}
                                            width={30}
                                            height={30}
                                        />
                                    </a>}
                                {project.externalLink &&
                                    <a href={project.externalLink} className="">
                                        <Image
                                            src="/external.svg"
                                            alt={`${project.title} - project external link`}
                                            width={30}
                                            height={30}
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


