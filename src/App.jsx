import { useEffect } from 'react'
import Lenis from 'lenis'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HousePageTemplate from './pages/HousePage'

const clatParisHouse = {
  title: 'Maison CLAT Paris',
  foundedYear: 1986,
  heroGradient: 'linear-gradient(125deg, #d8cbc0 0%, #b79d86 40%, #ece2da 100%)',
  history: [
    'Founded in 1986 on the Right Bank, Maison CLAT began as a private atelier creating made-to-measure evening pieces for a small circle of Parisian clients.',
    'Through the 1990s, the house became known for balancing strict tailoring with fluid movement, borrowing techniques from archival couture and adapting them for contemporary city life.',
    'In the early 2000s, CLAT expanded into complete ready-to-wear wardrobes while preserving hand-finished construction, natural fabrics, and a slower production rhythm.',
    'Today the house works in limited capsules, each centered around enduring silhouettes and quiet tonal palettes that can be layered across seasons.',
    'Every collection remains rooted in the founding principle: elegance should feel intimate, practical, and deeply personal to the wearer.',
  ],
  founderVisionGallery: [
    {
      title: 'Atelier Mornings',
      description: 'Sketchbook draping studies that define CLAT’s sculpted shoulder and softened waist.',
      gradient: 'linear-gradient(135deg, #d9ccc3 0%, #b79f8f 100%)',
    },
    {
      title: 'Fabric Stories',
      description: 'Natural silk, wool crêpe, and washed cotton selected for movement and longevity.',
      gradient: 'linear-gradient(135deg, #c8b9ad 0%, #a18c7d 100%)',
    },
    {
      title: 'Signature Lines',
      description: 'A visual language of clean seams and subtle structure that remains unmistakably CLAT.',
      gradient: 'linear-gradient(135deg, #e6dbd2 0%, #bfa998 100%)',
    },
  ],
  fashionWeekGallery: [
    {
      title: 'Runway Look 01',
      description: 'Ivory column layers with high-slit overcoat and tonal accessories.',
      gradient: 'linear-gradient(135deg, #ede3d9 0%, #c7b19f 100%)',
    },
    {
      title: 'Runway Look 07',
      description: 'Noir satin drape paired with sharp suiting for evening contrast.',
      gradient: 'linear-gradient(135deg, #c6b4a6 0%, #967d6a 100%)',
    },
    {
      title: 'Runway Look 12',
      description: 'Soft stone separates with elongated silhouettes and featherweight layering.',
      gradient: 'linear-gradient(135deg, #dfd4c9 0%, #b89f8e 100%)',
    },
    {
      title: 'Runway Finale',
      description: 'A monochrome procession celebrating timeless Parisian restraint.',
      gradient: 'linear-gradient(135deg, #d4c7bb 0%, #a68f7e 100%)',
    },
  ],
}

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header container" id="top">
        <Link className="logo" to="/">
          CLAT
        </Link>
        <nav className="site-nav">
          <Link to="/">Home</Link>
          <a href="#hero">Hero</a>
          <a href="#intro">Intro</a>
          <a href="#houses">Houses</a>
          <a href="#quote">Quote</a>
          <Link to="/house">House</Link>
        </nav>
      </header>
      {children}
      <footer className="site-footer container" id="footer">
        <p>7 Rue de la Paix · Paris 2ème</p>
        <p>bonjour@clat-paris.com</p>
      </footer>
    </div>
  )
}

function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

function House() {
  return (
    <Layout>
      <HousePageTemplate house={clatParisHouse} />
    </Layout>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })

    let frameId
    const raf = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/house" element={<House />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}
