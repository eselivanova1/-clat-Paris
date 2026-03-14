import { houses } from '../data/houses';
import HouseCard from '../components/HouseCard';

export default function Houses({ t, searchQuery }) {
  const filteredHouses = houses.filter((house) => house.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section className="section">
      <div className="container">
        <h1>{t.housesTitle}</h1>
        <div className="houses-grid">
          {filteredHouses.map((house) => (
            <HouseCard key={house.slug} house={house} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
