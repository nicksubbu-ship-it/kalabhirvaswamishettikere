import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';

export default function Layout() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="glass-panel" style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '1rem 2rem',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: '0 0 16px 16px'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontSize: '1.2rem', fontWeight: 'bold' }} className="text-gradient">
            {t('nav.title')}
          </Link>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={{ display: 'none', background: 'transparent', border: 'none', color: 'var(--color-gold)' }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>{t('nav.home')}</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>{t('nav.about')}</Link>
            <Link to="/pooja-booking" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>{t('nav.onlinePooja')}</Link>
            <Link to="/live-darshan" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>{t('nav.liveDarshan')}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>{t('nav.contact')}</Link>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto' }}>
              <Globe size={18} color="var(--color-gold)" />
              <select 
                value={i18n.language.startsWith('kn') ? 'kn' : 'en'} 
                onChange={changeLanguage}
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  border: '1px solid var(--color-gold)',
                  borderRadius: '4px',
                  padding: '0.2rem 0.5rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="en" style={{ color: 'black' }}>English</option>
                <option value="kn" style={{ color: 'black' }}>ಕನ್ನಡ (Kannada)</option>
              </select>
            </div>
          </nav>
        </div>
      </header>

      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
