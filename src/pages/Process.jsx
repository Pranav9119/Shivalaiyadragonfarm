import { useTranslation } from 'react-i18next'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const foundationSteps = [
  {
    titleKey: 'process.landPreparation',
    descKey: 'process.landPreparationDesc',
    techKey: 'process.landPreparationTech',
    diveKey: 'process.landPreparationDive',
    statKey: 'process.landPrepStat',
    icon: '🌱'
  },
  {
    titleKey: 'process.plantingTrellising',
    descKey: 'process.plantingTrellisingDesc',
    techKey: 'process.plantingTrellisingTech',
    diveKey: 'process.plantingTrellisingDive',
    icon: '🏗️'
  },
  {
    titleKey: 'process.organicCare',
    descKey: 'process.organicCareDesc',
    techKey: 'process.organicCareTech',
    diveKey: 'process.organicCareDive',
    statKey: 'process.organicCareStat',
    icon: '🌿'
  },
]

const resultSteps = [
  {
    titleKey: 'process.harvest',
    descKey: 'process.harvestDesc',
    techKey: 'process.harvestTech',
    diveKey: 'process.harvestDive',
    statKey: 'process.harvestStat',
    icon: '✋'
  },
  {
    titleKey: 'process.qualityDelivery',
    descKey: 'process.qualityDeliveryDesc',
    techKey: 'process.qualityDeliveryTech',
    diveKey: 'process.qualityDeliveryDive',
    icon: '📦'
  },
]

export default function Process() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const resultsRef = useRef(null)
  const [expandedStep, setExpandedStep] = useState(null)

  const { scrollYProgress: foundationProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const { scrollYProgress: resultsProgress } = useScroll({
    target: resultsRef,
    offset: ["start end", "end end"]
  })

  const foundationScale = useSpring(foundationProgress, { stiffness: 100, damping: 30 })
  const resultsScale = useSpring(resultsProgress, { stiffness: 100, damping: 30 })

  const toggleStep = (key) => {
    setExpandedStep(expandedStep === key ? null : key)
  }

  const StepCard = ({ step, index, isAlternate = false }) => {
    const isExpanded = expandedStep === step.titleKey
    return (
      <div className="relative mb-32 last:mb-20">
        <ScrollReveal>
          <div className={`flex flex-col md:flex-row items-start ${isAlternate ? 'md:flex-row-reverse' : ''
            }`}>
            <div className="hidden md:block md:w-1/2" />
            <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center z-20 mt-12 md:mt-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                className="w-5 h-5 rounded-full ring-4 ring-white shadow-xl bg-dragon-pink"
              />
            </div>
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isAlternate ? 'md:pl-16' : 'md:pr-16'
              }`}>
              <div className="group relative p-8 rounded-[2rem] bg-white border border-cream-dark shadow-xl-soft hover:shadow-2xl hover:border-dragon-pink/30 transition-all duration-500 overflow-hidden">
                {/* Floating Stat Badge */}
                {step.statKey && (
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="absolute top-8 right-8 bg-dragon-green text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-10"
                  >
                    {t(step.statKey)}
                  </motion.div>
                )}

                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl transform group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </span>
                  <span className="font-bold text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-dragon-pink/10 text-dragon-pink">
                    {t('process.step')} 0{index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4 text-dragon-green">
                  {t(step.titleKey)}
                </h3>
                <p className="text-lg leading-relaxed mb-8 text-gray-600">
                  {t(step.descKey)}
                </p>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl border bg-cream/40 border-cream-dark transition-colors">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-dragon-green/50">
                      {t('process.technicalDetail')}
                    </p>
                    <p className="font-medium text-dragon-green">
                      {t(step.techKey)}
                    </p>
                  </div>
                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 rounded-2xl border-l-4 mt-2 bg-cream/80 border-dragon-pink/30 text-gray-700 italic">
                          <p className="text-sm leading-relaxed">{t(step.diveKey)}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    onClick={() => toggleStep(step.titleKey)}
                    className="flex items-center gap-2 text-sm font-bold group/btn transition-all text-dragon-green hover:text-dragon-pink"
                  >
                    <span className="relative">
                      {isExpanded ? t('process.showLess') : t('process.learnMore')}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover/btn:w-full bg-dragon-pink" />
                    </span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    )
  }

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-cream via-cream to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-dragon-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-dragon-pink font-bold tracking-[0.3em] uppercase text-xs mb-4">
            {t('process.fromSeedToTable')}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-5xl sm:text-7xl font-bold text-dragon-green mb-8">
            {t('process.ourFarmingProcess')}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('process.processDesc')}
          </motion.p>
        </div>
      </section>

      {/* Foundation Timeline */}
      <section ref={containerRef} className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-cream-dark/30 md:-translate-x-1/2 rounded-full" />
            <motion.div style={{ scaleY: foundationScale, originY: 0 }} className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-dragon-pink md:-translate-x-1/2 rounded-full z-10 shadow-[0_0_15px_rgba(255,107,157,0.3)]" />
            {foundationSteps.map((step, index) => (
              <StepCard key={step.titleKey} step={step} index={index} isAlternate={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSIVE NIGHT BLOOM HIGHLIGHT */}
      <section className="relative py-40 bg-slate-950 overflow-hidden group">
        {/* Starry Background */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* The Moon */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute top-24 right-24 w-24 h-24 bg-gradient-to-br from-indigo-100 to-white/10 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs uppercase tracking-widest mb-6 border border-indigo-500/30">
              {t('process.step')} 04
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {t('process.nightBloomTitle')}
            </h2>
            <p className="text-indigo-200 text-xl sm:text-2xl font-medium tracking-wide mb-12 max-w-2xl mx-auto">
              {t('process.nightBloomSub')}
            </p>

            <div className="relative inline-block mb-12 group/flower">
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="text-9xl mb-4 relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                🌸
              </motion.div>
              <div className="absolute inset-0 bg-white/20 blur-[100px] rounded-full scale-150 animate-pulse" />
            </div>

            <p className="text-indigo-100/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-serif italic mb-16 px-4">
              "{t('process.nightBloomPoem')}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-xl">💡</span>
                  {t('process.technicalDetail')}
                </h4>
                <p className="text-indigo-100/80 leading-relaxed font-medium">
                  {t('process.bloomingTech')}
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-xl">✨</span>
                  Deep Dive
                </h4>
                <p className="text-indigo-100/70 text-sm leading-relaxed">
                  {t('process.bloomingDive')}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results Timeline */}
      <section ref={resultsRef} className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-cream-dark/30 md:-translate-x-1/2 rounded-full" />
            <motion.div style={{ scaleY: resultsScale, originY: 0 }} className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-dragon-green md:-translate-x-1/2 rounded-full z-10 shadow-[0_0_15px_rgba(40,84,65,0.2)]" />
            {resultSteps.map((step, index) => (
              <StepCard key={step.titleKey} step={step} index={index + 3} isAlternate={index % 2 === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-24 bg-cream/10 border-t border-cream-dark/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dragon-green text-white rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-lg shadow-dragon-green/20">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Certified Organic Process
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dragon-green mb-6 leading-tight">
              Consistency from Soil to Shelf
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Our meticulous attention to every stage ensures that when you choose Shivalaiya Dragon Fruit, you are getting more than just fruit—you are getting the result of years of sustainable innovation.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
