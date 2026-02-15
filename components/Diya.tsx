import React from 'react';
import { DiyaProps } from '../types';

export const Diya: React.FC<DiyaProps> = ({ className = "", scale = 1 }) => {
  return (
    <div className={`relative ${className}`} style={{ transform: `scale(${scale})` }}>
      <div className="relative w-16 h-24 flex justify-center items-end">
        
        {/* Ambient Glow - Intensified for Dark Theme */}
        <div 
          className="absolute top-0 w-32 h-32 rounded-full bg-orange-600 opacity-40 blur-3xl"
          style={{ 
            animation: 'flicker 2s infinite alternate',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '10%'
          }}
        />

        {/* The Flame */}
        <div className="relative z-10 w-8 h-12 origin-bottom" style={{ animation: 'flame-move 2.5s ease-in-out infinite' }}>
           <div 
             className="absolute bottom-0 w-full bg-gradient-to-t from-orange-600 via-yellow-200 to-transparent"
             style={{
               height: '100%',
               borderRadius: '50% 50% 35% 35%',
               boxShadow: '0px -4px 12px 2px rgba(255, 165, 0, 0.8)',
               animation: 'grow-flame 3s ease-in-out infinite'
             }}
           />
           
           <div 
             className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-5 bg-white opacity-90 blur-[2px]"
             style={{ borderRadius: '50% 50% 40% 40%' }}
           />
           
           <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-black/60" />
        </div>

        {/* The Base */}
        <div className="absolute -bottom-2 w-20 h-10 bg-gradient-to-b from-marigold-deep to-amber-900 rounded-b-[40%] shadow-2xl border-t-2 border-gold-soft/30 z-20 overflow-hidden">
            <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
        </div>
      </div>
    </div>
  );
};