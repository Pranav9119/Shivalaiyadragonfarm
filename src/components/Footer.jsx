import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const footerPaths = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/products', key: 'products' },
  { path: '/gallery', key: 'gallery' },
  { path: '/process', key: 'process' },
  { path: '/faq', key: 'faq' },
  { path: '/contact', key: 'contact' },
]

const contactInfo = {
  email: 'shivalaiyadragon@gmail.com',
  phone: '+91 86755 22223',
  address: 'Shivalaiya Farms, Siruvani Main Road, SF No: 15-1, Theethipalayam Post, Perur, Coimbatore - 641010',
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-dragon-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Shivalaiya Dragon Farm Logo"
                className="h-10 w-auto object-contain"
              />
              <h3 className="font-serif text-2xl font-semibold text-dragon-pink-light">
                {t('footer.brand')}
              </h3>
            </div>
            <p className="text-cream-dark/90 text-sm leading-relaxed">
              {t('footer.brandDesc')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-dragon-pink-light mb-4 uppercase tracking-wider text-sm">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {footerPaths.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-dark/90 hover:text-dragon-pink-light transition-colors duration-300"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-dragon-pink-light mb-4 uppercase tracking-wider text-sm">
              {t('footer.contactUs')}
            </h4>
            <ul className="space-y-3 text-cream-dark/90">
              <li>{contactInfo.address}</li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-dragon-pink-light transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-dragon-pink-light transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@coimbatoreshivalaiyadragon4635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-dragon-pink-light transition-colors"
                >
                  <span
                    className="inline-flex h-6 w-8 items-center justify-center rounded-md bg-red-600"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3 w-3 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium">YouTube Channel</span>
                    <span className="text-xs text-cream-dark/80">
                      youtube.com/@coimbatoreshivalaiyadragon4635
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dragon-green-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-dark/70 text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <p className="text-cream-dark/50 text-xs">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 pt-6 border-t border-dragon-green-light/50 text-center">
          <p className="text-cream-dark/60 text-sm">
            Developed by <span className="text-dragon-pink-light font-semibold">Pranavsai kumar</span>
          </p>
          <p className="text-cream-dark/50 text-xs mt-1">
            Email: <a
              href="mailto:pranavsaikumar777@gmail.com"
              className="text-dragon-pink-light/80 hover:text-dragon-pink-light transition-colors duration-300 underline decoration-dotted"
            >
              pranavsaikumar777@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
