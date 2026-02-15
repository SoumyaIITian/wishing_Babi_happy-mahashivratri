import React, { useState } from 'react';
import { TrishulIcon } from './TrishulIcon';

export const WishCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-auto flex items-center justify-center z-20 perspective-1400 py-12">
      <div
        className={`relative w-[280px] h-[380px] cursor-pointer transition-transform duration-1000 transform-style-3d`}
        onClick={toggleCard}
        style={{
          transform: isOpen ? 'rotateX(5deg)' : 'rotateX(15deg)'
        }}
      >
        <div className={`relative w-full h-full transition-all duration-1000 transform-style-3d`}>

          {/* INSIDE RIGHT (Static Message Area) */}
          <div className="absolute inset-0 bg-white border border-gold-soft/50 rounded-xl shadow-2xl flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-heading text-4xl text-marigold-deep mb-4">Amar sona Babi Sarkar</h3>
            <div className="font-body text-slate-800 text-base leading-relaxed space-y-3">
              <p className="font-medium">May Lord Shiva and Ma Parvati bless our bond with infinite love.</p>
              <p>I pray for your beautiful smile to light up our world every single day.</p>
              <p className="mt-4 text-marigold-deep font-bold text-lg italic">You are my Shaktii.</p>
              <div className="mt-6 text-sm font-semibold opacity-60">- Your loving Husband ❤️</div>
            </div>
            <div className="absolute bottom-4 right-4 opacity-10">
              <TrishulIcon className="w-16 h-16" />
            </div>
          </div>

          {/* FRONT COVER */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-midnight-purple to-midnight-glow border border-gold-highlight/30 rounded-xl shadow-2xl flex flex-col items-center justify-center origin-left transition-transform duration-1000 transform-style-3d backface-hidden z-20`}
            style={{
              transform: isOpen ? 'rotateY(-150deg)' : 'rotateY(0deg)',
            }}
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 rounded-xl" />
            <div className="border-2 border-gold-highlight/40 rounded-lg p-6 flex flex-col items-center bg-black/20 backdrop-blur-sm">
              <TrishulIcon className="w-20 h-20 mb-4 text-gold-highlight drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
              <h2 className="font-heading text-4xl text-white drop-shadow-lg text-center leading-tight">
                Happy <br /> Maha Shivratri
              </h2>
              <div className="w-12 h-px bg-gold-soft mt-4" />
              <p className="font-body text-gold-soft mt-4 text-xs tracking-widest uppercase animate-pulse">Tap to open</p>
            </div>
          </div>

          {/* INSIDE LEFT (Back of front cover) */}
          <div
            className={`absolute inset-0 bg-white border-r border-gold-soft/20 rounded-xl shadow-lg flex items-center justify-center origin-left transition-transform duration-1000 transform-style-3d backface-hidden z-10`}
            style={{
              transform: isOpen ? 'rotateY(-150deg) rotateY(180deg)' : 'rotateY(180deg)',
            }}
          >
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <span className="text-5xl mb-2">🔱</span>
              <p className="font-heading text-3xl text-marigold-deep">Om Namah Shivaya</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">Divine Blessings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};