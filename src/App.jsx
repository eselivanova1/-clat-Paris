import { useEffect } from 'react'
import Lenis from 'lenis'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, Route, Routes, useLocation } from 'react-router-dom'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header container">
        <Link className="logo" to="/">
          CLAT
        </Link>
        <nav className="site-nav">
          <Link to="/">Collection</Link>
          <Link to="/about">Maison</Link>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {children}
      <footer id="contact" className="site-footer container">
        <p>7 Rue de la Paix · Paris 2ème</p>
        <p>bonjour@clat-paris.com</p>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <Layout>
      <main>
        <section className="hero container">
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1, duration: 0.8 }} className="eyebrow">
            Spring/Summer 2026
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2, duration: 0.85 }}>
            Timeless Parisian silhouettes crafted for modern rituals.
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.32, duration: 0.9 }} className="lead">
            A quiet luxury wardrobe of airy fabrics, sculpted tailoring, and effortless movement.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4, duration: 0.9 }} className="hero-actions">
            <button>Explore Collection</button>
            <button className="ghost">Book Fitting</button>
          </motion.div>
        </section>

        <section className="gallery container">
          {["Ivory Set", "Noir Robe", "Silk Trench"].map((title, index) => (
            <motion.article
              className="card"
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <div className="card-visual" />
              <h3>{title}</h3>
              <p>Hand-finished in our atelier with elevated natural fibers.</p>
            </motion.article>
          ))}
        </section>
      </main>
    </Layout>
  )
}

function AboutPage() {
  return (
    <Layout>
      <main className="about container">
        <motion.h2 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          Maison CLAT
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.75 }}>
          Inspired by vintage couture archives and the rhythm of Paris, we design garments that embody poise, softness, and
          intention. Every piece is made in limited editions to preserve rarity and care.
        </motion.p>
      </main>
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
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  )
}
