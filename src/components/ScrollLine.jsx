import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollLine({ containerRef }) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-dragon-green/10 hidden lg:block">
            <motion.div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-dragon-pink via-dragon-pink to-transparent shadow-[0_0_15px_rgba(219,39,119,0.5)]"
                style={{ height }}
            />
        </div>
    )
}
