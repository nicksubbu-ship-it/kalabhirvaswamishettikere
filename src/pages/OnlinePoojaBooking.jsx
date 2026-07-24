import React from 'react';

export default function OnlinePoojaBooking() {
  return (
    <div className="section-padding container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem' }}>Online Pooja Booking</h1>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem', fontSize: '1.2rem' }}>
          Book your sevas and poojas online. Seek blessings from Sri Kalabhairava Swamy from anywhere in the world.
        </p>
      </div>

      <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', padding: '3rem', borderTop: '4px solid var(--color-saffron)' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--color-gold)' }}>Full Name</label>
              <input type="text" placeholder="e.g. Rahul Sharma" style={inputStyle} />
            </div>
            <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--color-gold)' }}>Phone Number</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--color-gold)' }}>Gotra (Optional)</label>
              <input type="text" placeholder="e.g. Kashyapa" style={inputStyle} />
            </div>
            <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: 'var(--color-gold)' }}>Nakshatra (Optional)</label>
              <input type="text" placeholder="e.g. Ashwini" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--color-gold)' }}>Select Pooja / Seva</label>
            <select style={inputStyle}>
              <option value="" style={{ color: '#000' }}>-- Choose a Pooja --</option>
              <option value="archana" style={{ color: '#000' }}>Special Archana (₹101)</option>
              <option value="rudrabhisheka" style={{ color: '#000' }}>Maha Rudrabhisheka (₹1001)</option>
              <option value="annadana" style={{ color: '#000' }}>Annadana Seva (₹5001)</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--color-gold)' }}>Preferred Date</label>
            <input type="date" style={inputStyle} />
          </div>

          <button style={{
            marginTop: '1.5rem',
            padding: '1rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#fff',
            background: 'linear-gradient(135deg, var(--color-maroon), var(--color-saffron-dark))',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            boxShadow: '0 4px 15px rgba(128, 0, 0, 0.4)'
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '0.8rem 1rem',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  color: 'var(--color-text)',
  fontSize: '1rem',
  outline: 'none'
};
