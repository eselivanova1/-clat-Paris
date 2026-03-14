import { motion } from 'framer-motion'

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function GallerySection({ id, title, items, className = '' }) {
  return (
    <section id={id} className={`house-gallery-section container ${className}`.trim()}>
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h3>
      <div className="house-gallery-grid">
        {items.map((item, index) => (
          <motion.article
            className="house-gallery-card"
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="house-gallery-image" style={{ background: item.gradient }} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default function HousePageTemplate({ house }) {
  return (
    <main className="house-page">
      <section className="house-hero container">
        <motion.div
          className="house-hero-image"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ background: house.heroGradient }}
        />

        <motion.div
          className="house-meta"
          initial="hidden"
          animate="visible"
          variants={sectionFade}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <p className="eyebrow">Fashion House</p>
          <h1>{house.title}</h1>
          <p className="house-founded">Founded in {house.foundedYear}</p>
        </motion.div>
      </section>

      <section id="history" className="house-history container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          transition={{ duration: 0.65 }}
        >
          History
        </motion.h2>
        <div className="house-history-copy">
          {house.history.map((paragraph, index) => (
            <motion.p
              key={paragraph.slice(0, 20)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      <GallerySection id="founder-vision" title="Founder Vision" items={house.founderVisionGallery} className="founder-vision" />
      <GallerySection id="fashion-week" title="Fashion Week 2026" items={house.fashionWeekGallery} className="fashion-week" />
    </main>
  )
}
