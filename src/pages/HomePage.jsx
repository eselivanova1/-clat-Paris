import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const houses = [
  ['Jean Paul Gaultier', '1976'],
  ['Chanel', '1910'],
  ['Pierre Cardin', '1950'],
  ['Yves Saint Laurent', '1961'],
  ['DIOR', '1946'],
  ['Balmain', '1945'],
]

export default function HomePage({ text }) {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-bg" />
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1>{text.heroTitle}</h1>
          <p>{text.heroSubtitle}</p>
          <Link to="/house">{text.explore}</Link>
        </motion.div>
      </section>

      <section className="intro page-shell content-grid">
        <motion.div
          className="intro-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {text.intro.split('\n\n').map((part) => (
            <p key={part}>{part}</p>
          ))}
        </motion.div>
        <motion.div
          className="intro-image image-reveal"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ clipPath: 'inset(0 0 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="houses page-shell">
        <div className="houses-grid">
          {houses.map(([name, year], idx) => (
            <motion.article
              key={name}
              className="house-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <div className={`house-image image-${idx + 1}`} />
              <h3>{name}</h3>
              <p>{year}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="quote page-shell">
        <p>{text.quote}</p>
      </section>
    </main>
  )
}
