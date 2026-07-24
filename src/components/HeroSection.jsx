import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=1"
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '0 2rem'
      }}
    >
      <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 
          ref={titleRef}
          className="text-gradient"
          style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1rem', lineHeight: '1.2' }}
        >
          Sri Kalabhairava Swamy Temple
        </h1>
        <p 
          ref={subtitleRef}
          style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px' }}
        >
          Discover the divine energy and historical significance in Settikere, Tumkur.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
        <span style={{ fontSize: '0.9rem', letterSpacing: '2px', opacity: 0.7 }}>SCROLL</span>
      </div>
      
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
