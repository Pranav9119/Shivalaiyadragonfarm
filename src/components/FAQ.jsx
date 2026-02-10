import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'
import FAQItem from './FAQItem'

const FAQ = () => {
    const { t } = useTranslation()
    const [activeIndex, setActiveIndex] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')

    const categories = [
        {
            name: t('contact.faq.categories.all'),
            id: 'All',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>
            )
        },
        {
            name: t('contact.faq.categories.general'),
            id: 'General',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            name: t('contact.faq.categories.farming'),
            id: 'Farming',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 17v-6.5L12 7" />
                </svg>
            )
        },
        {
            name: t('contact.faq.categories.ordering'),
            id: 'Ordering',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        }
    ]

    const faqs = [
        {
            id: 'q1',
            category: 'General',
            question: t('contact.faq.q1'),
            answer: t('contact.faq.a1')
        },
        {
            id: 'q2',
            category: 'General',
            question: t('contact.faq.q2'),
            answer: t('contact.faq.a2')
        },
        {
            id: 'q3',
            category: 'Farming',
            question: t('contact.faq.q3'),
            answer: t('contact.faq.a3')
        },
        {
            id: 'q4',
            category: 'Ordering',
            question: t('contact.faq.q4'),
            answer: t('contact.faq.a4')
        },
        {
            id: 'q5',
            category: 'Ordering',
            question: t('contact.faq.q5'),
            answer: t('contact.faq.a5')
        }
    ]

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = activeCategory === 'All' || faq.category === activeCategory
        return matchesSearch && matchesCategory
    })

    return (
        <section className="relative py-24 bg-cream/20 overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-dragon-green/5 blur-[120px] rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-dragon-pink/5 blur-[100px] rounded-full translate-y-1/2" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <p className="text-dragon-pink font-medium tracking-widest uppercase text-sm mb-4">
                            {t('contact.faq.title')}
                        </p>
                        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-dragon-green mb-10">
                            {t('contact.faq.subtitle')}
                        </h2>

                        {/* Search Bar with Glow */}
                        <div className="relative max-w-xl mx-auto mb-12 group">
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-dragon-pink/20 via-dragon-pink/10 to-dragon-pink/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"
                            />
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={t('contact.faq.searchPlaceholder')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-6 py-5 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl-soft focus:ring-0 outline-none transition-all pl-14 text-dragon-green text-lg placeholder:text-gray-400"
                                />
                                <svg className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-dragon-pink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveCategory(cat.id)
                                        setActiveIndex(null)
                                    }}
                                    className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-500 ${activeCategory === cat.id
                                        ? 'text-white'
                                        : 'text-dragon-green hover:text-dragon-pink hover:bg-white/40'
                                        }`}
                                >
                                    {activeCategory === cat.id && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-dragon-pink rounded-2xl shadow-glow shadow-dragon-pink/30"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat.icon}</span>
                                    <span className="relative z-10">{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                <div className="space-y-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <motion.div
                                    key={faq.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <FAQItem
                                        faq={faq}
                                        isOpen={activeIndex === index}
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-24 bg-white/30 backdrop-blur-xl rounded-[2.5rem] border border-white/50 border-dashed"
                            >
                                <div className="text-5xl mb-6 opacity-30">🔍</div>
                                <p className="text-xl text-gray-400 font-medium italic">
                                    {t('contact.faq.noResults', { query: searchTerm })}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default FAQ
