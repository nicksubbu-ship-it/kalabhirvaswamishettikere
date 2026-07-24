import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding container">
      <div className="glass-panel" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 className="text-gradient" style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>{t('about.title')}</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          {t('about.p1')}
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
          {t('about.p2')}
        </p>
      </div>
    </section>
  );
}
