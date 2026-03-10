import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'
import ScrollReveal from '../components/ScrollReveal'
import BackgroundParticles from '../components/BackgroundParticles'

export default function FAQPage() {
    const { t } = useTranslation()

    return (
        <div className="pt-20">
            <section className="relative py-20 bg-gradient-to-br from-dragon-green-dark via-dragon-green to-dragon-green-light overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-dragon-pink/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-dragon-pink-light font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
                        {t('contact.faq.title')}
                    </p>
                    <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-6 animate-scale-up">
                        {t('contact.faq.subtitle')}
                    </h1>
                    <p className="text-xl text-cream-dark/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        {t('contact.contactDesc')}
                    </p>
                </div>
            </section>
            <section className="relative">
                <BackgroundParticles density={30} color="pink" />
                <FAQ />
            </section>

            {/* Still have questions CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-dragon-pink/30 to-transparent" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-dragon-pink/10 text-dragon-pink text-3xl mb-8 animate-float">
                        💬
                    </div>
                    <ScrollReveal>
                        <h2 className="font-serif text-4xl font-bold text-dragon-green mb-6">
                            {t('contact.faq.stillHaveQuestions')}
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                            {t('contact.faq.ctaDesc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="group px-8 py-4 bg-dragon-pink hover:bg-dragon-pink-light text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-lg shadow-xl relative overflow-hidden flex items-center justify-center gap-2"
                            >
                                <span className="relative z-10">{t('contact.faq.contactSupport')}</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </Link>
                            <a
                                href="https://wa.me/918675522223"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 glass text-dragon-green font-semibold rounded-full border-2 border-dragon-green/50 transition-all duration-300 hover:scale-105 hover:bg-dragon-green/5 flex items-center justify-center gap-2"
                            >
                                {t('contact.faq.chatWhatsApp')}
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
