'use client'
import { experienceData } from "@/app/lib/types"
import { useState } from "react"
import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from "next/image"

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: -20 }
};

export default function ExperienceCard({ data, index }: { data: experienceData, index: number }) {
    const [isExpanded, setExpanded] = useState<boolean>(false);

    return (
        <article className="flex flex-col text-white-text border-2 border-primary rounded-3xl px-7 py-5 m-5 bg-background bg-opacity-35 boxGlow w-11/12 xl:w-1/2">
            <h4 className=" text-xl font-bold">
                {data.title}
            </h4>
            <div className="flex justify-between text-base font-bold gap-4 mb-4">
                <h4>
                    {data.company}
                </h4>
                <h4 className="">{data.timerange}</h4>
            </div>
            <ul className="list-disc text-base text-light-text mx-4">
                {data.bullets.map((bullet: string) => {
                    return (
                        <li key={bullet} className="">
                            <p className="mb-2 opacity-75 hover:opacity-100 transition-all">
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
                            className="list-disc text-base text-light-text mx-4"
                            variants={{
                                open: { height: "auto" },
                                closed: { height: 0, transition: { delay: 0.1 } },
                            }}
                            transition={{
                                delayChildren: 0.1,
                                staggerChildren: 0.05
                            }}
                        >
                            {data.expandedBullets.map((bullet: string, index: number) => (
                                <motion.li
                                    key={`${bullet} - ${index}`}
                                    variants={itemVariants}
                                >
                                    <p className="mb-2 opacity-75 hover:opacity-100 transition-all">
                                        {bullet}
                                    </p>
                                </motion.li>
                            ))}
                        </motion.ul>
                    }

                </AnimatePresence>
            }
            {data.expandedBullets &&
                <motion.button
                    className="self-end -mb-4 -mt-4 -mr-4 rounded-full"
                    animate={isExpanded ? "open" : "closed"}
                    whileTap={{ scale: 0.85 }} onClick={() => setExpanded(!isExpanded)}>
                    <motion.div
                        variants={{
                            open: {
                                rotate: -180, filter: [
                                    `drop-shadow(0 0 0.5rem #52FFC2)`,
                                    `drop-shadow(0 0 1rem #52FFC2)
                                    drop-shadow(0 0 0.5rem #52FFC2)`,
                                    `drop-shadow(0 0 1.5rem #52FFC2)
                                    drop-shadow(0 0 1rem #52FFC2)
                                    drop-shadow(0 0 0.5rem #52FFC2)`]
                            },
                            closed: { rotate: 0, filter: 'drop-shadow(0 0 0rem #52FFC2)' }
                        }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                        style={{ originY: 0.50 }}
                    >
                        <Image
                            src={'/caret-down.svg'}
                            alt='Expand'
                            width={32}
                            height={32}
                        />
                    </motion.div>
                </motion.button>}
        </article>
    )
}


