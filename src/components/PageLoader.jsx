import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()

    useEffect(() => {
        // Start loading animation
        setIsLoading(true)

        // End loading after animation completes
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 800) // 800ms transition duration

        return () => clearTimeout(timer)
    }, [location.pathname])

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* Sliding overlay from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-dragon-pink via-dragon-pink-light to-dragon-pink animate-slide-overlay" />

            {/* Dragon fruit logo animation */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative animate-pulse-scale">
                    {/* Spinning circle */}
                    <div className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin" />

                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-12 h-12 object-contain animate-pulse"
                        />
                    </div>
                </div>
            </div>

            {/* Progress bar at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
                <div className="h-full bg-white animate-progress-bar" />
            </div>
        </div>
    )
}
