import { useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'

const FAQItem = ({ faq, isOpen, onClick }) => {
    const cardRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)

    // Motion values for tilt
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth spring physics
    const mouseX = useSpring(x, { stiffness: 150, damping: 20 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 })

    // Map mouse position to rotation (-5 to 5 degrees)
    const rotateX = useTransform(mouseY, [0.5, -0.5], [-5, 5])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5])

    // Specular shine effect position
    const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])
    const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()

        // Calculate relative mouse position (0 to 1)
        const mouseXPercent = (e.clientX - rect.left) / rect.width
        const mouseYPercent = (e.clientY - rect.top) / rect.height

        // Center the coordinate (-0.5 to 0.5)
        x.set(mouseXPercent - 0.5)
        y.set(mouseYPercent - 0.5)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className="group relative"
        >
            <div className={`glass backdrop-blur-md rounded-2xl overflow-hidden border border-white/40 shadow-xl-soft transition-all duration-500 hover:shadow-glow ${isOpen ? 'ring-2 ring-dragon-pink/30' : ''}`}>

                {/* Specular Shine Overlay */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.2) 0%, transparent 60%)`,
                        opacity: isHovered ? 1 : 0
                    }}
                />

                <button
                    onClick={onClick}
                    className="w-full relative z-10 flex items-center justify-between p-6 text-left hover:bg-white/30 transition-colors"
                >
                    <span
                        className={`font-semibold text-lg transition-colors duration-300 pr-8 ${isOpen ? 'text-dragon-pink' : 'text-dragon-green group-hover:text-dragon-pink'}`}
                        style={{ transform: "translateZ(20px)" }}
                    >
                        {faq.question}
                    </span>
                    <motion.div
                        animate={{
                            rotate: isOpen ? 180 : 0,
                            scale: isOpen ? 1.2 : 1
                        }}
                        className="flex-shrink-0 text-dragon-pink"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="relative z-10"
                        >
                            <div className="p-6 pt-0 text-gray-700 leading-relaxed bg-white/10 backdrop-blur-sm">
                                <motion.div
                                    className="h-px w-full bg-gradient-to-r from-transparent via-dragon-pink/20 to-transparent mb-6"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                />
                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    style={{ transform: "translateZ(10px)" }}
                                >
                                    {faq.answer}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default FAQItem
