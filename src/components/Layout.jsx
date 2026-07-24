import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import { Canvas } from '@react-three/fiber';
import Canvas3D from './Canvas3D';
import FallingFlowers from './FallingFlowers';

export default function Layout() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Background Elements */}
      <FallingFlowers />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Canvas3D />
        </Canvas>
      </div>

      {/* Global Navigation Bar */}
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
            Sri Kalabhairava Swamy
          </Link>
          
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>Home</Link>
            <Link to="/about" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>About</Link>
            <Link to="/pooja-booking" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>Online Pooja</Link>
            <Link to="/live-darshan" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>Live Darshan</Link>
            <Link to="/contact" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
