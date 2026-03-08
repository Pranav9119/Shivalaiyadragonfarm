import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import ProductCard from '../components/ProductCard'
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

export default function Home() {
  const { t, i18n } = useTranslation()
  const isTamil = i18n.language === 'ta'
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Parallax values for scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])

  // 3D Tilt values for mouse
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Subtler rotation for an elite feel
  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [10, -10]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-10, 10]), { stiffness: 100, damping: 30 })

  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="perspective-1000">
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-dragon-green-dark"
      >
        {/* Elite Dynamic Mesh Gradient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-dragon-pink/15 rounded-full blur-[80px] transform-gpu"
            style={{ willChange: 'transform' }}
          />
          <motion.div
            animate={{
              x: [0, -150, 150, 0],
              y: [0, 150, -150, 0],
              scale: [1, 0.8, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-dragon-green-light/20 rounded-full blur-[80px] transform-gpu"
            style={{ willChange: 'transform' }}
          />
          <motion.div
            animate={{
              x: [0, 200, -100, 0],
              y: [0, 100, -200, 0],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-dragon-pink-light/10 rounded-full blur-[60px] transform-gpu"
            style={{ willChange: 'transform' }}
          />
          <motion.div
            animate={{
              x: [0, -100, 100, 0],
              y: [0, -200, 200, 0],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] left-[20%] w-[45%] h-[45%] bg-cream/5 rounded-full blur-[70px] transform-gpu"
            style={{ willChange: 'transform' }}
          />
        </div>

        {/* Overlay Gradients for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_rgba(15,45,26,0.5)_100%)] px-4" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

        {/* Floating decorative elements with parallax */}
        <motion.div
          style={{ animationDelay: '0s', y: y1 }}
          className="absolute top-20 left-10 w-20 h-20 bg-dragon-pink/20 rounded-full blur-2xl animate-float"
        />
        <motion.div
          style={{ animationDelay: '1s', y: y2 }}
          className="absolute top-40 right-20 w-32 h-32 bg-cream/20 rounded-full blur-3xl animate-float"
        />
        <motion.div
          style={{ animationDelay: '2s', y: y3 }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-dragon-pink-light/20 rounded-full blur-2xl animate-float"
        />

        <motion.div
          style={{
            rotateX,
            rotateY,
            perspective: 1000,
          }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-dragon-pink-light font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
            {t('home.brand')}
          </p>
          <h1
            className={`${isTamil ? 'font-sans text-4xl sm:text-5xl lg:text-6xl leading-[1.3]' : 'font-serif text-5xl sm:text-6xl lg:text-7xl'} font-bold text-white mb-6 animate-scale-up`}
            style={{ animationDelay: '100ms' }}
          >
            {t('home.heroTitle')}
            <span className="block gradient-text mt-2">{t('home.heroSubtitle')}</span>
          </h1>
          <p className={`${isTamil ? 'text-lg sm:text-xl leading-[1.8]' : 'text-xl leading-relaxed'} text-cream-dark/90 max-w-2xl mx-auto mb-10 animate-fade-in-up`} style={{ animationDelay: '200ms' }}>
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
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-dragon-pink rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Glassmorphic Stats Row */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass border border-white/50 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl overflow-hidden relative group">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-dragon-pink/5 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-dragon-pink/10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-dragon-green/5 rounded-full blur-3xl -ml-32 -mb-32 transition-colors group-hover:bg-dragon-green/10" />
            <BackgroundParticles count={15} color="bg-dragon-pink" />
            <BackgroundParticles count={10} color="bg-dragon-green" />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { key: 'acres', value: 10, suffix: '+', label: t('about.stats.acres') },
                { key: 'plants', value: 5000, suffix: '+', label: t('about.stats.trees') },
                { key: 'organic', value: 100, suffix: '%', label: t('about.stats.organicTitle') },
                { key: 'customers', value: 500, suffix: '+', label: t('about.happyCustomers') },
              ].map((stat, index) => (
                <ScrollReveal key={stat.key} delay={index * 0.1}>
                  <div className="text-center group/item">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl sm:text-5xl font-serif font-bold text-dragon-green mb-2 group-hover/item:text-dragon-pink transition-colors duration-300">
                        <Counter value={stat.value} suffix={stat.suffix} delay={index * 0.1} />
                      </div>
                      <div className="w-8 h-1 bg-gradient-to-r from-dragon-pink to-dragon-pink-light rounded-full mb-3 transform origin-left group-hover/item:scale-x-150 transition-transform duration-500" />
                      <p className="text-dragon-green/70 font-medium tracking-wide uppercase text-xs sm:text-sm">
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

        {/* Automatic Card-by-Card Showcase */}
        <div className="relative">
          <motion.div
            className="flex gap-8 px-4"
            animate={{
              x: [0, -200 * allProducts.length],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: 'max-content' }}
          >
            {/* Double the list for seamless infinite scroll */}
            {[...allProducts, ...allProducts].map((product, index) => {
              const isPrimary = index < allProducts.length;
              return (
                <div
                  key={`${product.titleKey}-${index}`}
                  className="w-[300px] sm:w-[400px] group flex-shrink-0"
                >
                  <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-cream-dark transition-all duration-500 hover:shadow-glow-lg shadow-xl">
                    <motion.img
                      layoutId={isPrimary ? `img-${product.titleKey}` : undefined}
                      src={product.image}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={t(product.titleKey)}
                    />
                    <motion.div
                      layoutId={isPrimary ? `bg-${product.titleKey}` : undefined}
                      className="absolute inset-0 bg-gradient-to-t from-dragon-green via-dragon-green/20 to-transparent p-8 flex flex-col justify-end z-10"
                    >
                      <motion.h3
                        layoutId={isPrimary ? `title-${product.titleKey}` : undefined}
                        className="font-serif text-2xl font-bold text-white mb-2"
                      >
                        {t(product.titleKey)}
                      </motion.h3>
                      <p className="text-white/80 text-sm line-clamp-2 mb-4">{t(product.descKey)}</p>
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
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>

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

                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl glass">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <img
                      src="/varieties/american-beauty.jpg"
                      alt="Moonlight Bloom"
                      className="w-full h-full object-cover grayscale-[0.3] brightness-75 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    />

                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 z-20 p-6 glass-dark rounded-2xl border border-white/10 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
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
