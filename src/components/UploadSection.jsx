import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { UploadCloud, ChevronDown, ChevronUp } from 'lucide-react';

export default function UploadSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef(null);
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(iconRef.current, { y: -10, duration: 0.3, yoyo: true, repeat: 1 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="section-padding container" style={{ position: 'relative', zIndex: 1, marginTop: '2rem' }}>
      <div 
        className="glass-panel" 
        style={{ maxWidth: '800px', margin: '0 auto', overflow: 'hidden' }}
      >
        <div 
          onClick={toggleDropdown}
          style={{ 
            padding: '2rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            cursor: 'pointer',
            background: 'rgba(20, 20, 20, 0.6)',
            borderBottom: isOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
          }}
        >
          <div>
            <h2 className="text-gradient" style={{ fontSize: '2rem', margin: 0 }}>Share Your Experience</h2>
            <p style={{ color: 'var(--color-text-muted)', margin: '0.5rem 0 0 0', fontSize: '1rem' }}>
              Upload your latest photos and videos from the temple.
            </p>
          </div>
          <div style={{ color: 'var(--color-gold)' }}>
            {isOpen ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
          </div>
        </div>

        {isOpen && (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
            <div 
              style={{ 
                padding: '3rem 2rem', 
                border: isHovered ? '2px dashed var(--color-gold)' : '2px dashed rgba(255, 215, 0, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                borderRadius: '16px',
                background: isHovered ? 'rgba(255, 153, 51, 0.1)' : 'transparent'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div ref={iconRef} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: isHovered ? 'var(--color-saffron)' : 'var(--color-gold)' }}>
                <UploadCloud size={64} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Drag & Drop Media Here</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>or click to browse your files (JPG, PNG, MP4)</p>
              
              <button style={{
                padding: '0.8rem 2rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'var(--color-dark)',
                background: 'var(--color-gold)',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
              }}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Select Files
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
