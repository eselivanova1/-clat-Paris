import { NavLink } from 'react-router-dom';

const languages = ['fr', 'en', 'ru'];

export default function Footer({ t, lang, onLanguageChange }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{t.copyright}</p>
        <nav aria-label="footer navigation">
          <NavLink to="/">{t.navHome}</NavLink>
          <NavLink to="/houses">{t.navHouses}</NavLink>
          <NavLink to="/about">{t.navAbout}</NavLink>
        </nav>
        <div className="language-switcher" role="group" aria-label="footer language switcher">
          {languages.map((code) => (
            <button
              key={code}
              type="button"
              className={lang === code ? 'active' : ''}
              onClick={() => onLanguageChange(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
