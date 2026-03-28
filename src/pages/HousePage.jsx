import { motion } from 'framer-motion'

const galleryImages = [
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1465408953385-7c4627c29435?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
]

export default function HousePage() {
  return (
    <main>
      <section className="page-hero house-hero page-shell">
        <div className="hero-overlay" />
        <motion.div className="hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1>Christian Dior</h1>
          <p>Haute Couture</p>
          <a href="#gallery">Explorer les galerie</a>
        </motion.div>
      </section>

      <section className="intro page-shell house-intro">
        <motion.div className="intro-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
      </section>

      <section id="gallery" className="page-shell house-gallery">
        <div className="house-gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.figure
              className="house-gallery-item"
              key={image}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <img src={image} alt={`Dior look ${index + 1}`} />
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="era page-shell">1949/2026</section>
    </main>
  )
}
