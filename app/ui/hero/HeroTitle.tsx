'use client'

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useMotionValue, Variants, useMotionValueEvent, useTransform } from "framer-motion"
import { title } from "process";

const itemVariants: Variants = {
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    hide: { opacity: 0, y: -20, transition: { duration: .25 } }
};

export default function HeroTitle() {
    const myTitles: string[][] = [['S', 'o', 'f', 't', 'w', 'a', 'r', 'e'], ['M', 'e', 'c', 'h', 'a', 'n', 'i', 'c', 'a', 'l'], ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k'], ['R', 'o', 'b', 'o', 't', 'i', 'c', 's']];

    const titles: string[] = ['Software', 'Mechanical', 'Fullstack', 'Robotics']
    const [titleIndex, setTitleIndex] = useState(0);
    const [show, setShow] = useState(true);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // if (show) {
    //         //     if (titleIndex === myTitles.length - 1) {
    //         //         setTitleIndex(0);
    //         //     } else {
    //         //         setTitleIndex(titleIndex + 1);
    //         //     }
    //         // }
    //         setShow(!show)
    //     }, 1000);
    //     return () => clearInterval(interval);
    // })

    return (

        <h2 className='text-light-text text-2xl font-normal flex'>
            {/* <motion.span
                initial={false}
                animate={show ? 'show' : 'hide'}
            >
                <motion.span
                    variants={{
                        show: { height: "auto" },
                        hide: { height: 0, },
                    }}
                    transition={{
                        staggerChildren: 0.1,
                    }}
                    className="flex"

                >
                    {myTitles[titleIndex].map((char, index) =>
                        <motion.p variants={itemVariants} key={`${char} - ${index}`}>
                            {char}
                        </motion.p>
                    )}
                </motion.span>
            </motion.span> */}
            <span className="flex justify-center items-center text-center min-w-30 rounded-2xl px-2  py-1 w-40">{titles[titleIndex]}</span>
            <p className=" indent-0 py-1">Engineer</p>
            <button className=" ml-4" onClick={() => {

                if (titleIndex === myTitles.length - 1) {
                    setTitleIndex(0);
                } else {
                    setTitleIndex(titleIndex + 1);
                }

            }}>
                click
            </button>
        </h2>

    )
}


