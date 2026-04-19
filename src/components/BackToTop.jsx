import { useState, useEffect } from 'react'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let ticking = false
        const toggleVisibility = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsVisible(window.scrollY > 300)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', toggleVisibility, { passive: true })
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-24 left-4 md:left-auto md:right-8 md:bottom-8 z-[110] p-3 md:p-4 rounded-full bg-gradient-to-br from-dragon-pink to-dragon-pink-dark text-white shadow-2xl shadow-dragon-pink/30 hover:scale-110 transition-all duration-300 group animate-fade-in-up"
                    aria-label="Back to top"
                >
                    {/* Pulsing halo */}
                    <div className="absolute inset-0 bg-dragon-pink/20 rounded-full animate-ping opacity-20" />

                    {/* Arrow icon */}
                    <svg
                        className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>

                    {/* Ripple effect on click */}
                    <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-active:scale-100 group-active:opacity-0 transition-all duration-500" />
                </button>
            )}
        </>
    )
}
