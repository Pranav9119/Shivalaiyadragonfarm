export default function BackgroundParticles({ count = 15, color = 'bg-dragon-pink' }) {
    const particles = Array.from({ length: count })

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => {
                const duration = Math.random() * 10 + 10
                const delay = Math.random() * 20
                const left = Math.random() * 100
                const top = Math.random() * 100
                const drift = (Math.random() - 0.5) * 40
                const scale = Math.random() * 0.5 + 0.5

                return (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${color}`}
                        style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            transform: `scale(${scale})`,
                            '--drift': `${drift}px`,
                            animation: `particleFloat ${duration}s linear ${delay}s infinite`,
                        }}
                    />
                )
            })}
        </div>
    )
}
