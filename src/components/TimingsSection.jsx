import React from 'react';
import { Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function TimingsSection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding container">
      <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', textAlign: 'center' }}>
        <Clock size={48} color="var(--color-gold)" style={{ margin: '0 auto 1.5rem auto' }} />
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('timings.title')}</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
          {t('timings.subtitle')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--color-saffron)', marginBottom: '1rem' }}>{t('timings.monSat')}</h3>
            <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>{t('timings.morning')}:</span>
              <strong>06:00 AM - 12:30 PM</strong>
            </p>
            <p style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{t('timings.evening')}:</span>
              <strong>05:30 PM - 08:30 PM</strong>
            </p>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255, 215, 0, 0.2)' }}>
            <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>{t('timings.sunday')}</h3>
            <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>{t('timings.morningAfternoon')}:</span>
              <strong>06:00 AM - 02:00 PM</strong>
            </p>
            <p style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{t('timings.evening')}:</span>
              <strong>05:00 PM - 09:00 PM</strong>
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-saffron)' }}>
              {t('timings.sunNote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
