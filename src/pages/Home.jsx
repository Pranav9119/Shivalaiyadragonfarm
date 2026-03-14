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
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-dragon-green-dark"
      >
        {/* Elite Dynamic Mesh Gradient Background — CSS animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-dragon-pink/15 rounded-full blur-[80px] transform-gpu"
            style={{ animation: 'blobDrift1 25s linear infinite' }}
          />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-dragon-green-light/20 rounded-full blur-[80px] transform-gpu"
            style={{ animation: 'blobDrift2 30s linear infinite' }}
          />
          <div
            className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-dragon-pink-light/10 rounded-full blur-[60px] transform-gpu"
            style={{ animation: 'blobDrift3 35s linear infinite' }}
          />
          <div
            className="absolute bottom-[20%] left-[20%] w-[45%] h-[45%] bg-cream/5 rounded-full blur-[70px] transform-gpu"
            style={{ animation: 'blobDrift4 28s linear infinite' }}
          />
        </div>

        {/* Overlay Gradients for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_rgba(15,45,26,0.5)_100%)] px-4" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

        {/* Floating decorative elements — static CSS animations, no parallax */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-dragon-pink/20 rounded-full blur-2xl animate-float"
        />
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-cream/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-dragon-pink-light/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '2s' }}
        />

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

        {/* Scroll Indicator — CSS animation */}
        <div className="absolute bottom-24 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/60 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div
              className="w-1.5 h-1.5 bg-dragon-pink rounded-full"
              style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
            />
          </div>
        </div>
      </section>

      {/* Glassmorphic Stats Row */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] p-8 sm:p-12 shadow-2xl overflow-hidden relative group bg-gradient-to-r from-white/85 via-cream/80 to-white/85 backdrop-blur-xl border border-cream-dark/70">
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
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-dragon-pink/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-dragon-green/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-dragon-pink font-medium tracking-widest uppercase text-sm mb-2">{t('home.healthBenefits.subtitle')}</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dragon-green mb-4">
                {t('home.healthBenefits.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                {t('home.healthBenefits.desc')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 cursor-default">
            {[
              { id: 'antioxidants', icon: '✨', title: t('home.healthBenefits.antioxidants'), desc: t('home.healthBenefits.antioxidantsDesc'), color: 'dragon-pink' },
              { id: 'immunity', icon: '🛡️', title: t('home.healthBenefits.immunity'), desc: t('home.healthBenefits.immunityDesc'), color: 'dragon-green' },
              { id: 'fiber', icon: '🌿', title: t('home.healthBenefits.fiber'), desc: t('home.healthBenefits.fiberDesc'), color: 'dragon-pink' },
              { id: 'heart', icon: '❤️', title: t('home.healthBenefits.heart'), desc: t('home.healthBenefits.heartDesc'), color: 'dragon-green' }
            ].map((benefit, index) => (
              <ScrollReveal key={benefit.id} delay={index * 0.1}>
                <div className={`p-8 rounded-3xl bg-white border border-cream-dark/50 hover:border-${benefit.color}/30 shadow-xl hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col`}>
                  <div className={`w-14 h-14 rounded-2xl bg-${benefit.color}/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-dragon-green mb-3 group-hover:text-dragon-pink transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{benefit.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <ScrollReveal>
                <div className="relative aspect-square sm:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-cream-dark">
                  <div className="absolute inset-0 bg-gradient-to-tr from-dragon-green/40 to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                  <img 
                    src="/varieties/malaysian-red.jpg" 
                    alt="Sustainable Farming" 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                  <div className="absolute bottom-8 left-8 right-8 z-20 p-6 glass-dark rounded-2xl border border-white/10 hidden sm:block delay-100">
                    <p className="text-white font-bold text-lg mb-1">{t('home.brand')}</p>
                    <p className="text-white/80 text-sm">{t('home.whyChooseUs.desc')}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="flex-1">
              <ScrollReveal>
                <p className="text-dragon-pink font-medium tracking-widest uppercase text-sm mb-2">{t('home.whyChooseUs.subtitle')}</p>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dragon-green mb-8">
                  {t('home.whyChooseUs.title')}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { id: 'organic', icon: '🌱', title: t('home.whyChooseUs.organic'), desc: t('home.whyChooseUs.organicDesc') },
                    { id: 'sustainable', icon: '💧', title: t('home.whyChooseUs.sustainable'), desc: t('home.whyChooseUs.sustainableDesc') },
                    { id: 'handPicked', icon: '👩‍🌾', title: t('home.whyChooseUs.handPicked'), desc: t('home.whyChooseUs.handPickedDesc') },
                    { id: 'farmToHome', icon: '🚚', title: t('home.whyChooseUs.farmToHome'), desc: t('home.whyChooseUs.farmToHomeDesc') }
                  ].map((usp, index) => (
                    <div key={usp.id} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-dragon-pink/10 transition-colors">
                        {usp.icon}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-dragon-green mb-1 group-hover:text-dragon-pink transition-colors">{usp.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{usp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-cream to-white overflow-hidden">
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

      {/* Featured Recipe Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/30 z-0 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <ScrollReveal>
                <div className="relative aspect-square sm:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-cream-dark">
                  <div className="absolute inset-0 bg-gradient-to-tr from-dragon-pink/30 to-transparent z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-700" />
                  <img 
                    src="/varieties/dragon-jam.jpg" 
                    alt="Dragon Fruit Bowl" 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center z-20 animate-float shadow-glow">
                    <span className="text-3xl">🥣</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="flex-1 order-1 lg:order-2">
              <ScrollReveal delay={0.2}>
                <p className="text-dragon-pink font-medium tracking-widest uppercase text-sm mb-2">{t('home.recipe.subtitle')}</p>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dragon-green mb-8">
                  {t('home.recipe.title')}
                </h2>
                
                <div className="bg-cream/40 rounded-3xl p-8 sm:p-10 border border-cream-dark/50 shadow-sm mb-8">
                  <h3 className="font-serif text-2xl font-bold text-dragon-green mb-6 border-b border-dragon-pink/20 pb-4">
                    {t('home.recipe.recipeName')}
                  </h3>
                  <ul className="space-y-6">
                    {['step1', 'step2', 'step3'].map((step, idx) => (
                      <li key={step} className="flex gap-4">
                        <span className="text-dragon-pink font-bold text-lg">{idx + 1}.</span>
                        <p className="text-gray-700 leading-relaxed">{t(`home.recipe.${step}`)}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-dragon-pink/20">
                    <p className="text-dragon-green-dark font-semibold italic text-lg text-center">
                      ✨ {t('home.recipe.enjoy')} ✨
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour Teaser */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/varieties/mexican-red.webp" 
            alt="Farm Sunrise" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dragon-green-dark/80 via-black/40 to-dragon-green-dark/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {t('home.videoTour.title')}
            </h2>
            <p className="text-xl sm:text-2xl text-cream/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {t('home.videoTour.desc')}
            </p>
            
            {/* Elegant Play Button */}
            <div className="relative inline-flex items-center justify-center group cursor-pointer">
              <div 
                className="absolute inset-0 bg-dragon-pink rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animation: 'whatsappPulse 2.5s infinite' }}
              />
              <div className="relative w-24 h-24 bg-white/10 backdrop-blur-md border-2 border-white/50 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 group-hover:scale-105 transform">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
              </div>
            </div>
            <p className="mt-6 text-dragon-pink-light tracking-widest uppercase text-sm font-semibold opacity-80">
              {t('home.videoTour.playText')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Farm Gallery (Masonry Grid) */}
      <section className="py-24 bg-dragon-green-dark relative overflow-hidden">
        <BackgroundParticles count={15} color="bg-dragon-pink" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="text-dragon-pink font-medium tracking-widest uppercase text-sm mb-2">{t('home.gallery.subtitle')}</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-md">
                {t('home.gallery.title')}
              </h2>
              <p className="text-cream-dark/80 max-w-2xl mx-auto text-lg drop-shadow">
                {t('home.gallery.desc')}
              </p>
            </ScrollReveal>
          </div>

          <div className="columns-2 md:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6 pb-28">
            {[
              "/varieties/american-beauty.jpg",
              "/varieties/c-variety.jpg",
              "/varieties/dragon-halva.jpg",
              "/varieties/Morocco-Red.webp",
              "/varieties/jumbo-red.jpg",
              "/varieties/malaysian-red.jpg",
              "/varieties/mexican-red.webp"
            ].map((imgSrc, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden group cursor-pointer break-inside-avoid shadow-xl border border-white/10">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  <img 
                    src={imgSrc} 
                    alt={`Farm Gallery Image ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale-[0.4] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dragon-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 mix-blend-overlay" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050b07] to-transparent z-20 pointer-events-none" />
        </div>
      </section>

      {/* Moonlight Bloom Section */}
      <section className="relative py-32 bg-[#050b07] overflow-hidden">
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
