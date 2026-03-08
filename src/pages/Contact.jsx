import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const WHATSAPP_NUMBER = '918675522223'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Hi! I'm ${formData.name}. ${formData.message} Email: ${formData.email} Phone: ${formData.phone}`
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-dragon-green-dark via-dragon-green to-dragon-green-light overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-dragon-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-dragon-pink-light font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
            {t('contact.getInTouch')}
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            {t('contact.contactUs')}
          </h1>
          <p className="text-xl text-cream-dark/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {t('contact.contactDesc')}
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left bg-gradient-to-br from-white to-cream p-8 sm:p-12 rounded-2xl shadow-2xl-soft border border-cream-dark hover:shadow-glow transition-all duration-500">
              <h2 className="font-serif text-3xl font-bold text-dragon-green mb-6">
                {t('contact.sendMessage')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-dragon-green mb-2 group-focus-within:text-dragon-pink transition-colors">
                    {t('contact.yourName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark focus:border-dragon-pink focus:ring-2 focus:ring-dragon-pink/20 outline-none transition-all duration-300 hover:border-dragon-pink/50"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-dragon-green mb-2 group-focus-within:text-dragon-pink transition-colors">
                    {t('contact.emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark focus:border-dragon-pink focus:ring-2 focus:ring-dragon-pink/20 outline-none transition-all duration-300 hover:border-dragon-pink/50"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-dragon-green mb-2 group-focus-within:text-dragon-pink transition-colors">
                    {t('contact.phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark focus:border-dragon-pink focus:ring-2 focus:ring-dragon-pink/20 outline-none transition-all duration-300 hover:border-dragon-pink/50"
                    placeholder={t('contact.phonePlaceholder')}
                  />
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-dragon-green mb-2 group-focus-within:text-dragon-pink transition-colors">
                    {t('contact.yourMessage')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark focus:border-dragon-pink focus:ring-2 focus:ring-dragon-pink/20 outline-none transition-all duration-300 resize-none hover:border-dragon-pink/50"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="group flex-1 px-6 py-4 bg-dragon-pink hover:bg-dragon-pink-light text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-lg shadow-xl relative overflow-hidden"
                  >
                    <span className="relative z-10">{t('contact.sendMessageBtn')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-glow-lg relative overflow-hidden"
                  >
                    <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="relative z-10">{t('contact.chatWhatsApp')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </a>
                </div>
              </form>
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <h2 className="font-serif text-3xl font-bold text-dragon-green mb-6">
                {t('contact.visitUs')}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-dragon-pink/10 flex items-center justify-center text-dragon-pink text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-dragon-green">{t('contact.address')}</h3>
                    <p className="text-gray-600 mt-1">
                      {t('contact.addressValue').split('\n').map((line, i, arr) => (
                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-dragon-pink/10 flex items-center justify-center text-dragon-pink text-xl flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold text-dragon-green">{t('contact.email')}</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:shivalaiyadragon@gmail.com" className="hover:text-dragon-pink transition-colors">
                        shivalaiyadragon@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-dragon-pink/10 flex items-center justify-center text-dragon-pink text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-dragon-green">{t('contact.phone')}</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+918675522223" className="hover:text-dragon-pink transition-colors">
                        +91 86755 22223
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-dragon-pink/10 flex items-center justify-center text-dragon-pink text-xl flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-semibold text-dragon-green">{t('contact.farmVisitHours')}</h3>
                    <p className="text-gray-600 mt-1">
                      {t('contact.hoursValue').split('\n').map((line, i, arr) => (
                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div className="bg-white p-4 rounded-2xl shadow-2xl-soft border border-cream-dark overflow-hidden hover:shadow-glow transition-all duration-500">
                    <iframe
                      src="https://maps.google.com/maps?q=10.967861,76.880806&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                      title="Shivalaiya Dragon Farm Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
