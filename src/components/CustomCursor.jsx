import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'

const DragonFruitIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Pink Skin */}
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#E91E8C" />
        {/* White Flesh */}
        <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" fill="white" />
        {/* Seeds */}
        <circle cx="9" cy="9" r="0.8" fill="#1A1A1A" />
        <circle cx="15" cy="10" r="0.8" fill="#1A1A1A" />
        <circle cx="11" cy="13" r="0.8" fill="#1A1A1A" />
        <circle cx="14" cy="16" r="0.8" fill="#1A1A1A" />
        <circle cx="8" cy="15" r="0.8" fill="#1A1A1A" />
        {/* Green Leaf on top */}
        <path d="M12 2C13 2 14 3.5 12 5C10 3.5 11 2 12 2Z" fill="#2D5A3D" />
    </svg>
)

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false)
    const [cursorText, setCursorText] = useState('')
    const [cursorColor, setCursorColor] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [seeds, setSeeds] = useState([])

    // Motion values for smooth tracking
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Spring physics for the trailing ring
    const springConfig = { damping: 30, stiffness: 250 }
    const ringX = useSpring(mouseX, springConfig)
    const ringY = useSpring(mouseY, springConfig)

    useEffect(() => {
        let lastMove = 0
        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true)
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)

            const now = Date.now()
            if (now - lastMove > 250) {
                const newSeed = {
                    id: now,
                    x: e.clientX,
                    y: e.clientY,
                    drift: (Math.random() - 0.5) * 30
                }
                setSeeds(prev => [...prev.slice(-5), newSeed])
                lastMove = now
            }
        }

        const handleMouseOver = (e) => {
            const target = e.target
            const interactiveEl = target.closest('button, a, [role="button"], input, [data-cursor-text], [data-cursor-color]')

            if (interactiveEl) {
                setIsHovered(true)
                setCursorText(interactiveEl.getAttribute('data-cursor-text') || '')
                setCursorColor(interactiveEl.getAttribute('data-cursor-color') || '')
            } else {
                const isPointer = window.getComputedStyle(target).cursor === 'pointer'
                setIsHovered(isPointer)
                setCursorText('')
                setCursorColor('')
            }
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        window.addEventListener('mouseover', handleMouseOver, { passive: true })
        document.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseleave', handleMouseLeave)
            document.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [isVisible, mouseX, mouseY])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Falling Seeds - Optimized count */}
            {seeds.map(seed => (
                <motion.div
                    key={seed.id}
                    initial={{ x: seed.x, y: seed.y, opacity: 1, scale: 1 }}
                    animate={{
                        x: seed.x + seed.drift,
                        y: seed.y + 80,
                        opacity: 0,
                        scale: 0.5,
                        rotate: 180
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="fixed w-1 h-1 bg-black rounded-full transform-gpu"
                    onAnimationComplete={() => {
                        setSeeds(prev => prev.filter(s => s.id !== seed.id))
                    }}
                />
            ))}

            {/* Dragon Fruit Icon - GPU Accelerated */}
            <motion.div
                className="fixed w-6 h-6 flex items-center justify-center transform-gpu"
                animate={{
                    rotate: isHovered ? [0, -10, 10, 0] : 0,
                    scale: isHovered ? (cursorText ? 1.5 : 1.3) : 1
                }}
                transition={{
                    rotate: isHovered ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 },
                    scale: { duration: 0.2 }
                }}
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    willChange: 'transform'
                }}
            >
                <DragonFruitIcon />

                {/* Contextual Text Label */}
                <AnimatePresence>
                    {cursorText && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 40 }}
                            exit={{ opacity: 0, scale: 0.5, x: 20 }}
                            className="absolute left-0 whitespace-nowrap px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-dragon-pink/20"
                        >
                            <span className="text-[10px] font-bold text-dragon-green uppercase tracking-tighter">
                                {cursorText}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Trailing Ring - GPU Accelerated */}
            <motion.div
                className="fixed border-2 rounded-full transform-gpu"
                animate={{
                    width: isHovered ? (cursorText ? 60 : 44) : 28,
                    height: isHovered ? (cursorText ? 60 : 44) : 28,
                    backgroundColor: isHovered
                        ? (cursorColor ? `${cursorColor}10` : 'rgba(233, 30, 140, 0.05)')
                        : 'transparent',
                    borderColor: isHovered
                        ? (cursorColor || '#E91E8C66') // Default dragon-pink/40
                        : '#E91E8C66'
                }}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    willChange: 'transform'
                }}
            />
        </div>
    )
}

export default CustomCursor
