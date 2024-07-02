'use client'

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion, useMotionValue, Variants, animate, useMotionValueEvent, useTransform, useAnimate, motionValue } from "framer-motion"


const myTitles: string[][] = [['S', 'o', 'f', 't', 'w', 'a', 'r', 'e'], ['M', 'e', 'c', 'h', 'a', 'n', 'i', 'c', 'a', 'l'], ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k'], ['R', 'o', 'b', 'o', 't', 'i', 'c', 's']];
const titles: string[] = ['Software', 'Mechanical', 'Fullstack', 'Robotics']

export default function TitleAnimation({ title, setShow }: { title: string, setShow: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <motion.span
            initial={{
                opacity: 0,
                y: -20
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: -20
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 24
            }}
            onAnimationStart={() => {
                useEffect(() => {
                    setTimeout(() => {
                        setShow(false);
                    }, 2000);
                }, []);
            }}
        >
            {title}
        </motion.span>

    )
}


