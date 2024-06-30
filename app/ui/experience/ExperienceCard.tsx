'use client'
import { experienceData } from "@/app/lib/types"
import { useState } from "react"
import { motion, Variants } from 'framer-motion'

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function ExperienceCard({ data, index }: { data: experienceData, index: number }) {
    const [expanded, setExpanded] = useState<boolean>(false);


    // framer motion variants
    //  medium-ish speed div expansion
    //  staggard bullets opacity from 0-1 about as fast as the expansion
    //      all opacity goes to 0 at a medium-ish speed
    //      div collapses at medium-ish speed
    // button is an icon that changes? Arrow down turns to arrow up? (0 to 180 degree animation)
    //    Keyframes
    // seems pretty tame for a reduce motion option...
    // second guess would be Layout animation

    return (
        <motion.article animate={expanded ? "open" : "closed"} className="text-white-text border-2 border-primary rounded-3xl px-7 py-5 m-5 bg-background bg-opacity-35 boxGlow w-11/12 xl:w-3/5">
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
                <motion.ul variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                    style={{ pointerEvents: expanded ? "auto" : "none" }} className={`list-disc text-base text-light-text opacity-80`}>
                    {data.expandedBullets.map((bullet: string) => {
                        return (
                            <motion.li variants={itemVariants} key={bullet}>
                                <p>
                                    {bullet}
                                </p>
                            </motion.li>
                        )
                    })}
                </motion.ul>


            }
            {data.expandedBullets && <button onClick={() => setExpanded(!expanded)}>Expand</button>}
        </motion.article>
    )
}


