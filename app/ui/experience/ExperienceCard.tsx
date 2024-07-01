'use client'
import { experienceData } from "@/app/lib/types"
import { useState } from "react"
import { AnimatePresence, motion, Variants, stagger, delay } from 'framer-motion'

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });


const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20 }
};

export default function ExperienceCard({ data, index }: { data: experienceData, index: number }) {
    const [isExpanded, setExpanded] = useState<boolean>(false);


    // framer motion variants
    //  medium-ish speed div expansion
    //  staggard bullets opacity from 0-1 about as fast as the expansion
    //      all opacity goes to 0 at a medium-ish speed
    //      div collapses at medium-ish speed
    // button is an icon that changes? Arrow down turns to arrow up? (0 to 180 degree animation)
    //    Keyframes
    // seems pretty tame for a reduce motion option...
    // second guess would be Layout animation

    // animatePresence for unmounting components
    // variants to orchestrate child component
    // stagger.. for that stagger effect
    // motion components

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
                <AnimatePresence>
                    {isExpanded &&
                        <motion.ul
                            initial='closed'
                            animate='open'
                            exit='closed'
                            className="list-disc text-base text-light-text opacity-80"
                            variants={{
                                open: { height: "auto" },
                                closed: { height: 0, transition: { delay: 0.15 } },
                            }}
                            transition={{
                                delayChildren: 0.15,
                                staggerChildren: 0.05
                            }}
                        >
                            {data.expandedBullets.map((bullet: string, index: number) => (
                                <motion.li
                                    key={`${bullet} - ${index}`}
                                    variants={itemVariants}
                                >
                                    <p>
                                        {bullet}
                                    </p>
                                </motion.li>
                            ))}
                        </motion.ul>
                    }
                </AnimatePresence>
            }
            {data.expandedBullets && <button className=" font-bold" onClick={() => setExpanded(!isExpanded)}>Expand</button>}
        </article>
    )
}


