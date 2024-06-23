import { experience } from "@/app/lib/portfolioData"
import { experienceData } from "@/app/lib/types"

export default function Experience() {

    return (
        <section id='experience' className="h-fit flex flex-col gap-20">
            <h3 className='text-primary text-3xl ml-10'>
                Experience
            </h3>
            {experience.map((experienceData: experienceData) => {
                return (
                    <article>
                        <h4>
                            {experienceData.title}
                        </h4>
                        <div>
                            <h5>{experienceData.company}</h5>
                            <h5>{experienceData.timerange}</h5>
                        </div>
                        <ul>
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
                        {experienceData.expandedBullets &&
                            <div>
                                EXPANDED BULLETS
                                <ul>
                                    {experienceData.expandedBullets.map((bullet: string) => {
                                        return (
                                            <li>
                                                <p>
                                                    {bullet}
                                                </p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        }
                    </article>
                )
            })}
        </section>
    )
}


