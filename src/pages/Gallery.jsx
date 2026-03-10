import { useTranslation } from 'react-i18next'
import GalleryCard from '../components/GalleryCard'

const galleryKeys = [
  { titleKey: 'gallery.sunriseHarvest', descKey: 'gallery.sunriseHarvestDesc' },
  { titleKey: 'gallery.bloomingFlowers', descKey: 'gallery.bloomingFlowersDesc' },
  { titleKey: 'gallery.vineyardRows', descKey: 'gallery.vineyardRowsDesc' },
  { titleKey: 'gallery.freshPicked', descKey: 'gallery.freshPickedDesc' },
  { titleKey: 'gallery.farmSunset', descKey: 'gallery.farmSunsetDesc' },
  { titleKey: 'gallery.organicCert', descKey: 'gallery.organicCertDesc' },
  { titleKey: 'gallery.familyFarm', descKey: 'gallery.familyFarmDesc' },
  { titleKey: 'gallery.marketReady', descKey: 'gallery.marketReadyDesc' },
  { titleKey: 'gallery.tropicalParadise', descKey: 'gallery.tropicalParadiseDesc' },
]

export default function Gallery() {
  const { t } = useTranslation()

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-dragon-green-dark via-dragon-green to-dragon-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-dragon-pink-light font-medium tracking-widest uppercase text-sm mb-4">
            {t('gallery.visualJourney')}
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-6">
            {t('gallery.farmGallery')}
          </h1>
          <p className="text-xl text-cream-dark/90 max-w-2xl mx-auto">
            {t('gallery.galleryDesc')}
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryKeys.map((item, index) => (
              <div
                key={item.titleKey}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <GalleryCard
                  title={t(item.titleKey)}
                  description={t(item.descKey)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
