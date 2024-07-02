'use client'

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useMotionValue, Variants, animate, useMotionValueEvent, useTransform, useAnimate, motionValue } from "framer-motion"
import TitleAnimation from "./TitleAnimation";


const myTitles: string[][] = [['S', 'o', 'f', 't', 'w', 'a', 'r', 'e'], ['M', 'e', 'c', 'h', 'a', 'n', 'i', 'c', 'a', 'l'], ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k'], ['R', 'o', 'b', 'o', 't', 'i', 'c', 's']];
const titles: string[] = ['Software', 'Mechanical', 'Fullstack', 'Robotics']


const itemVariants: Variants = {
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24, delay: 0.5 }
    },
    hide: {
        opacity: 0, y: -20, transition: {
            duration: 0.25
        }
    }
};

export default function HeroTitle() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(false);
        }, 3000);

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
                        variants={itemVariants}
                        initial='hide'
                        animate='show'
                        exit='hide'
                    >
                        {titles[titleIndex]}
                    </motion.span>
                }
            </AnimatePresence>
            <span className="-my-2">Engineer</span>
        </h2>

    )
}


