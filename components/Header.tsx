
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-16">
      <h1 className="font-display text-4xl md:text-6xl font-bold text-amber-300 tracking-widest uppercase animate-pulse">
        Araya<span className="text-cyan-300">3</span>
      </h1>
      <p className="mt-2 text-lg text-cyan-200 font-serif">The Digital Path to Metta</p>
    </header>
  );
};

export default Header;
