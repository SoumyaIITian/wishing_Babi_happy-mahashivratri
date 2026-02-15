import React, { useEffect, useState } from 'react';
import { PetalStyle } from '../types';

export const PetalRain: React.FC = () => {
  const [petals, setPetals] = useState<PetalStyle[]>([]);

  useEffect(() => {
    const petalCount = 40;
    const newPetals: PetalStyle[] = Array.from({ length: petalCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 8 + 6}s`,
      animationDelay: `${Math.random() * 8}s`,
      opacity: Math.random() * 0.4 + 0.4,
      scale: Math.random() * 0.4 + 0.3,
      rotation: Math.random() * 360,
      colorStart: '#fbbf24',
      colorEnd: '#f97316',
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-20px] w-4 h-4 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"
          style={{
            left: petal.left,
            background: `radial-gradient(circle at 30% 30%, ${petal.colorStart}, ${petal.colorEnd})`,
            opacity: petal.opacity,
            transform: `scale(${petal.scale}) rotate(${petal.rotation}deg)`,
            animation: `fall ${petal.animationDuration} linear infinite, sway 4s ease-in-out infinite alternate`,
            animationDelay: petal.animationDelay,
          }}
        />
      ))}
    </div>
  );
};