import { Link } from 'react-router-dom';
import { houses } from '../data/houses';
import HouseCard from '../components/HouseCard';

export default function Home({ t, searchQuery }) {
  const filteredHouses = houses.filter((house) => house.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <section className="hero section">
        <div className="container hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>
          <Link className="cta" to="/houses">
            {t.explore}
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container history-grid">
          <div>
            <h2>{t.historyTitle}</h2>
            {t.history.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <img src="https://picsum.photos/seed/history/800/1000" alt="Editorial portrait" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t.housesTitle}</h2>
          <div className="houses-grid">
            {filteredHouses.map((house) => (
              <HouseCard key={house.slug} house={house} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
