import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function LiveDarshan() {
  return (
    <div className="section-padding container" style={{ minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem' }}>Live Darshan</h1>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem', fontSize: '1.2rem' }}>
          Experience the divine presence of Sri Kalabhairava Swamy from your home.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Main Video Player Placeholder */}
        <div className="glass-panel" style={{ 
          position: 'relative', 
          width: '100%', 
          aspectRatio: '16/9', 
          background: 'linear-gradient(45deg, rgba(20,20,20,0.8), rgba(0,0,0,0.9))',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          border: '1px solid var(--color-maroon)'
        }}>
          {/* Simulated Live Stream UI */}
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--color-maroon)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></span>
            LIVE
          </div>
          
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem' }}>
            👁️ 1,204 watching
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'rgba(255,215,0,0.6)', cursor: 'pointer', transition: 'transform 0.2s' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <PlayCircle size={80} strokeWidth={1} />
            <p style={{ marginTop: '1rem', letterSpacing: '2px' }}>CLICK TO PLAY</p>
          </div>
          
          {/* Subtle floral/mandala overlay */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at center, transparent 30%, rgba(128, 0, 0, 0.1) 100%)', pointerEvents: 'none' }}></div>
        </div>

        {/* Schedule & Info */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>Today's Live Schedule</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              <span>Suprabhata Seva</span>
              <span style={{ color: 'var(--color-text-muted)' }}>06:00 AM IST</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              <span>Maha Mangalarathi</span>
              <span style={{ color: 'var(--color-text-muted)' }}>12:30 PM IST</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
              <span>Evening Sandhya Aarti</span>
              <span style={{ color: 'var(--color-text-muted)' }}>06:30 PM IST</span>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
