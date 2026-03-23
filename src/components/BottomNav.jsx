import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const navItems = [
  {
    key: 'home',
    path: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    key: 'products',
    path: '/products',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.98-1.72l1.63-8.28H6" />
      </svg>
    )
  },
  {
    key: 'gallery',
    path: '/gallery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    )
  },
  {
    key: 'contact',
    path: '/contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    )
  }
]

export default function BottomNav() {
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-cream-dark shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 relative"
            >
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-dragon-pink rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className={`transition-colors duration-200 ${isActive ? 'text-dragon-pink' : 'text-gray-400'}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-semibold tracking-wide transition-colors duration-200 ${isActive ? 'text-dragon-pink' : 'text-gray-400'}`}>
                {t(`nav.${item.key}`)}
              </span>
            </Link>
          )
        })}
      </div>
      {/* Safe area padding for phones with home indicator */}
      <div className="h-safe-area-bottom bg-white/95" />
    </nav>
  )
}
