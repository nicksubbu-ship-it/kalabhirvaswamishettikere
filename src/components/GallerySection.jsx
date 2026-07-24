import React from 'react';
import { useTranslation } from 'react-i18next';

export default function GallerySection() {
  const { t } = useTranslation();

  const images = [
    { src: '/god1.jpg', alt: t('gallery.alt1') },
    { src: '/god2.jpg', alt: t('gallery.alt2') },
    { src: '/god3.jpg', alt: t('gallery.alt3') },
    { src: '/god4.jpg', alt: t('gallery.alt4') }
  ];

  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>{t('gallery.title')}</h2>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem', fontSize: '1.2rem' }}>
          {t('gallery.subtitle')}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ 
            background: 'var(--color-dark-alt)', 
            padding: '1rem', 
            borderRadius: '12px', 
            border: '1px solid rgba(255, 215, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img 
              src={img.src} 
              alt={img.alt} 
              style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem', objectFit: 'contain', maxHeight: '400px' }} 
            />
            <span style={{ color: 'var(--color-text)', fontWeight: 'bold' }}>{img.alt}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
