import { useRef, memo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import Counter from '../components/Counter'
import BackgroundParticles from '../components/BackgroundParticles'

const allProducts = [
  { titleKey: 'products.moroccoRed', descKey: 'products.moroccoRedDesc', variant: 'pink', image: '/varieties/Morocco-Red.webp' },
  { titleKey: 'products.mexicanRed', descKey: 'products.mexicanRedDesc', variant: 'pink', image: '/varieties/mexican-red.webp' },
  { titleKey: 'products.malaysianRed', descKey: 'products.malaysianRedDesc', variant: 'pink', image: '/varieties/malaysian-red.jpg' },
  { titleKey: 'products.jumboRed', descKey: 'products.jumboRedDesc', variant: 'pink', image: '/varieties/jumbo-red.jpg' },
  { titleKey: 'products.israelianYellow', descKey: 'products.israelianYellowDesc', variant: 'pink', image: '/varieties/israelian-yellow.png' },
  { titleKey: 'products.americanBeauty', descKey: 'products.americanBeautyDesc', variant: 'pink', image: '/varieties/american-beauty.jpg' },
  { titleKey: 'products.cVariety', descKey: 'products.cVarietyDesc', variant: 'pink', image: '/varieties/c-variety.jpg' },
  { titleKey: 'products.dragonJam', descKey: 'products.dragonJamDesc', variant: 'pink', image: '/varieties/dragon-jam.jpg' },
  { titleKey: 'products.dragonHalva', descKey: 'products.dragonHalvaDesc', variant: 'pink', image: '/varieties/dragon-halva.jpg' },
  { titleKey: 'products.dragonChips', descKey: 'products.dragonChipsDesc', variant: 'pink', image: '/varieties/Dragon-Chips.png' },
]

// Memoized carousel card to prevent re-renders
const CarouselCard = memo(({ product, t }) => (
  <div className="w-[280px] sm:w-[400px] group flex-shrink-0">
    <div className="relative h-[400px] sm:h-[500px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-cream-dark transition-all duration-500 hover:shadow-glow-lg shadow-xl">
      <img
        src={product.image}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        alt={t(product.titleKey)}
        width={400}
        height={500}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dragon-green via-dragon-green/20 to-transparent p-6 sm:p-8 flex flex-col justify-end z-10">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
          {t(product.titleKey)}
        </h3>
        <p className="text-white/80 text-xs sm:text-sm line-clamp-2 mb-4">{t(product.descKey)}</p>
        <Link
          to="/products"
          state={{ fromHome: true, productId: product.titleKey, product }}
          className="inline-flex items-center gap-2 text-dragon-pink-light font-bold text-sm group-hover:gap-3 transition-all"
        >
          {t('process.learnMore')}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
))

export default function Home() {
  const { t, i18n } = useTranslation()
  const isTamil = i18n.language === 'ta'
  const heroRef = useRef(null)

  return (
    <div>
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-dragon-green-dark contain-paint"
      >
        {/* Elite Cinematic Background — matching Video Tour style */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dragon-green-dark" />
          <img 
            src="/varieties/mexican-red.webp" 
            alt="Farm Sunrise" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-50 will-change-transform"
            width={1920}
            height={1080}
            style={{ animation: 'breathZoom 20s ease-in-out infinite alternate' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dragon-green-dark via-dragon-green-dark/40 to-dragon-green-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(5,11,7,0.8)_100%)]" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-dragon-pink/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-cream/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-dragon-pink-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-dragon-pink-light font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
            {t('home.brand')}
          </p>
          <h1
            className={`${isTamil ? 'font-sans text-3xl sm:text-4xl lg:text-6xl leading-[1.3]' : 'font-serif text-4xl sm:text-6xl lg:text-7xl'} font-bold text-white mb-6 animate-scale-up px-2 md:px-0`}
            style={{ animationDelay: '100ms' }}
          >
            {t('home.heroTitle')}
            <span className="block gradient-text mt-2">{t('home.heroSubtitle')}</span>
          </h1>
          <p className={`${isTamil ? 'text-base sm:text-xl leading-[1.8]' : 'text-lg sm:text-xl leading-relaxed'} text-cream-dark/90 max-w-2xl mx-auto mb-10 px-4 md:px-0 animate-fade-in-up`} style={{ animationDelay: '200ms' }}>
            {t('home.heroDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link
              to="/products"
              className="group px-8 py-4 bg-dragon-pink hover:bg-dragon-pink-light text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-lg shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10">{t('home.exploreProducts')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 glass text-white font-semibold rounded-full border-2 border-white/50 transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/70"
            >
              {t('home.ourStory')}
            </Link>
          </div>
        </div>
      </section>

      {/* Glassmorphic Stats Row */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8 contain-paint">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] p-8 sm:p-12 shadow-2xl overflow-hidden relative group bg-gradient-to-r from-white/85 via-cream/80 to-white/85 backdrop-blur-md border border-cream-dark/70">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-dragon-pink/8 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-dragon-pink/12" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-dragon-green/8 rounded-full blur-3xl -ml-32 -mb-32 transition-colors group-hover:bg-dragon-green/12" />
            <BackgroundParticles count={8} color="bg-dragon-pink" />
            <BackgroundParticles count={6} color="bg-dragon-green" />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { key: 'acres', value: 10, suffix: '+', label: t('about.stats.acres') },
                { key: 'plants', value: 20000, suffix: '+', label: t('about.stats.trees') },
                { key: 'organic', value: 100, suffix: '%', label: t('about.stats.organicTitle') },
                { key: 'customers', value: 5000, suffix: '+', label: t('about.happyCustomers') },
              ].map((stat, index) => (
                <ScrollReveal key={stat.key} delay={index * 0.1}>
                  <div className="text-center group/item">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl sm:text-5xl font-serif font-bold text-dragon-green-dark mb-2 group-hover/item:text-dragon-pink transition-colors duration-300">
                        <Counter value={stat.value} suffix={stat.suffix} delay={index * 0.1} />
                      </div>
                      <div className="w-8 h-1 bg-gradient-to-r from-dragon-green via-dragon-pink to-dragon-green-light rounded-full mb-3 transform origin-left group-hover/item:scale-x-150 transition-transform duration-500" />
                      <p className="text-dragon-green/60 font-semibold tracking-widest uppercase text-[11px] sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-cream via-cream/50 to-white relative overflow-hidden contain-paint">
        {/* Elite Animated Background Elements */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-dragon-pink/5 rounded-full blur-[100px] pointer-events-none animate-float" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-dragon-green/5 rounded-full blur-[120px] pointer-events-none animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16 relative">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-dragon-pink/5 border border-dragon-pink/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-dragon-pink animate-pulse mr-2" />
                <p className="text-dragon-pink font-semibold tracking-widest uppercase text-xs">{t('home.healthBenefits.subtitle')}</p>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-dragon-green mb-6">
                {t('home.healthBenefits.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                {t('home.healthBenefits.desc')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 cursor-default">
            {[
              { id: 'antioxidants', icon: '✨', title: t('home.healthBenefits.antioxidants'), desc: t('home.healthBenefits.antioxidantsDesc'), color: 'dragon-pink', gradient: 'from-dragon-pink/20 to-transparent' },
              { id: 'immunity', icon: '🛡️', title: t('home.healthBenefits.immunity'), desc: t('home.healthBenefits.immunityDesc'), color: 'dragon-green', gradient: 'from-dragon-green/20 to-transparent' },
              { id: 'fiber', icon: '🌿', title: t('home.healthBenefits.fiber'), desc: t('home.healthBenefits.fiberDesc'), color: 'dragon-pink', gradient: 'from-dragon-pink/20 to-transparent' },
              { id: 'heart', icon: '❤️', title: t('home.healthBenefits.heart'), desc: t('home.healthBenefits.heartDesc'), color: 'dragon-green', gradient: 'from-dragon-green/20 to-transparent' }
            ].map((benefit, index) => (
              <ScrollReveal key={benefit.id} delay={index * 0.1}>
                <div className="relative group h-full">
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${benefit.gradient} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                  <div className={`relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-md border border-white hover:border-${benefit.color}/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col overflow-hidden`}>
                    {/* Decorative Top Gradient */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      <div className={`absolute inset-0 bg-${benefit.color}/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`relative w-16 h-16 rounded-2xl bg-white border border-cream-dark shadow-sm flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10`}>
                        {benefit.icon}
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-2xl font-bold text-dragon-green mb-4 group-hover:text-dragon-pink transition-colors relative z-10">{benefit.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed flex-grow relative z-10">{benefit.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden contain-paint">
        {/* Subtle mesh pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230f2d1a\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 w-full relative">
              <ScrollReveal>
                {/* Image Glow Backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-br from-dragon-green/30 to-dragon-pink/30 rounded-[3rem] blur-2xl opacity-50 animate-pulse-glow" />
                
                <div className="relative aspect-square sm:aspect-[4/4] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl group border-[8px] border-white z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-dragon-green-dark/60 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                  <img 
                    src="/varieties/malaysian-red.jpg" 
                    alt="Sustainable Farming" 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
                    width={800}
                    height={600}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 z-20 w-24 h-24 bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center animate-float border border-white">
                    <div className="text-center">
                      <span className="block text-xl font-bold text-dragon-green leading-none">100%</span>
                      <span className="block text-[10px] uppercase tracking-wider text-dragon-pink font-semibold mt-1">{t('home.whyChooseUs.organic')}</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 right-8 z-20 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 transform group-hover:translate-y-[-10px] transition-transform duration-500 shadow-xl hidden sm:block">
                    <p className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-dragon-pink animate-pulse" />
                      {t('home.brand')}
                    </p>
                    <p className="text-white/90 text-sm leading-relaxed">{t('home.whyChooseUs.desc')}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="flex-1">
              <ScrollReveal>
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-dragon-green/5 border border-dragon-green/10 backdrop-blur-sm">
                  <p className="text-dragon-green font-semibold tracking-widest uppercase text-xs">{t('home.whyChooseUs.subtitle')}</p>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-dragon-green mb-10 leading-tight">
                  {t('home.whyChooseUs.title')}
                </h2>
                
                <div className="space-y-6">
                  {[
                    { id: 'organic', icon: '🌱', title: t('home.whyChooseUs.organic'), desc: t('home.whyChooseUs.organicDesc') },
                    { id: 'sustainable', icon: '💧', title: t('home.whyChooseUs.sustainable'), desc: t('home.whyChooseUs.sustainableDesc') },
                    { id: 'handPicked', icon: '👩‍🌾', title: t('home.whyChooseUs.handPicked'), desc: t('home.whyChooseUs.handPickedDesc') },
                    { id: 'farmToHome', icon: '🚚', title: t('home.whyChooseUs.farmToHome'), desc: t('home.whyChooseUs.farmToHomeDesc') }
                  ].map((usp, index) => (
                    <div key={usp.id} className="relative p-6 rounded-2xl bg-white border border-cream-dark/50 hover:border-dragon-pink/30 hover:shadow-xl transition-all duration-500 group overflow-hidden">
                      {/* Hover Gradient Sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-dragon-pink/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-700" />
                      
                      <div className="relative flex gap-6 items-start z-10">
                        <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-dragon-pink group-hover:text-white transition-colors duration-500 shadow-sm">
                          {usp.icon}
                        </div>
                        <div>
                          <h4 className="font-serif text-xl font-bold text-dragon-green mb-2 group-hover:text-dragon-pink transition-colors">{usp.title}</h4>
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{usp.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-cream to-white overflow-hidden contain-paint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-dragon-pink font-medium tracking-widest uppercase text-sm mb-2">{t('home.ourSpecialties')}</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dragon-green">
                {t('home.featuredVarieties')} & Products
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Discover our full range of premium dragon fruit varieties and handcrafted value-added products.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Automatic Card-by-Card Showcase — CSS animation instead of framer-motion */}
        <div className="relative">
          <div
            className="flex"
            style={{
              width: 'max-content',
              animation: 'carouselScroll 40s linear infinite',
            }}
          >
            {/* Double the list for seamless infinite scroll */}
            {[0, 1].map((listIdx) => (
              <div key={listIdx} className="flex gap-4 sm:gap-8 pr-4 sm:pr-8 pl-4 sm:pl-0">
                {allProducts.map((product, index) => (
                  <CarouselCard
                    key={`${product.titleKey}-${listIdx}-${index}`}
                    product={product}
                    t={t}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-dragon-pink font-semibold hover:gap-4 transition-all duration-300 text-lg"
            >
              {t('home.viewAllProducts')}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>

         {/* Featured Recipe / How to Enjoy Section */}
      <section className="py-32 relative overflow-hidden bg-dragon-green-dark contain-paint">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/varieties/dragon-jam.jpg" 
            alt="How to Enjoy" 
            loading="lazy" 
            decoding="async" 
            className="w-full h-full object-cover opacity-30" 
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dragon-green-dark via-dragon-green-dark/80 to-transparent z-10" />
          {/* Animated Glow Blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dragon-pink/20 rounded-full blur-[100px] animate-pulse-glow z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-dragon-green-light/20 rounded-full blur-[120px] animate-float z-10" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Content Area */}
            <div className="flex-1 lg:max-w-xl">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-dragon-pink/30 bg-dragon-pink/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-dragon-pink animate-pulse" />
                  <p className="text-dragon-pink-light font-bold tracking-widest uppercase text-xs">{t('home.recipe.subtitle')}</p>
                </div>
                
                <h2 className="font-serif text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {t('home.recipe.title')}
                </h2>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-10 shadow-2xl relative overflow-hidden group hover:border-dragon-pink/30 transition-colors duration-500">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-dragon-pink to-dragon-green-light" />
                  <h3 className="font-serif text-3xl font-bold text-dragon-pink-light mb-8">
                    {t('home.recipe.recipeName')}
                  </h3>
                  
                  <div className="space-y-6">
                    {['step1', 'step2', 'step3'].map((step, idx) => (
                      <div key={step} className="flex gap-6 group/step">
                        <div className="text-2xl font-serif font-bold text-white/20 group-hover/step:text-dragon-pink transition-colors duration-300 min-w-[2rem] pt-1">
                          0{idx + 1}
                        </div>
                        <p className="text-cream-dark/80 leading-relaxed text-lg group-hover/step:text-white transition-colors duration-300">
                          {t(`home.recipe.${step}`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Area - Interactive Bento/Card */}
            <div className="flex-1 w-full lg:w-auto relative hidden lg:block">
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-square max-w-lg mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  {/* Outer Glass Frame */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-[3rem] border-2 border-white/20 shadow-2xl" />
                  
                  {/* Inner Image Grid Layer */}
                  <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden border border-white/10">
                    <img 
                      src="/varieties/dragon-jam.jpg" 
                      alt="Dragon Fruit Bowl" 
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[2s] ease-out" 
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-dragon-pink/20 to-transparent opacity-60 mix-blend-overlay" />
                  </div>
                  
                  {/* Floating Enjoy Badge */}
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-dragon-green/90 backdrop-blur-md rounded-full border border-white/20 shadow-2xl flex items-center justify-center animate-float">
                    <p className="text-center">
                      <span className="block text-3xl mb-1">✨</span>
                      <span className="block font-serif italic text-dragon-pink-light font-bold">Enjoy!</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Mobile Visual */}
            <div className="lg:hidden w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/10 relative">
              <img 
                src="/varieties/dragon-jam.jpg" 
                alt="Dragon Fruit Bowl" 
                loading="lazy" 
                decoding="async" 
                className="w-full h-full object-cover" 
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Video Tour Teaser */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          {/* Animated Zooming Background */}
          <div className="absolute inset-0 bg-dragon-green-dark" />
          <img 
            src="/varieties/mexican-red.webp" 
            alt="Farm Sunrise" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-60 will-change-transform"
            width={1920}
            height={1080}
            style={{ animation: 'breathZoom 22s ease-in-out infinite alternate' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b07] via-dragon-green-dark/60 to-[#050b07]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050b07_100%)] opacity-80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dragon-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-dragon-pink"></span>
              </span>
              <span className="text-white font-medium text-sm tracking-widest uppercase">{t('home.videoTour.playText')}</span>
            </div>
            
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              {t('home.videoTour.title')}
            </h2>
            <p className="text-xl sm:text-2xl text-cream/80 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
              {t('home.videoTour.desc')}
            </p>
            
            {/* Shivalaiya Dragon Farm Tour Title */}
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8 drop-shadow-lg">
              Shivalaiya Dragon Farm Tour
            </h3>
            
            {/* YouTube Video Embed Container */}
            <div className="relative w-full max-w-4xl mx-auto group">
              {/* Green Glow Layer */}
              <div className="absolute -inset-4 bg-dragon-green/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="relative aspect-video rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/lXTEmgxDc9s"
                  title="Shivalaiya Dragon Farm Tour"
                  loading="lazy"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Farm Gallery (Masonry Grid) */}
      <section className="py-32 bg-[#050b07] relative overflow-hidden contain-paint">
        {/* Elite Ambient Glow */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-dragon-green/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-dragon-pink/10 rounded-full blur-[120px] pointer-events-none" />
        
        <BackgroundParticles count={20} color="bg-dragon-pink" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-dragon-pink/30 rounded-full bg-dragon-pink/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-dragon-pink" />
                  <p className="text-dragon-pink-light font-medium tracking-widest uppercase text-xs">{t('home.gallery.subtitle')}</p>
                </div>
                <h2 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6">
                  {t('home.gallery.title')}
                </h2>
                <p className="text-cream-dark/70 text-lg sm:text-xl font-light leading-relaxed">
                  {t('home.gallery.desc')}
                </p>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={0.2}>
              <Link to="/gallery" className="group hidden md:inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all duration-300 hover:border-dragon-pink/50">
                View Full Gallery
                <span className="w-8 h-8 rounded-full bg-dragon-pink flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 pb-20">
            {[
              { src: "/gallery/gallery 1.webp", aspect: "aspect-[3/4]" },
              { src: "/gallery/gallery 2.jpg", aspect: "aspect-square" },
              { src: "/gallery/gallery 3.jpg", aspect: "aspect-[4/5]" },
              { src: "/gallery/gallery 4.jpg", aspect: "aspect-[3/4]" },
              { src: "/gallery/gallery 5.jpg", aspect: "aspect-square" },
              { src: "/gallery/gallery 6.jpg", aspect: "aspect-[4/5]" },
              { src: "/gallery/gallery 7.jpg", aspect: "aspect-[3/4]" },
              { src: "/gallery/gallery 8.jpg", aspect: "aspect-square" },
              { src: "/gallery/gallery 9.jpg", aspect: "aspect-[4/5]" }
            ].map((img, idx) => (
              <ScrollReveal key={idx} delay={(idx % 4) * 0.1}>
                <div className={`relative ${img.aspect} rounded-3xl overflow-hidden group cursor-pointer break-inside-avoid border border-white/10 shadow-2xl`}>
                  {/* Glass Shimmer Effect - Optimized */}
                  <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent z-30 pointer-events-none" />
                  
                  <div className="absolute inset-0 bg-dragon-green-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  
                  <img 
                    src={img.src} 
                    alt={`Farm Gallery Image ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 will-change-transform"
                    width={600}
                    height={400}
                  />
                  
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  
                  {/* Hover Icon */}
                  <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Mobile View All Button */}
          <div className="text-center md:hidden mt-8 relative z-30">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 bg-dragon-pink text-white font-medium rounded-full shadow-glow">
              View Full Gallery
            </Link>
          </div>

          {/* Fade out bottom */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050b07] to-transparent z-20 pointer-events-none" />
        </div>
      </section>

      {/* Moonlight Bloom Section */}
      <section className="relative py-32 bg-[#050b07] overflow-hidden contain-paint">
        {/* Animated Stars/Particles Simulation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute top-20 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/50 rounded-full blur-sm" />
        </div>

        {/* Moonlight Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(circle_at_50%_-20%,_#ffffff20_0%,_transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-dragon-pink-light text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dragon-pink animate-pulse" />
                  {t('process.nightBloomSub')}
                </div>
                <h2 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
                  <span className="text-dragon-pink-light italic">{t('process.nightBloomTitle')}</span>
                </h2>
                <div className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-dragon-pink/50 to-transparent" />
                  <p className="text-xl text-cream-dark/80 italic leading-relaxed mb-8 pl-4">
                    "{t('process.nightBloomPoem')}"
                  </p>
                </div>
                <Link
                  to="/process"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
                >
                  {t('process.learnMore')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </ScrollReveal>
            </div>

            <div className="flex-1 relative">
              <ScrollReveal delay={0.2}>
                <div className="relative group">
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-dragon-pink/20 to-dragon-green/20 rounded-[2rem] blur-2xl group-hover:opacity-100 transition-opacity duration-500 opacity-60" />

                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <img
                      src="/varieties/american-beauty.jpg"
                      alt="Moonlight Bloom"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover grayscale-[0.3] brightness-75 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                      width={600}
                      height={750}
                    />

                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 z-20 p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white font-bold text-lg mb-1">{t('process.nightBloomTitle')}</p>
                      <p className="text-white/60 text-sm">{t('process.bloomingTech')}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-dragon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dragon-green/10 rounded-full blur-3xl animate-float" />
            </div>
          </div>
        </div>
      </section>


      <section className="relative py-24 bg-gradient-to-br from-dragon-green via-dragon-green-light to-dragon-green-dark overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-dragon-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('home.readyToTaste')}
            </h2>
            <p className="text-xl text-cream-dark/90 mb-10 leading-relaxed">
              {t('home.ctaDesc')}
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-dragon-pink hover:bg-dragon-pink-light text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-glow hover:shadow-glow-lg relative overflow-hidden"
            >
              <span className="relative z-10">{t('home.getInTouch')}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
