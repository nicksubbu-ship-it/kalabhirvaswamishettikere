import React, { useEffect, useState } from 'react';

const FlowerPetal = ({ style }) => (
  <div style={{
    position: 'absolute',
    background: 'radial-gradient(ellipse at bottom, #ff9a9e 0%, #fecfef 99%)',
    width: '15px',
    height: '15px',
    borderRadius: '15px 0 15px 0',
    opacity: 0.8,
    pointerEvents: 'none',
    ...style
  }} />
);

export default function FallingFlowers() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate petals
    const newPetals = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 5 + 5}s`, // 5 to 10s
      animationDelay: `${Math.random() * 10}s`,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 100,
      overflow: 'hidden'
    }}>
      {petals.map(petal => (
        <FlowerPetal 
          key={petal.id}
          style={{
            left: petal.left,
            top: '-20px',
            transform: `rotate(${petal.rotation}deg) scale(${petal.scale})`,
            animation: `fall ${petal.animationDuration} linear infinite`,
            animationDelay: petal.animationDelay
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
