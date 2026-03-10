import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ScrollReveal from '../components/ScrollReveal'
import Counter from '../components/Counter'
import BackgroundParticles from '../components/BackgroundParticles'
import ScrollLine from '../components/ScrollLine'

const stats = [
  { labelKey: 'about.stats.acres', value: 10, suffix: '+', icon: '🌳' },
  { labelKey: 'about.stats.trees', value: 5000, suffix: '+', icon: '🌱' },
  { labelKey: 'about.stats.harvest', value: 100, suffix: '%', icon: '📦' },
  { labelKey: 'about.stats.organicTitle', value: 100, suffix: '%', icon: '🛡️' },
]

const timeline = [
  { year: '2016', titleKey: 'about.timeline.2016Title', descKey: 'about.timeline.2016Desc' },
  { year: '2018', titleKey: 'about.timeline.2018Title', descKey: 'about.timeline.2018Desc' },
  { year: '2022', titleKey: 'about.timeline.2022Title', descKey: 'about.timeline.2022Desc' },
  { year: '2023', titleKey: 'about.timeline.2023Title', descKey: 'about.timeline.2023Desc' },
  { year: '2024', titleKey: 'about.timeline.2024Title', descKey: 'about.timeline.2024Desc' },
]

const founders = [
  {
    nameKey: 'about.founders.ponnusamy',
    roleKey: 'about.founders.ponnusamyRole',
    bioKey: 'about.founders.ponnusamyBio',
    color: 'dragon-green'
  },
]

const CoreValue = ({ icon, title, desc }) => (
  <ScrollReveal direction="up" className="h-full">
    <div className="h-full p-8 rounded-3xl bg-white border border-cream-dark shadow-xl-soft hover:shadow-2xl hover:border-dragon-pink/30 transition-all duration-500 group">
      <div className="w-16 h-16 rounded-2xl bg-dragon-pink/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-dragon-green mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </ScrollReveal>
)

const ScienceCard = ({ icon, title, desc }) => (
  <ScrollReveal direction="up" className="h-full">
    <div className="h-full p-10 rounded-[3rem] bg-white/60 backdrop-blur-2xl border border-white/50 shadow-2xl transition-all duration-700 hover:translate-y-[-15px] hover:rotate-2 hover:bg-white/80 group">
      <div className="w-20 h-20 rounded-3xl bg-dragon-green/5 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-dragon-pink/5 transition-all duration-500">
        {icon}
      </div>
      <h3 className="font-serif text-2xl font-bold text-dragon-green mb-4">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>

      {/* Absolute decorative element */}
      <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
        <span className="text-6xl select-none font-serif">{icon}</span>
      </div>
    </div>
  </ScrollReveal>
)

