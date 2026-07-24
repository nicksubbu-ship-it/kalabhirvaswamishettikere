import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TimingsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(cardsRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        }
      }
    );
  }, []);

  const addToRefs = el => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="section-padding container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '3rem' }}>Darshan Timings</h2>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem', fontSize: '1.2rem' }}>Plan your visit to seek the divine blessings.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div ref={addToRefs} className="glass-panel" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>Monday - Saturday</h3>
          <div style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>Morning</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>7:00 AM - 9:00 AM</div>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '1.5rem 0' }}></div>
          <div style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>Evening</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>5:30 PM - 6:30 PM</div>
        </div>

        <div ref={addToRefs} className="glass-panel" style={{ padding: '3rem 2rem', textAlign: 'center', border: '1px solid rgba(255, 153, 51, 0.3)', background: 'rgba(255, 153, 51, 0.05)' }}>
          <h3 style={{ color: 'var(--color-saffron)', fontSize: '1.5rem', marginBottom: '1rem' }}>Sunday</h3>
          <div style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>Morning to Afternoon</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>7:00 AM - 2:30 PM</div>
          <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>*Special Poojas are performed on Sundays.</div>
        </div>

      </div>
    </section>
  );
}
