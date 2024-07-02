import "./styles.css";
import * as React from "react";
import { useState } from "react";
import { star, heart, hand, plane, lightning, note } from "./paths";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "./use-flubber";

const paths = [lightning, hand, plane, heart, note, star, lightning];
const colors = [
    "#00cc88",
    "#0099ff",
    "#8855ff",
    "#ff0055",
    "#ee4444",
    "#ffcc00",
    "#00cc88"
];


const titles: string[] = ['Software', 'Mechanical', 'Fullstack', 'Robotics']

export default function App() {
    const [titleIndex, setTitleIndex] = useState(0);
    const progress = useMotionValue(titleIndex);
    const text = useTransform(progress, paths.map(getIndex), colors); // what is actually sollected I guess

    React.useEffect(() => {
        const animation = animate(progress, titleIndex, {
            duration: 0.8,
            ease: "easeInOut",
            onComplete: () => {
                if (titleIndex === paths.length - 1) {
                    progress.set(0);
                    setTitleIndex(1);
                } else {
                    setTitleIndex(titleIndex + 1);
                }
            },
            delay: 3
        });

        return () => animation.stop();
    }, [titleIndex]);

    return (
        <svg width="400" height="400">
            <g transform="translate(10 10) scale(17 17)">
                <motion.p>
                    { }
                </motion.p>
            </g>
        </svg>
    );
}
