import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Houses from './pages/Houses';
import House from './pages/House';
import About from './pages/About';
import { translations } from './data/translations';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 }
};

export default function App() {
  const [lang, setLang] = useState('fr');
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <div className="app" data-theme={theme}>
      <Header
        t={t}
        lang={lang}
        onLanguageChange={setLang}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        onThemeToggle={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
      />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home t={t} searchQuery={searchQuery} />} />
              <Route path="/houses" element={<Houses t={t} searchQuery={searchQuery} />} />
              <Route path="/house/:slug" element={<House t={t} />} />
              <Route path="/about" element={<About t={t} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer t={t} lang={lang} onLanguageChange={setLang} />
    </div>
  );
}
