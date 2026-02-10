import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'

export default function Counter({ value, direction = 'up', delay = 0, suffix = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    })

    const displayValue = useTransform(springValue, (latest) =>
        Math.round(latest).toLocaleString()
    )

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(value)
            }, delay * 1000)
        }
    }, [isInView, value, motionValue, delay])

    return (
        <span ref={ref}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    )
}