export default function About() {
  const { t } = useTranslation()
  const timelineRef = useRef(null)

  return (
    <div className="pt-20 bg-cream/30">
      {/* HERO SECTION */}
      <section className="relative py-32 bg-dragon-green-dark overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dragon-pink/20 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-dragon-green/20 rounded-full blur-[120px] -ml-48 -mb-48" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="down">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-sm">
              {t('about.ourStory')}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              {t('about.cultivatingExcellence')}
              <span className="block text-dragon-pink-light mt-4 italic font-normal text-3xl sm:text-5xl">
                {t('about.since2016')}
              </span>
            </h1>
            <p className="text-xl text-cream-dark/80 max-w-3xl mx-auto leading-relaxed">
              {t('about.aboutDesc')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* IMPACT STATS SECTION */}
      <section className="py-20 -mt-20 relative z-10 overflow-hidden">
        <BackgroundParticles count={20} color="bg-dragon-pink" />
        <BackgroundParticles count={15} color="bg-dragon-green" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.labelKey} delay={index * 0.1} direction="up">
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 text-center hover:translate-y-[-5px] transition-transform duration-500 relative z-10">
                  <div className="text-4xl mb-4 inline-block p-4 bg-dragon-pink/5 rounded-2xl">{stat.icon}</div>
                  <div className="font-serif text-4xl font-black text-dragon-green mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} delay={index * 0.1} />
                  </div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    {t(stat.labelKey)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH TIMELINE */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <ScrollReveal direction="up">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dragon-green mb-4">
                {t('about.growthTimeline')}
              </h2>
              <div className="w-24 h-1.5 bg-dragon-pink mx-auto rounded-full" />
            </ScrollReveal>
          </div>

          <div className="relative" ref={timelineRef}>
            {/* Desktop Timeline Line */}
            <ScrollLine containerRef={timelineRef} />

            <div className="space-y-24">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 text-right' : 'lg:pl-16 text-left'}`}>
                    <ScrollReveal direction={index % 2 === 0 ? 'left' : 'right'}>
                      <div className="group relative">
                        {/* Glassmorphic 3D Card */}
                        <div className="p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl transition-all duration-500 group-hover:translate-y-[-10px] group-hover:rotate-1 group-hover:shadow-dragon-pink/10">
                          <span className="inline-block text-dragon-pink font-black text-5xl mb-4 font-serif italic transition-all duration-500 group-hover:scale-110 group-hover:text-dragon-green">
                            {item.year}
                          </span>
                          <h3 className="font-serif text-2xl font-bold text-dragon-green mb-3">
                            {t(item.titleKey)}
                          </h3>
                          <p className="text-gray-600 text-lg leading-relaxed inline-block">
                            {t(item.descKey)}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-dragon-pink shadow-[0_0_15px_rgba(219,39,119,0.5)] z-10" />
                  </div>

                  <div className="w-full lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE SCIENCE OF SWEETNESS */}
      <section className="py-32 bg-dragon-green-dark relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(219,39,119,0.3)_0%,transparent_70%)]" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-dragon-pink/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <ScrollReveal direction="up">
              <span className="text-dragon-pink font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
                {t('about.scienceSubtitle')}
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-6">
                {t('about.scienceOfSweetness')}
              </h2>
              <div className="w-24 h-1.5 bg-dragon-pink mx-auto rounded-full" />
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScienceCard
              icon="🌱"
              title={t('about.scienceCards.livingSoilTitle')}
              desc={t('about.scienceCards.livingSoilDesc')}
            />
            <ScienceCard
              icon="🍭"
              title={t('about.scienceCards.brixPerfectionTitle')}
              desc={t('about.scienceCards.brixPerfectionDesc')}
            />
            <ScienceCard
              icon="♻️"
              title={t('about.scienceCards.zeroWasteTitle')}
              desc={t('about.scienceCards.zeroWasteDesc')}
            />
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDERS */}
      <section className="py-32 bg-cream/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <ScrollReveal direction="up">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dragon-green mb-4">
              {t('about.meetFounders')}
            </h2>
          </ScrollReveal>
        </div>

        <div className="max-w-xl mx-auto px-4 grid grid-cols-1 gap-8 text-center">
          {founders.map((founder, index) => (
            <ScrollReveal key={founder.nameKey} delay={index * 0.2} direction="up">
              <div className="group relative">
                <div className="relative z-10 p-8 rounded-[3rem] bg-white border border-cream-dark shadow-xl overflow-hidden text-center transition-all duration-500 hover:shadow-2xl">
                  {/* Founder Image */}
                  <div className="mb-8 relative inline-block">
                    <div className={`absolute inset-0 bg-${founder.color} rounded-full blur-2xl opacity-20 scale-110 group-hover:scale-125 transition-transform duration-700`} />
                    <div className="w-48 h-48 rounded-full bg-cream flex items-center justify-center relative z-10 border-4 border-white shadow-xl text-dragon-green">
                      <svg className="w-24 h-24 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0112.28 0C16.43 19.18 14.03 20 12 20z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-dragon-green mb-1">{t(founder.nameKey)}</h3>
                  <p className="text-dragon-pink font-bold uppercase text-xs tracking-widest mb-6">{t(founder.roleKey)}</p>
                  <p className="text-gray-600 leading-relaxed italic">{t(founder.bioKey)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <ScrollReveal direction="up">
              <p className="text-dragon-pink font-bold tracking-[0.3em] uppercase text-xs mb-3">
                {t('about.ourPhilosophy')}
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dragon-green">
                {t('about.ourValues')}
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <CoreValue
              icon="🌿"
              title={t('about.organicPractices')}
              desc={t('about.organicPracticesDesc')}
            />
            <CoreValue
              icon="💧"
              title={t('about.waterConservation')}
              desc={t('about.waterConservationDesc')}
            />
            <CoreValue
              icon="🤝"
              title={t('about.communityFocus')}
              desc={t('about.communityFocusDesc')}
            />
          </div>
        </div>
      </section>

      {/* FARM EXPERIENCE CTA */}
      <section className="py-24 bg-dragon-green-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8">
              {t('about.exploreProcess')}
            </h2>
            <Link
              to="/process"
              className="inline-flex items-center gap-3 px-10 py-5 bg-dragon-pink text-white font-bold rounded-full hover:bg-white hover:text-dragon-pink transition-all duration-500 shadow-xl shadow-dragon-pink/20"
            >
              <span className="text-lg">{t('about.ourProcess')}</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
