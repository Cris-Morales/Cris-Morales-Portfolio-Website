'use client'
import { experienceData } from "@/app/lib/types"
import { useState } from "react"

export default function ExperienceCard({ data, index }: { data: experienceData, index: number }) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <article className="text-white-text border-2 border-primary rounded-3xl px-7 py-5 m-5 bg-background bg-opacity-35 boxGlow w-11/12 xl:w-3/5">
            <h4 className=" text-xl font-bold">
                {data.title}
            </h4>
            <div className="flex justify-between text-base font-bold gap-4">
                <h4>
                    {data.company}
                </h4>
                <h4 className="">{data.timerange}</h4>
            </div>
            <ul className="list-disc text-base text-light-text opacity-80">
                {data.bullets.map((bullet: string) => {
                    return (
                        <li key={bullet}>
                            <p>
                                {bullet}
                            </p>
                        </li>
                    )
                })}
            </ul>
            {data.expandedBullets &&
                <ul id={`${data.title}-${index}`} className={`list-disc text-base text-light-text opacity-80 ${!expanded && 'hidden'}`}>
                    {data.expandedBullets.map((bullet: string) => {
                        return (
                            <li key={bullet}>
                                <p>
                                    {bullet}
                                </p>
                            </li>
                        )
                    })}
                </ul>}
            {data.expandedBullets && <button onClick={() => setExpanded(!expanded)}>Expand</button>}
        </article>
    )
}


