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
      <div className={`absolute inset-0 rounded-full overflow-hidden transition-all duration-700 ease-in-out -z-10 ${isScrolled
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              className={`font-serif font-bold text-dragon-green transition-all duration-700 ease-in-out group-hover:text-dragon-pink leading-tight ${isScrolled ? 'text-sm sm:text-xl' : 'text-base sm:text-2xl'
                } max-w-[140px] sm:max-w-none whitespace-nowrap tracking-tighter sm:tracking-normal`}
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
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 sm:p-2.5 rounded-xl text-dragon-green hover:bg-dragon-pink/10 hover:text-dragon-pink transition-all duration-300 relative group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-dragon-pink/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <AnimatePresence mode='wait'>
                  {isOpen ? (
                    <motion.path
                      key="close"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <motion.path
                      key="menu"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </AnimatePresence>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="md:hidden overflow-hidden border-t border-dragon-pink/20"
            >
              <div className="flex flex-col gap-2 py-5">
                {navPaths.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block font-semibold py-3 px-5 rounded-xl transition-all duration-300 relative overflow-hidden group ${location.pathname === link.path
                        ? 'text-white bg-gradient-to-r from-dragon-pink to-dragon-pink-light shadow-lg'
                        : 'text-dragon-green hover:text-dragon-pink hover:bg-dragon-pink/10'
                        }`}
                    >
                      {location.pathname === link.path && (
                        <motion.span
                          layoutId="mobileActiveShimmer"
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                        />
                      )}
                      <span className="relative z-10">{t(`nav.${link.key}`)}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
