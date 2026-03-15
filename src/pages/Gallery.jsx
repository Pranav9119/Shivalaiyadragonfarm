import { useTranslation } from 'react-i18next'
import GalleryCard from '../components/GalleryCard'

const galleryKeys = [
  { titleKey: 'gallery.sunriseHarvest', descKey: 'gallery.sunriseHarvestDesc', image: '/gallery/gallery 1.webp' },
  { titleKey: 'gallery.bloomingFlowers', descKey: 'gallery.bloomingFlowersDesc', image: '/gallery/gallery 2.jpg' },
  { titleKey: 'gallery.vineyardRows', descKey: 'gallery.vineyardRowsDesc', image: '/gallery/gallery 3.jpg' },
  { titleKey: 'gallery.freshPicked', descKey: 'gallery.freshPickedDesc', image: '/gallery/gallery 4.jpg' },
  { titleKey: 'gallery.farmSunset', descKey: 'gallery.farmSunsetDesc', image: '/gallery/gallery 5.jpg' },
  { titleKey: 'gallery.organicCert', descKey: 'gallery.organicCertDesc', image: '/gallery/gallery 6.jpg' },
  { titleKey: 'gallery.familyFarm', descKey: 'gallery.familyFarmDesc', image: '/gallery/gallery 7.jpg' },
  { titleKey: 'gallery.marketReady', descKey: 'gallery.marketReadyDesc', image: '/gallery/gallery 8.jpg' },
  { titleKey: 'gallery.tropicalParadise', descKey: 'gallery.tropicalParadiseDesc', image: '/gallery/gallery 9.jpg' },
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
                  image={item.image}
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
