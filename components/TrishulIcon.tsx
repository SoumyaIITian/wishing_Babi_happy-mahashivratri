import React from 'react';

interface TrishulIconProps {
  className?: string;
  color?: string;
}

export const TrishulIcon: React.FC<TrishulIconProps> = ({ className = "w-12 h-12", color = "stroke-gold-soft" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} ${color}`}
      fill="none" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Staff */}
      <path d="M50 85 L50 15" />
      
      {/* Left Prong */}
      <path d="M50 55 C 30 55, 20 45, 20 25" />
      
      {/* Right Prong */}
      <path d="M50 55 C 70 55, 80 45, 80 25" />
      
      {/* Center Spear Tip */}
      <path d="M50 15 L45 25 L55 25 Z" fill="currentColor" className="text-marigold-deep opacity-80" stroke="none" />
      
      {/* Left Spear Tip */}
      <path d="M20 25 L15 35 L25 35 Z" fill="currentColor" className="text-marigold-deep opacity-80" stroke="none" />
      
      {/* Right Spear Tip */}
      <path d="M80 25 L75 35 L85 35 Z" fill="currentColor" className="text-marigold-deep opacity-80" stroke="none" />
      
      {/* Damru (Optional playful addition, kept minimal) */}
      <path d="M50 65 L60 70 L50 75 L40 70 Z" className="fill-gold-highlight opacity-50" stroke="none"/>
    </svg>
  );
};