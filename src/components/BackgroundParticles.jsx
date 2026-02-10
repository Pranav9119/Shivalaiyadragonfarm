import { motion } from 'framer-motion'

export default function BackgroundParticles({ count = 15, color = 'bg-dragon-pink' }) {
    const particles = Array.from({ length: count })

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full ${color} opacity-20`}
                    initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: [null, '-20%', '120%'],
                        x: [null, (Math.random() - 0.5) * 20 + '%'],
                        opacity: [0, 0.2, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 20,
                    }}
                />
            ))}
        </div>
    )
}
