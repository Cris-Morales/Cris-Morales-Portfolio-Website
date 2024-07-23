'use client'

import { useState, useEffect } from "react";
import { AnimatePresence, motion, Variants, useReducedMotion } from "framer-motion"
const titles: string[] = ['Software', 'Fullstack', 'Robotics', 'Mechanical'];



export default function HeroTitle() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [show, setShow] = useState(true);

    const reduceMotion = useReducedMotion();
    const itemVariants: Variants = {
        initial: {
            opacity: 0,
            y: reduceMotion ? 0 : -20,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        },
        hide: {
            opacity: 0,
            y: reduceMotion ? 0 : -20,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(false);
        }, 3750);

        return () => clearInterval(interval);
    }, [])

    return (
        <h2 className='text-light-text text-2xl font-normal w-48 flex flex-col justify-end pl-4 pt-2 pb-0 my-2 border-2 border-primary2 rounded-3xl'>
            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    titleIndex === titles.length - 1 ? setTitleIndex(0) : setTitleIndex(titleIndex + 1);
                    setShow(true);
                }}
            >
                {show &&
                    <motion.div
                        key={titles[titleIndex]}
                        initial='initial'
                        animate='show'
                        exit='hide'
                        transition={{
                            staggerChildren: 0.05,
                        }}
                        variants={{
                            show: {
                                height: "auto",
                            },
                            initial: {
                                height: 'auto',
                            },
                            hide: {
                                height: 'auto',
                            },
                        }}
                        className="flex text-primary font-bold "
                    >
                        {titles[titleIndex].split('').map((char: string, index: number) =>
                            <motion.p
                                key={`${titles[titleIndex]} - ${char} - ${index}`}
                                variants={itemVariants}
                                className=""
                            >
                                {char}
                            </motion.p>
                        )}
                    </motion.div>
                }
            </AnimatePresence>
            <div className="-mt-2 relative bottom-1">Engineer</div>
        </h2>

    )
}


