import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function ProductCard({ titleKey, title, description, image, variant = 'pink', delay = 0, onClick, layoutId }) {
  const { t } = useTranslation()
  const displayTitle = titleKey ? t(titleKey) : title
  const displayDesc = description

  return (
    <motion.div
      layoutId={layoutId ? `card-${layoutId}` : undefined}
      onClick={onClick}
      data-cursor-text="Quick View"
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl-soft hover:-translate-y-3 hover:scale-[1.02] animate-fade-in-up cursor-pointer`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-glow-lg" />

      <div className="aspect-square overflow-hidden relative">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 z-10 bg-gradient-to-br ${variant === 'pink'
          ? 'from-dragon-pink/30 via-dragon-pink/10 to-transparent'
          : 'from-dragon-green/30 via-dragon-green/10 to-transparent'
          } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <motion.div
          layoutId={layoutId ? `bg-${layoutId}` : undefined}
          className={`h-full w-full bg-gradient-to-br ${variant === 'pink'
            ? 'from-dragon-pink/20 to-dragon-pink/40'
            : 'from-dragon-green/20 to-dragon-green/40'
            } group-hover:scale-110 transition-transform duration-700 flex items-center justify-center relative`}
        >
          {image ? (
            <motion.img
              layoutId={layoutId ? `img-${layoutId}` : undefined}
              src={image}
              alt={displayTitle}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <span className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-700">🐉</span>
          )}

          {/* Quick View Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500`}>
              <svg className="w-4 h-4 text-dragon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-xs font-bold text-dragon-green uppercase tracking-wider">Quick View</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="p-6 relative">
        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 ${variant === 'pink' ? 'bg-dragon-pink' : 'bg-dragon-green'
          } opacity-5 rounded-bl-full`} />

        <h3 className="font-serif text-xl font-semibold text-dragon-green group-hover:text-dragon-pink transition-colors duration-300 relative z-10">
          {displayTitle}
        </h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-2 relative z-10">
          {displayDesc}
        </p>
        <div className="mt-4 flex items-center gap-2 relative z-10">
          <span className={`inline-block w-3 h-3 rounded-full ${variant === 'pink' ? 'bg-dragon-pink' : 'bg-dragon-green'
            } group-hover:animate-pulse-glow`} />
          <span className="text-sm font-medium text-dragon-green">{t('common.organicPremium')}</span>
        </div>
      </div>
    </motion.div >
  )
}
