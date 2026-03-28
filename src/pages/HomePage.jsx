import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const houses = [
  {
    name: 'Jean Paul Gaultier',
    year: '1976',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Chanel',
    year: '1910',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Pierre Cardin',
    year: '1950',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Yves Saint Laurent',
    year: '1961',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Dior',
    year: '1946',
    image:
      'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Balmain',
    year: '1945',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },
]

export default function HomePage({ text }) {
  return (
    <main>
      <section className="page-hero home-hero page-shell">
        <div className="hero-overlay" />
        <motion.div className="hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1>{text.heroTitle}</h1>
          <p>{text.heroSubtitle}</p>
          <Link to="/house">{text.explore}</Link>
        </motion.div>
      </section>

      <section className="intro page-shell content-grid">
        <motion.div className="intro-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {text.intro.split('\n\n').map((part) => (
            <p key={part}>{part}</p>
          ))}
        </motion.div>
        <motion.div className="intro-image-wrap" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img
            className="intro-image"
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80"
            alt="French fashion icon"
          />
        </motion.div>
      </section>

      <section className="houses page-shell">
        <div className="houses-grid">
          {houses.map((house, idx) => (
            <motion.article
              key={house.name}
              className="house-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
            >
              <div className="card-image-wrap">
                <img src={house.image} alt={house.name} className="card-image" />
              </div>
              <h3>{house.name}</h3>
              <p>{house.year}</p>
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
