import { experience } from "@/app/lib/portfolioData"
import { experienceData } from "@/app/lib/types"
import ExperienceCard from "./ExperienceCard"
import { NextFont } from "next/dist/compiled/@next/font"

export default function Experience({ font }: { font: NextFont }) {
    return (
        <section id='experience' className="max-h-fit min-h-screen flex flex-col items-center scroll-m-20 mb-20 w-full">
            <h3 className='text-primary text-3xl font-semibold'>
                Experience
            </h3>
            {experience.map((experienceData: experienceData, index) => {
                return (
                    <ExperienceCard key={`${experienceData.title} - ${index}`} data={experienceData} index={index} font={font} />
                )
            })}
        </section>
    )
}


