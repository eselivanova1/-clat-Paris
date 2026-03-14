import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage({ houses }) {
  return (
    <main className="home-page">
      <section className="home-hero container" id="hero">
        <motion.p initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.7 }} className="eyebrow">
          CLAT PARIS — CURATED DIRECTORY
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.08, duration: 0.8 }}>
          Discover the next era of French fashion houses.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.16, duration: 0.8 }} className="home-lead">
          A visual guide to maisons shaping contemporary couture through craftsmanship, restraint, and timeless silhouettes.
        </motion.p>
        <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ delay: 0.22, duration: 0.8 }} className="hero-actions">
          <a className="button" href="#houses">
            Explore Houses
          </a>
          <Link className="button ghost" to="/house">
            View Maison CLAT
          </Link>
        </motion.div>
      </section>

      <section className="home-intro container" id="intro">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.65 }}>
          Intro
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ delay: 0.08, duration: 0.65 }}>
          From private ateliers to global runway showcases, each featured house is selected for its unique point of view and commitment to
          elevated construction. Browse each profile to understand its origin, language, and signature collections.
        </motion.p>
      </section>

      <section className="home-grid-section container" id="houses">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.65 }}>
          Fashion houses grid
        </motion.h2>
        <div className="home-houses-grid">
          {houses.map((house, index) => (
            <motion.article
              className="house-tile"
              key={house.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <div className="house-tile-image" style={{ background: house.gradient }} />
              <h3>{house.name}</h3>
              <p className="house-city">{house.city}</p>
              <p>{house.note}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="home-quote container" id="quote">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7 }}
        >
          “Style is not noise — it is the quiet confidence of detail, proportion, and intention.”
        </motion.blockquote>
        <motion.cite
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          — CLAT Editorial Team
        </motion.cite>
      </section>
    </main>
  )
}
