import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HouseCard({ house, t }) {
  return (
    <motion.article whileHover={{ y: -8 }} transition={{ duration: 0.25 }} className="house-card">
      <Link to={`/house/${house.slug}`}>
        <div className="house-image-wrap">
          <motion.img whileHover={{ scale: 1.06 }} transition={{ duration: 0.35 }} src={house.image} alt={house.name} />
        </div>
        <h3>{house.name}</h3>
        <p>
          {t.founded} {house.year}
        </p>
        <p className="house-desc">{house.description}</p>
      </Link>
    </motion.article>
  );
}
