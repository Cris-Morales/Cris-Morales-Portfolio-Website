import { experience } from "@/app/lib/portfolioData"
import { experienceData } from "@/app/lib/types"

export default function Experience() {

    return (
        <section id='experience' className="h-fit flex flex-col border border-primary">
            <h3 className='text-primary text-3xl ml-10'>
                Experience
            </h3>
            {experience.map((experienceData: experienceData) => {
                return (
                    <article className="text-white-text border-2 border-primary rounded-3xl pl-7 pr-5 py-5 m-5 bg-background bg-opacity-35 boxGlow">
                        <h4>
                            {experienceData.title}
                        </h4>
                        <div>
                            <h5>{experienceData.company}</h5>
                            <h5>{experienceData.timerange}</h5>
                        </div>
                        <ul className=" list-disc">
                            {experienceData.bullets.map((bullet: string) => {
                                return (
                                    <li>
                                        <p>
                                            {bullet}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                        {/* i wonder if adding this expanded section is too much for software positions. But part of me likes the idea of using this as a catch all website for me */}
                        {experienceData.expandedBullets &&
                            <ul id='experienceData' className=" list-disc hidden">
                                {experienceData.expandedBullets.map((bullet: string) => {
                                    return (
                                        <li>
                                            <p>
                                                {bullet}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>}
                    </article>
                )
            })}
        </section>
    )
}


