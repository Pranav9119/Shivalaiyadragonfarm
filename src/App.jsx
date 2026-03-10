import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import Process from './pages/Process'
import Contact from './pages/Contact'
import FAQPage from './pages/FAQPage'
import LoadingScreen from './components/LoadingScreen'
import PageTransition from './components/PageTransition'
import WhatsAppButton from './components/WhatsAppButton'
import CustomCursor from './components/CustomCursor'
import BottomNav from './components/BottomNav'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Update browser tab title when language changes
  useEffect(() => {
    document.title = t('home.brand')
  }, [i18n.language, t])

  return (
    <div className="flex flex-col min-h-screen font-sans bg-cream overflow-x-hidden w-full relative">
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <ScrollToTop />
      <BackToTop />
      <Navbar />
      <main className="flex-grow w-full max-w-[100vw] overflow-hidden pb-16 md:pb-0">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
            <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <WhatsAppButton />
      <BottomNav />
      <Footer />
    </div>
  )
}

export default App
