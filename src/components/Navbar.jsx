import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'

const navPaths = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/products', key: 'products' },
  { path: '/gallery', key: 'gallery' },
  { path: '/process', key: 'process' },
  { path: '/contact', key: 'contact' },
  { path: '/faq', key: 'faq' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Scroll Progress Bar logic
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-700 ease-in-out"
    >
      {/* Background Pill Container */}
      <div className={`absolute inset-0 overflow-hidden transition-all duration-700 ease-in-out -z-10 ${isOpen ? 'rounded-[2rem]' : 'rounded-full'
        } ${isScrolled || isOpen
          ? 'bg-white/80 backdrop-blur-2xl shadow-2xl border border-dragon-pink/20'
          : 'bg-white/70 backdrop-blur-xl shadow-xl border border-cream-dark/40'
        }`}>
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-dragon-pink via-dragon-pink-light to-dragon-green origin-left z-20"
          style={{ scaleX }}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dragon-pink/5 via-transparent to-dragon-green/5 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-50">
        <div className={`flex justify-between items-center transition-all duration-700 ease-in-out ${isScrolled ? 'h-16' : 'h-20'
          }`}>
          {/* Logo with Magnetic Hover Effect */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group relative z-10 shrink-0">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="relative rounded-full"
            >
              <img
                src="/logo.png"
                alt="Shivalaiya Dragon Farm Logo"
                className={`w-auto object-contain transition-all duration-700 ease-in-out ${isScrolled ? 'h-8 sm:h-9' : 'h-10 sm:h-12'
                  }`}
              />
              <motion.div
                className="absolute inset-0 bg-dragon-pink/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                layoutId="logoGlow"
              />
            </motion.div>
            <motion.span
              whileHover={{ x: 5 }}
              className={`font-serif font-bold text-dragon-green transition-all duration-700 ease-in-out group-hover:text-dragon-pink leading-tight ${isScrolled ? 'text-xs sm:text-xl lg:text-2xl' : 'text-sm sm:text-2xl lg:text-3xl'
                } whitespace-nowrap tracking-tighter sm:tracking-normal`}
            >
              Shivalaiya Dragon Farm
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navPaths.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group py-2"
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className={`font-semibold text-sm tracking-wide transition-all duration-300 ${location.pathname === link.path
                    ? 'text-dragon-pink'
                    : 'text-dragon-green group-hover:text-dragon-pink'
                    }`}
                >
                  {t(`nav.${link.key}`)}
                </motion.span>

                {/* Animated active underline using layoutId */}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-dragon-pink via-dragon-pink-light to-dragon-pink z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover underline */}
                <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 w-0 bg-dragon-pink/50 group-hover:w-full ${location.pathname === link.path ? 'hidden' : ''
                  }`} />
              </Link>
            ))}

            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-2 pl-6 border-l border-dragon-green/20"
            >
              <LanguageSwitcher />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-1 sm:gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-dragon-green hover:bg-dragon-pink/10 hover:text-dragon-pink transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Compact Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden absolute top-full left-0 right-0 mx-3 mt-2 z-50 rounded-2xl overflow-hidden shadow-2xl border border-cream-dark/60"
              style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.95)' }}
            >
              {/* Subtle gradient accent top bar */}
              <div className="h-0.5 bg-gradient-to-r from-dragon-green via-dragon-pink to-dragon-green-light" />

              <div className="px-3 py-3">
                {navPaths.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.045, duration: 0.2, ease: 'easeOut' }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'text-white bg-gradient-to-r from-dragon-pink to-dragon-pink-light shadow-sm'
                          : 'text-dragon-green hover:bg-dragon-green/5 hover:text-dragon-pink'
                      }`}
                    >
                      {location.pathname === link.path && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      )}
                      {t(`nav.${link.key}`)}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Quick contact strip at bottom */}
              <div className="px-4 py-2.5 border-t border-cream-dark/50 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-dragon-green/40">Quick Contact</span>
                <div className="flex gap-2">
                  <a href="mailto:shivalaiyadragon@gmail.com" className="w-7 h-7 rounded-full bg-dragon-pink/10 flex items-center justify-center text-sm hover:bg-dragon-pink hover:text-white transition-all">
                    ✉️
                  </a>
                  <a href="https://wa.me/918675522223" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center text-sm hover:bg-green-500 hover:text-white transition-all">
                    💬
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
