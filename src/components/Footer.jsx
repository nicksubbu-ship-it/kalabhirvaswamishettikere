import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--color-dark-alt)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '4rem 0 2rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
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
            <li><a href="#about" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{t('footer.aboutLink')}</a></li>
            <li><a href="#timings" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{t('footer.timingsLink')}</a></li>
            <li><a href="#donations" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{t('footer.donationsLink')}</a></li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        {t('footer.copyright', { year: currentYear })}
      </div>
    </footer>
  );
}
