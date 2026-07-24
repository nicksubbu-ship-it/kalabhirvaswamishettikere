import React, { useRef, useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const events = [
  {
    id: 1,
    date: 'August 15, 2026',
    title: 'Kalashtami Special Pooja',
    description: 'A grand celebration and special alankara for Lord Kalabhairava.'
  },
  {
    id: 2,
    date: 'September 12, 2026',
    title: 'Maha Rudrabhisheka',
    description: 'Sacred chanting and abhisheka rituals from early morning.'
  },
  {
    id: 3,
    date: 'October 24, 2026',
    title: 'Deepavali Deepotsava',
    description: 'The temple will be lit with thousands of diyas. Special darshan available.'
  },
  {
    id: 4,
    date: 'December 5, 2026',
    title: 'Karthika Somavara Pooja',
    description: 'Auspicious Monday prayers dedicated to Lord Shiva.'
  }
];

export default function EventsSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="section-padding container" style={{ position: 'relative', zIndex: 1 }}>
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
            <h2 className="text-gradient" style={{ fontSize: '2rem', margin: 0 }}>Upcoming Events</h2>
            <p style={{ color: 'var(--color-text-muted)', margin: '0.5rem 0 0 0', fontSize: '1rem' }}>
              Join us for special poojas and divine celebrations.
            </p>
          </div>
          <div style={{ color: 'var(--color-gold)' }}>
            {isOpen ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
          </div>
        </div>

        {isOpen && (
          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.5s ease' }}>
            {events.map((event) => (
              <div 
                key={event.id}
                style={{ 
                  padding: '1.5rem', 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  gap: '2rem',
                  borderLeft: '4px solid var(--color-saffron)',
                  background: 'rgba(30, 30, 30, 0.4)',
                  borderRadius: '0 12px 12px 0'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
                  <Calendar size={28} color="var(--color-gold)" style={{ marginBottom: '0.5rem' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textAlign: 'center', fontWeight: 'bold' }}>
                    {event.date}
                  </span>
                </div>
                
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{event.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>{event.description}</p>
                </div>
              </div>
            ))}
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
