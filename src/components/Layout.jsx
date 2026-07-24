import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import { Canvas } from '@react-three/fiber';
import Canvas3D from './Canvas3D';
import FallingFlowers from './FallingFlowers';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function Layout() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <FallingFlowers />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Canvas3D />
        </Canvas>
      </div>

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
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-gradient">
            {t('nav.title')}
          </Link>
          
          <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>{t('nav.home')}</Link>
            <Link to="/about" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>{t('nav.about')}</Link>
            <Link to="/pooja-booking" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>{t('nav.onlinePooja')}</Link>
            <Link to="/live-darshan" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>{t('nav.liveDarshan')}</Link>
            <Link to="/contact" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>{t('nav.contact')}</Link>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem' }}>
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
