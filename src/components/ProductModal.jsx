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

                                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={`https://wa.me/918675522223?text=${encodeURIComponent(`${t('products.getQuote')} - ${t(product.titleKey)}: `)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 py-4 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-2 ${product.variant === 'pink'
                                            ? 'bg-dragon-pink text-white hover:bg-dragon-pink-light shadow-lg shadow-dragon-pink/30'
                                            : 'bg-dragon-green text-white hover:bg-dragon-green-light shadow-lg shadow-dragon-green/20'
                                            }`}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        {t('products.getQuote')}
                                    </a>
                                    <button
                                        onClick={onClose}
                                        className="flex-1 py-4 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-xl font-bold transition-all"
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
