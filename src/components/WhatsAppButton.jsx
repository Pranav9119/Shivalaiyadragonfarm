import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const WhatsAppButton = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const phoneNumber = "918675522223"
    const message = encodeURIComponent("Hello! I'm interested in ordering fresh dragon fruits. Can you provide more details?")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <div className="fixed bottom-24 right-4 md:bottom-28 md:right-8 z-50 flex flex-col items-end gap-3">
            {/* Trust Label */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl border border-cream-dark text-[10px] font-bold text-dragon-green uppercase tracking-tighter flex items-center gap-2 pointer-events-none"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        {t('contact.respondsIn5Min')}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Expandable Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="flex flex-col gap-3 mb-2"
                    >
                        {/* Call Button */}
                        <motion.a
                            href={`tel:+${phoneNumber}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-3 px-5 py-3 bg-dragon-green text-white rounded-2xl shadow-xl border-2 border-white/20"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="font-bold text-sm tracking-tight">{t('contact.callNow')}</span>
                        </motion.a>

                        {/* WhatsApp Button */}
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-3 px-5 py-3 bg-[#25D366] text-white rounded-2xl shadow-xl border-2 border-white/20"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="font-bold text-sm tracking-tight">{t('contact.chatWhatsApp')}</span>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ x: 100, opacity: 0 }}
                animate={{ 
                    x: 0, 
                    opacity: 1,
                    scale: isOpen ? 1 : [1, 1.05, 1, 1.05, 1]
                }}
                transition={{
                    scale: {
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut"
                    }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all overflow-hidden border-2 border-white/20 ${
                    isOpen ? 'bg-dragon-pink text-white' : 'bg-dragon-green text-white'
                }`}
            >
                {isOpen ? (
                    <>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="font-bold tracking-tight">{t('products.quickViewClose')}</span>
                    </>
                ) : (
                    <>
                        <div className="relative">
                            <span className="absolute inset-0 bg-white rounded-full scale-110 blur-sm opacity-20" />
                            <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                            </svg>
                        </div>
                        <span className="font-bold tracking-tight whitespace-nowrap">
                            {t('products.getQuote')}
                        </span>
                        <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
                    </>
                )}
            </motion.button>
        </div>
    )
}

export default WhatsAppButton


