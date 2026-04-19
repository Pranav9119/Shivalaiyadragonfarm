import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function BulkEstimator({ products }) {
    const { t } = useTranslation()
    const [quantity, setQuantity] = useState(10)
    const [selectedProduct, setSelectedProduct] = useState(products[0]?.titleKey || '')
    const [estimatedDippers, setEstimatedDippers] = useState(0)

    const DIPPER_WEIGHT = 20 // 20kg per dipper

    useEffect(() => {
        setEstimatedDippers(Math.ceil(quantity / DIPPER_WEIGHT))
    }, [quantity])

    return (
        <div className="bg-white rounded-3xl shadow-2xl-soft overflow-hidden border border-cream-dark/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side: Controls */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-white to-cream/30">
                    <div className="mb-8">
                        <h3 className="font-serif text-3xl font-bold text-dragon-green mb-2">
                            {t('products.bulkEstimatorTitle')}
                        </h3>
                        <p className="text-gray-600">
                            {t('products.bulkEstimatorDesc')}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Variety Selection */}
                        <div>
                            <label className="block text-sm font-bold text-dragon-green uppercase tracking-wider mb-3">
                                {t('products.selectVariety')}
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedProduct}
                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                    className="w-full bg-white border-2 border-cream-dark/50 rounded-xl px-4 py-4 text-dragon-green font-medium focus:border-dragon-pink outline-none appearance-none transition-colors cursor-pointer"
                                >
                                    {products.map((p) => (
                                        <option key={p.titleKey} value={p.titleKey}>
                                            {t(p.titleKey)}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-dragon-green">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Quantity Input */}
                        <div>
                            <div className="flex justify-between items-end mb-3">
                                <label className="block text-sm font-bold text-dragon-green uppercase tracking-wider">
                                    {t('products.enterQuantity')}
                                </label>
                                <span className="text-2xl font-serif font-bold text-dragon-pink">
                                    {quantity} <span className="text-sm font-sans text-gray-400">kg</span>
                                </span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="5000"
                                step="10"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="w-full h-2 bg-cream-dark rounded-lg appearance-none cursor-pointer accent-dragon-pink"
                            />
                            <div className="flex justify-between mt-2 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                <span>10kg</span>
                                <span>2500kg</span>
                                <span>5000kg</span>
                            </div>
                            <p className="mt-4 text-xs text-dragon-pink font-bold flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                {t('products.minOrderNote')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Result */}
                <div className="p-8 md:p-12 bg-dragon-green flex flex-col justify-center items-center text-center relative overflow-hidden">
                    {/* Animated Background Decoration */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-dragon-pink/10 rounded-full blur-3xl" />

                    <div className="relative z-10 w-full">
                        <p className="text-cream-dark/70 font-bold uppercase tracking-widest text-sm mb-4">
                            {t('products.estimatedBoxes')}
                        </p>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={estimatedDippers}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-7xl md:text-8xl font-serif font-bold text-white mb-2"
                            >
                                {estimatedDippers}
                            </motion.div>
                        </AnimatePresence>

                        <p className="text-white font-medium mb-8">
                            {t('products.weightPerBox')}
                        </p>

                        <a
                            href={`https://wa.me/918675522223?text=${encodeURIComponent(`${t('products.bulkEstimatorTitle')}: ${quantity}kg of ${t(selectedProduct)}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-dragon-green hover:bg-dragon-pink hover:text-white font-bold rounded-2xl transition-all shadow-xl group"
                        >
                            {t('products.getQuote')}
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
