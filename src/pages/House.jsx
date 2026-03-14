import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { houses } from '../data/houses';

export default function House({ t }) {
  const { slug } = useParams();
  const house = houses.find((item) => item.slug === slug);

  if (!house) {
    return (
      <section className="section">
        <div className="container">
          <h1>{t.notFound}</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="section house-page">
      <div className="container">
        <div className="house-hero">
          <img src={house.hero} alt={house.name} />
        </div>
        <h1>{house.name}</h1>
        <p className="house-year">
          {t.founded} {house.year}
        </p>

        <div className="house-copy">
          <p>
            {house.name} established its identity in Paris through a rigorous approach to silhouette, proportion,
            and material innovation, helping define the codes of modern couture.
          </p>
          <p>
            Across decades, the house has balanced heritage and reinvention, preserving atelier craftsmanship while
            speaking to changing cultural moments.
          </p>
          <p>
            Iconic collections, archival campaigns, and runway narratives have sustained its influence across
            editorial fashion, red carpets, and contemporary luxury.
          </p>
          <p>
            Today, {house.name} continues to inspire new generations by blending legacy with experimental form and
            precise visual storytelling.
          </p>
        </div>

        <div className="gallery-grid">
          {house.gallery.map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt={`${house.name} gallery ${index + 1}`}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <Link className="cta" to="/houses">
          {t.backToHouses}
        </Link>
      </div>
    </section>
  );
}
