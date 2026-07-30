import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--color-dark-alt)', borderTop: '1px solid rgba(0,0,0,0.1)', padding: '4rem 0 2rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem', wordBreak: 'break-word' }}>
        
        <div>
          <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('footer.title')}</h3>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            {t('footer.desc')}
          </p>
        </div>

        <div>
          <h4 style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>{t('footer.contactTitle')}</h4>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
            {t('footer.address')}
          </p>
        </div>

        <div>
          <h4 style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>{t('footer.quickLinks')}</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link to="/about" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{t('nav.about')}</Link></li>
            <li><Link to="/pooja-booking" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{t('nav.onlinePooja')}</Link></li>
            <li><Link to="/live-darshan" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{t('nav.liveDarshan')}</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{t('nav.contact')}</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        {t('footer.copyright', { year: currentYear })}
      </div>
    </footer>
  );
}
