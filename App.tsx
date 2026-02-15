import React from 'react';
import { PetalRain } from './components/PetalRain';
import { WishCard } from './components/WishCard';
import { Diya } from './components/Diya';
import { Footer } from './components/Footer';
import { ShivParvati } from './components/ShivParvati';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-midnight-deep transition-colors duration-1000">
      
      {/* Background Ambience */}
      <PetalRain />
      
      {/* Midnight Gradient Layers */}
      <div className="fixed inset-0 bg-gradient-to-t from-midnight-purple/40 via-transparent to-black/60 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,16,101,0.3)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Main Content Container */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-between px-4 py-12">
        
        {/* Header Section */}
        <header className="text-center space-y-2">
          <h1 className="font-heading text-6xl md:text-8xl text-gold-highlight drop-shadow-[0_4px_15px_rgba(255,215,0,0.4)] animate-float">
            Maha Shivratri
          </h1>
          <p className="font-body text-gold-soft/60 tracking-[0.3em] uppercase text-[10px] md:text-xs">
            Divine Union of Shiva & Shakti
          </p>
        </header>

        {/* Cute Ghibli Animation Section */}
        <ShivParvati />

        {/* Central Interactive Element */}
        <div className="w-full flex justify-center mb-12">
           <WishCard />
        </div>

        {/* Decorative Diyas at bottom */}
        <div className="flex justify-center gap-24 md:gap-48 w-full max-w-4xl pb-8">
            <Diya className="opacity-100" scale={1.2} />
            <Diya className="opacity-100" scale={1.2} />
        </div>

      </main>

      {/* Signature */}
      <Footer />
    </div>
  );
};

export default App;