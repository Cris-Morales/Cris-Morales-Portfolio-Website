'use client'

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useMotionValue, Variants, animate, useMotionValueEvent, useTransform, useAnimate, motionValue } from "framer-motion"
import TitleAnimation from "./TitleAnimation";


const titles: string[] = ['Software', 'Mechanical', 'Fullstack', 'Robotics']


const layoutVariants: Variants = {

};

const itemVariants: Variants = {
    initial: {
        opacity: 0, y: -20, transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    hide: {
        opacity: 0, y: -20, transition: { type: "spring", stiffness: 300, damping: 24 }
    }
};

export default function HeroTitle() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(false);
        }, 4250);

        return () => clearInterval(interval);
    }, [])

    return (
        <h2 className='text-light-text text-2xl font-normal flex flex-col'>
            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    titleIndex === titles.length - 1 ? setTitleIndex(0) : setTitleIndex(titleIndex + 1);

                    setShow(true);
                }}
            >
                {show &&
                    <motion.span
                        key={titles[titleIndex]}
                        initial='initial'
                        animate='show'
                        exit='hide'
                        transition={{
                            staggerChildren: 0.05,
                            delayChildren: 0.250
                        }}
                    >
                        {titles[titleIndex].split('').map((char: string, index: number) =>
                            <motion.span
                                key={`${titles[titleIndex]} - ${char} - ${index}`}
                                variants={itemVariants}
                            >
                                {char}
                            </motion.span>
                        )}
                    </motion.span>
                }
            </AnimatePresence>
            <span className="-my-2">Engineer</span>
        </h2>

    )
}


