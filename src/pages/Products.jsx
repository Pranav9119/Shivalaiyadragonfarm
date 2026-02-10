import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import ScrollReveal from '../components/ScrollReveal'
import ProductModal from '../components/ProductModal'
import BulkEstimator from '../components/BulkEstimator'

const freshProducts = [
  { titleKey: 'products.moroccoRed', descKey: 'products.moroccoRedDesc', variant: 'pink', image: '/varieties/Morocco-Red.webp' },
  { titleKey: 'products.mexicanRed', descKey: 'products.mexicanRedDesc', variant: 'pink', image: '/varieties/mexican-red.webp' },
  { titleKey: 'products.malaysianRed', descKey: 'products.malaysianRedDesc', variant: 'pink', image: '/varieties/malaysian-red.jpg' },
  { titleKey: 'products.cVariety', descKey: 'products.cVarietyDesc', variant: 'green', image: '/varieties/c-variety.jpg' },
  { titleKey: 'products.israelianYellow', descKey: 'products.israelianYellowDesc', variant: 'pink', image: '/varieties/israelian-yellow.jpg' },
  { titleKey: 'products.jumboRed', descKey: 'products.jumboRedDesc', variant: 'pink', image: '/varieties/jumbo-red.jpg' },
  { titleKey: 'products.americanBeauty', descKey: 'products.americanBeautyDesc', variant: 'pink', image: '/varieties/american-beauty.jpg' },
]

const valueAddedProducts = [
  { titleKey: 'products.dragonJam', descKey: 'products.dragonJamDesc', variant: 'green', image: '/varieties/dragon-jam.jpg' },
  { titleKey: 'products.dragonHalva', descKey: 'products.dragonHalvaDesc', variant: 'green', image: '/varieties/dragon-halva.jpg' },
  { titleKey: 'products.dragonChips', descKey: 'products.dragonChipsDesc', variant: 'pink', image: '/varieties/Dragon-Chips.png' },
]

export default function Products() {
  const { t, i18n } = useTranslation()
  const isTamil = i18n.language === 'ta'
  const location = useLocation()
  const transitionState = location.state
  const isTransitioning = transitionState?.fromHome && transitionState?.product

  const [showSticky, setShowSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('fresh-harvest')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowSticky(scrollY > 400)

      const freshSection = document.getElementById('fresh-harvest')
      const valueSection = document.getElementById('value-added')

      if (valueSection && scrollY >= valueSection.offsetTop - 200) {
        setActiveSection('value-added')
      } else if (freshSection) {
        setActiveSection('fresh-harvest')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 140 // Account for main navbar + sticky bar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const openQuickView = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <div className="pt-20">
      {/* Sticky Category Bar */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-20 left-0 right-0 z-40 px-4 py-3"
          >
            <div className="max-w-md mx-auto bg-white/80 backdrop-blur-md border border-dragon-pink/20 rounded-full shadow-lg p-1 flex justify-between items-center overflow-hidden">
              <button
                onClick={() => scrollToSection('fresh-harvest')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${activeSection === 'fresh-harvest'
                  ? 'bg-dragon-pink text-white shadow-md'
                  : 'text-dragon-green hover:bg-cream'
                  }`}
              >
                {t('products.freshHarvest')}
              </button>
              <button
                onClick={() => scrollToSection('value-added')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${activeSection === 'value-added'
                  ? 'bg-dragon-green text-white shadow-md'
                  : 'text-dragon-green hover:bg-cream'
                  }`}
              >
                {t('products.valueAdded')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden">
        {isTransitioning ? (
          <div className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center">
            {/* Morphing Background */}
            <motion.div
              layoutId={`bg-${transitionState.productId}`}
              className="absolute inset-0 bg-dragon-green z-0"
            />
            {/* Morphing Image */}
            <motion.img
              layoutId={`img-${transitionState.productId}`}
              src={transitionState.product.image}
              className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
              alt=""
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dragon-green via-dragon-green/50 to-transparent z-10" />

            <div className="relative z-20 text-center px-4">
              <motion.h1
                layoutId={`title-${transitionState.productId}`}
                className={`${isTamil ? 'font-sans text-4xl sm:text-6xl lg:text-7xl leading-[1.3]' : 'font-serif text-5xl sm:text-7xl lg:text-8xl'} font-bold text-white mb-6 drop-shadow-2xl`}
              >
                {t(transitionState.product.titleKey)}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`${isTamil ? 'text-lg sm:text-xl leading-[1.8]' : 'text-xl sm:text-2xl leading-relaxed'} text-cream-dark/90 max-w-3xl mx-auto`}
              >
                {t(transitionState.product.descKey)}
              </motion.p>
            </div>
          </div>
        ) : (
          <section className="py-20 bg-gradient-to-br from-cream to-cream-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-dragon-pink font-medium tracking-widest uppercase text-sm mb-4">
                {t('products.ourHarvest')}
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-5xl sm:text-6xl font-bold text-dragon-green mb-6"
              >
                {t('products.premiumProducts')}
              </motion.h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('products.productsDesc')}
              </p>
            </div>
          </section>
        )}
      </section>

      {/* Fresh Harvest Section */}
      <section id="fresh-harvest" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-l-4 border-dragon-pink pl-6">
            <h2 className="font-serif text-3xl font-bold text-dragon-green">
              {t('products.freshHarvest')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {freshProducts.map((product, index) => (
              <ProductCard
                key={product.titleKey}
                titleKey={product.titleKey}
                description={t(product.descKey)}
                variant={product.variant}
                image={product.image}
                delay={index * 75}
                onClick={() => openQuickView(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Estimator Section */}
      <section className="py-24 bg-cream/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <BulkEstimator products={freshProducts} />
          </ScrollReveal>
        </div>
      </section>

      {/* Value Added Products Section */}
      <section id="value-added" className="py-24 bg-cream/30 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-l-4 border-dragon-green pl-6 text-right md:text-left">
            <h2 className="font-serif text-3xl font-bold text-dragon-green">
              {t('products.valueAdded')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueAddedProducts.map((product, index) => (
              <ProductCard
                key={product.titleKey}
                titleKey={product.titleKey}
                description={t(product.descKey)}
                variant={product.variant}
                image={product.image}
                delay={index * 75}
                onClick={() => openQuickView(product)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dragon-green">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              {t('products.wholesaleTitle')}
            </h2>
            <p className="text-cream-dark/90 mb-6">
              {t('products.wholesaleDesc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dragon-pink hover:bg-dragon-pink-light text-white font-semibold rounded-full transition-colors"
            >
              {t('products.requestQuote')}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  )
}
