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

export default function App() {
    const [pathIndex, setPathIndex] = useState(0); // index
    const progress = useMotionValue(pathIndex);
    const fill = useTransform(progress, paths.map(getIndex), colors);
    const path = useFlubber(progress, paths);

    React.useEffect(() => {
        const animation = animate(progress, pathIndex, {
            duration: 0.8,
            ease: "easeInOut",
            onComplete: () => {
                if (pathIndex === paths.length - 1) {
                    progress.set(0);
                    setPathIndex(1);
                } else {
                    setPathIndex(pathIndex + 1);
                }
            },
            delay: 3
        });

        return () => animation.stop();
    }, [pathIndex]);

    return (
        <svg width="400" height="400">
            <g transform="translate(10 10) scale(17 17)">
                <motion.path fill={fill} d={path} />
            </g>
        </svg>
    );
}
