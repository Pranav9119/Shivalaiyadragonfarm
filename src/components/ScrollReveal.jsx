import { motion } from 'framer-motion'

const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    distance = 50,
    once = true
}) => {
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
            y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: 'easeOut',
            },
        },
    }

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-50px" }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollReveal
