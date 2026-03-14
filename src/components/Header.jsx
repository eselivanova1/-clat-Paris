import { Link, NavLink } from 'react-router-dom';

const languages = ['fr', 'en', 'ru'];

export default function Header({ t, lang, onLanguageChange, searchQuery, onSearchChange, theme, onThemeToggle }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo-link" aria-label="French Fashion Archive home">
          <img src="/logo.svg" alt="French Fashion Archive" className="logo" />
        </Link>

        <div className="header-controls">
          <label className="search-input" aria-label={t.searchPlaceholder}>
            <span className="search-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 20L16.6 16.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder={t.searchPlaceholder}
            />
          </label>

          <div className="language-switcher" role="group" aria-label="language switcher">
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

          <button type="button" className="theme-toggle" onClick={onThemeToggle} aria-label="toggle theme">
            {theme === 'light' ? '◐' : '◑'}
          </button>

          <nav className="top-nav" aria-label="primary navigation">
            <NavLink to="/">{t.navHome}</NavLink>
            <NavLink to="/houses">{t.navHouses}</NavLink>
            <NavLink to="/about">{t.navAbout}</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
