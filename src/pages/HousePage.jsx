import { motion } from 'framer-motion'

const heritage = ['heritage-1', 'heritage-2', 'heritage-3']
const runway = ['runway-1', 'runway-2', 'runway-3']

export default function HousePage() {
  return (
    <main>
      <section className="house-hero page-shell">
        <motion.div className="dior-cover image-reveal" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0 0)' }} transition={{ duration: 0.9 }} />
        <a href="#heritage">Explorer les galerie</a>
      </section>

      <section className="intro page-shell content-grid">
        <motion.div className="intro-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p>
            Christian Dior founded his fashion house in Paris in 1946, at a moment when Europe was recovering from the austerity of war. His vision was to restore beauty,
            elegance, and femininity through fashion.
          </p>
          <p>
            In 1947 Dior introduced the revolutionary “New Look,” defined by narrow waists, rounded shoulders, and full skirts. The silhouette reshaped post-war fashion and
            reestablished Paris as the center of haute couture.
          </p>
          <p>
            From its earliest collections, the house balanced architectural tailoring with romantic detail. This combination of structure and softness became a defining
            element of the brand’s identity.
          </p>
          <p>
            Over the decades Dior has continued to evolve while preserving its heritage of craftsmanship and innovation. Today the house remains one of the most influential
            voices in global fashion, shaping contemporary couture and runway culture.
          </p>
        </motion.div>
        <motion.div className="intro-image dior-founder image-reveal" initial={{ clipPath: 'inset(0 0 100% 0)' }} whileInView={{ clipPath: 'inset(0 0 0 0)' }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
      </section>

      <section id="heritage" className="page-shell heritage-grid">
        {heritage.map((item, idx) => (
          <motion.div key={item} className={`heritage-img ${item}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }} />
        ))}
      </section>

      <section className="era page-shell">1949/2026</section>

      <section className="page-shell runway-grid">
        {runway.map((item, idx) => (
          <motion.div key={item} className={`runway-img ${item}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }} />
        ))}
      </section>
    </main>
  )
}
