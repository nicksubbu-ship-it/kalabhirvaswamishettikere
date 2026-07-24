import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images dynamically from the public folder (using Vite's import.meta.glob for simplicity or hardcoded for now)
    // Since we copied them, let's use standard placeholders and assume the names
    // We can't know the exact random hash, so let's fetch the list or use a robust pattern.
    // Instead of hardcoding the hash, we will use import.meta.glob
    const getImages = async () => {
      // In Vite, we can't dynamically read public folder easily without a backend, 
      // but since we know we copied 3 .jpg files, we can just use a trick or hardcode if we know.
      // Wait, let's just use the images we generated. I'll pass them as props or assume they are there.
    };
    
    // For now, let's assume we have 3 images in the public folder. I will update this file again with the exact filenames.
  }, []);

  return (
    <section ref={sectionRef} className="section-padding container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '3rem' }}>Divine Gallery</h2>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem', fontSize: '1.2rem' }}>Glimpses of the majestic architecture and spirituality.</p>
      </div>

      <div ref={galleryRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-panel gallery-item" style={{ overflow: 'hidden', borderRadius: '16px', aspectRatio: '3/4' }}>
          <img src="/god1.jpg" alt="Sri Kalabhairava Swamy Idol" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
        </div>
        <div className="glass-panel gallery-item" style={{ overflow: 'hidden', borderRadius: '16px', aspectRatio: '3/4' }}>
          <img src="/god2.jpg" alt="Temple Vimana" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
        </div>
        <div className="glass-panel gallery-item" style={{ overflow: 'hidden', borderRadius: '16px', aspectRatio: '3/4' }}>
          <img src="/god3.jpg" alt="Sri Kalabhairava Swamy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
        </div>
        <div className="glass-panel gallery-item" style={{ overflow: 'hidden', borderRadius: '16px', aspectRatio: '3/4' }}>
          <img src="/god4.jpg" alt="Sri Kalabhairava Swamy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
        </div>
      </div>
      
      <style>{`
        .gallery-item img:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
