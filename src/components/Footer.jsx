import React from 'react';

export default function Footer() {
  return (
    <footer className="glass-panel" style={{ 
      position: 'relative', 
      zIndex: 1, 
      marginTop: '4rem', 
      padding: '4rem 2rem 2rem 2rem',
      borderRadius: '24px 24px 0 0',
      borderBottom: 'none'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
        <div>
          <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Sri Kalabhairava Swamy Temple</h3>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            A divine abode situated in the heart of Settikere, offering peace, spirituality, and rich heritage to all devotees.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>Contact & Location</h4>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '0.5rem' }}>
            Settikere, Chikkanayakanahalli Taluk,<br/>
            Tumkur District - 572226,<br/>
            Karnataka, India
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}>About Temple</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}>Darshan Timings</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}>Donations</a></li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Sri Kalabhairava Swamy Temple, Settikere. All rights reserved.</p>
      </div>
    </footer>
  );
}
