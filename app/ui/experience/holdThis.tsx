import { AnimatePresence, motion } from "framer-motion"
<AnimatePresence initial={false}>
    {expanded &&
        <motion.ul key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
                open: { opacity: 1, height: "auto", transition: { type: 'spring', bounce: 0, duration: 0.8, delayChildren: 0.3, staggerChildren: 0.05 } },
                collapsed: {
                    opacity: 0, height: 0, transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                    }
                }
            }}

            className={`list-disc text-base text-light-text opacity-80 ${expanded ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {data.expandedBullets.map((bullet: string) => {
                return (
                    <motion.li variants={itemVariants} key={bullet}>
                        <p>
                            {bullet}
                        </p>
                    </motion.li>
                )
            })}
        </motion.ul>}
</AnimatePresence>