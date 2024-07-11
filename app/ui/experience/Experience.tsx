import { experience } from "@/app/lib/portfolioData"
import { experienceData } from "@/app/lib/types"
import ExperienceCard from "./ExperienceCard"
export default function Experience() {

    return (
        <section id='experience' className="max-h-fit min-h-screen flex flex-col items-center md:scroll-m-20 mb-20 mt-10 w-full border border-error">
            <h3 className='text-primary text-3xl'>
                Experience
            </h3>
            {experience.map((experienceData: experienceData, index) => {
                return (
                    <ExperienceCard key={`${experienceData.title} - ${index}`} data={experienceData} index={index} />
                )
            })}
        </section>
    )
}


