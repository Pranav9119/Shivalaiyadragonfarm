import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function ProductModal({ isOpen, onClose, product }) {
    const { t } = useTranslation()

    if (!product) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-dragon-green/40 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white/95 backdrop-blur-xl w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-full transition-colors shadow-md group"
                            >
                                <svg className="w-6 h-6 text-dragon-green group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    src={product.image}
                                    alt={t(product.titleKey)}
                                    className="w-full h-full object-cover"
                                    width={800}
                                    height={600}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent`} />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                <div className="mb-8">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${product.variant === 'pink' ? 'bg-dragon-pink/10 text-dragon-pink' : 'bg-dragon-green/10 text-dragon-green'
                                        }`}>
                                        {t('common.organicPremium')}
                                    </span>
                                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-dragon-green">
                                        {t(product.titleKey)}
                                    </h2>
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {t(product.descKey)}
                                </p>

                                <div className="space-y-8">
                                    {/* Benefits */}
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 shrink-0 bg-cream rounded-2xl flex items-center justify-center text-2xl">
                                            🌿
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dragon-green mb-1">{t('products.nutritionalBenefits')}</h4>
                                            <p className="text-sm text-gray-600">{t(`products.${product.titleKey.split('.')[1]}Benefits`)}</p>
                                        </div>
                                    </div>

                                    {/* Flavor */}
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 shrink-0 bg-cream rounded-2xl flex items-center justify-center text-2xl">
                                            ✨
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dragon-green mb-1">{t('products.flavor')}</h4>
                                            <p className="text-sm text-gray-600">{t(`products.${product.titleKey.split('.')[1]}Flavor`)}</p>
                                        </div>
                                    </div>

                                    {/* Usage */}
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 shrink-0 bg-cream rounded-2xl flex items-center justify-center text-2xl">
                                            🍽️
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dragon-green mb-1">{t('products.howToEnjoy')}</h4>
                                            <p className="text-sm text-gray-600">{t(`products.${product.titleKey.split('.')[1]}Usage`)}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-100">
                                    <button
                                        onClick={onClose}
                                        className={`w-full py-4 rounded-xl font-bold transition-all ${product.variant === 'pink'
                                            ? 'bg-dragon-pink text-white hover:bg-dragon-pink-light shadow-lg shadow-dragon-pink/30'
                                            : 'bg-dragon-green text-white hover:bg-dragon-green-light shadow-lg shadow-dragon-green/20'
                                            }`}
                                    >
                                        {t('products.quickViewClose')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
