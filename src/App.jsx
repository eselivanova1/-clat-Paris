import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HousePage from './pages/HousePage'

const copy = {
  fr: {
    topNav: 'FR|RU',
    heroTitle: 'Maisons de Mode Françaises',
    heroSubtitle: 'Histoire, héritage et influence de la haute couture française',
    explore: 'Explorer les maisons',
    intro:
      'La France est depuis longtemps considérée comme le cœur de la haute couture.\n\nDes maisons emblématiques comme Pierre Cardin, Jean‑Paul Gaultier ou Balmain ont marqué l’histoire de la mode par leur créativité et leur influence.\n\nCe site présente certaines des maisons qui ont façonné l’identité de la mode française.',
    quote: '“Fashion fades, style remains.”\n— Coco Chanel',
    footerNav: ['Home', 'Houses', 'About', 'Archive'],
    copyright: '© 2026 French Fashion Archive',
  },
  ru: {
    topNav: 'FR|RU',
    heroTitle: 'Французские Дома Моды',
    heroSubtitle: 'История, наследие и влияние французской высокой моды',
    explore: 'Открыть дома',
    intro:
      'Франция давно считается сердцем haute couture.\n\nЛегендарные дома, такие как Pierre Cardin, Jean‑Paul Gaultier и Balmain, сформировали историю моды своей креативностью и влиянием.\n\nЭтот сайт представляет дома моды, которые определили идентичность французского стиля.',
    quote: '“Мода проходит, стиль остаётся.”\n— Коко Шанель',
    footerNav: ['Home', 'Houses', 'About', 'Archive'],
    copyright: '© 2026 French Fashion Archive',
  },
}

function Header({ language, setLanguage }) {
  return (
    <header className="topbar page-shell">
      <Link className="brand" to="/">
        Ép
        <span>Eclat Paris</span>
      </Link>
      <div className="top-controls">
        <span className="search-icon">⌕</span>
        <button className="lang" onClick={() => setLanguage(language === 'fr' ? 'ru' : 'fr')}>
          {copy[language].topNav}
        </button>
        <span className="theme-dot">◐</span>
      </div>
    </header>
  )
}

function Footer({ language }) {
  return (
    <footer className="footer page-shell">
      <div className="footer-brand">
        Ép
        <span>Eclat Paris</span>
      </div>
      <p className="copyright">{copy[language].copyright}</p>
      <nav>
        {copy[language].footerNav.map((item) => (
          <a key={item} href="#">
            {item}
          </a>
        ))}
      </nav>
    </footer>
  )
}

function Shell({ children, language, setLanguage }) {
  return (
    <div className="site-wrap">
      <Header language={language} setLanguage={setLanguage} />
      {children}
      <Footer language={language} />
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const [language, setLanguage] = useState('fr')

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    })

    let rafId
    const loop = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Routes>
          <Route
            path="/"
            element={
              <Shell language={language} setLanguage={setLanguage}>
                <HomePage text={copy[language]} />
              </Shell>
            }
          />
          <Route
            path="/house"
            element={
              <Shell language={language} setLanguage={setLanguage}>
                <HousePage />
              </Shell>
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}
