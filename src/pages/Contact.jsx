import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="section-padding container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t('nav.contact')}</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.2rem', color: 'var(--color-text)' }}>
          <p><strong>{t('footer.contactTitle')}:</strong><br/><span style={{ color: 'var(--color-text-muted)' }}>{t('footer.address')}</span></p>
          <p><strong>Email:</strong><br/><span style={{ color: 'var(--color-text-muted)' }}>info@srikalabhairavaswamytemple.org</span></p>
          <p><strong>Phone:</strong><br/><span style={{ color: 'var(--color-text-muted)' }}>+91 9916762277</span></p>
        </div>
      </div>
    </div>
  );
}
