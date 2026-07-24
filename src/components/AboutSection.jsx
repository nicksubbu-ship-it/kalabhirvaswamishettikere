import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="section-padding" 
      style={{ 
        position: 'relative', 
        zIndex: 1, 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container glass-panel" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div ref={textRef}>
          <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Divine Heritage</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
            The Sri Kalabhairava Swamy Temple in Settikere is a beacon of spiritual significance in the Tumkur district. Dedicated to Lord Kalabhairava, a fierce manifestation of Lord Shiva, the temple attracts devotees from all over Karnataka.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
            Experience peace, devotion, and architectural beauty as you step into the sacred premises. The temple is especially vibrant during Kalashtami and special Saturday poojas.
          </p>
        </div>
        
        {/* Placeholder for an image or graphic */}
        <div style={{ 
          width: '100%', 
          aspectRatio: '1', 
          background: 'linear-gradient(45deg, rgba(255,153,51,0.2), rgba(255,215,0,0.1))',
          borderRadius: '24px',
          border: '1px solid rgba(255, 153, 51, 0.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 40px rgba(255, 153, 51, 0.1)'
        }}>
          <span style={{ fontSize: '4rem', opacity: 0.5 }}>ॐ</span>
        </div>
      </div>
    </section>
  );
}
