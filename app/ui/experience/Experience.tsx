import { experience } from "@/app/lib/portfolioData"
import { experienceData } from "@/app/lib/types"

export default function Experience() {

    return (
        <section id='experience' className="max-h-fit min-h-screen flex flex-col items-center md:scroll-m-16 mb-20">
            <h3 className='text-primary text-3xl ml-10'>
                Experience
            </h3>
            {experience.map((experienceData: experienceData, index) => {
                return (
                    <article key={`${experienceData.title}-${experienceData.company}-${experienceData.timerange}`} className="text-white-text border-2 border-primary rounded-3xl pl-7 pr-5 py-5 m-5 bg-background bg-opacity-35 boxGlow w-11/12 md:w-3/5">
                        <h4 className=" text-xl font-bold">
                            {experienceData.title}
                        </h4>
                        <div className="flex justify-between text-base font-normal">
                            <h4>
                                {experienceData.company}
                            </h4>
                            <h4>{experienceData.timerange}</h4>
                        </div>
                        <ul className=" list-disc text-base text-light-text opacity-80">
                            {experienceData.bullets.map((bullet: string) => {
                                return (
                                    <li key={bullet}>
                                        <p>
                                            {bullet}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                        {experienceData.expandedBullets &&
                            <ul id={`${experienceData.title}-${index}`} className="list-disc text-base text-light-text opacity-80 hidden">
                                {experienceData.expandedBullets.map((bullet: string) => {
                                    return (
                                        <li key={bullet}>
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


