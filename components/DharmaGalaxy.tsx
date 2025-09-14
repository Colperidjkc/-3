
import React, { useState, useEffect } from 'react';
import { TIPITAKA_STRUCTURE } from '../constants';
import type { BookSummary } from '../types';

interface StarProps {
  book: BookSummary;
  size: number;
  x: number;
  y: number;
  delay: number;
}

const Star: React.FC<StarProps> = ({ book, size, x, y, delay }) => (
  <div
    className="absolute group"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animation: `fadeInGlow ${1 + delay}s ease-in-out forwards`,
      opacity: 0,
    }}
  >
    <div
      className="w-2 h-2 rounded-full bg-cyan-200 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_3px_#a5f3fc]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animation: `subtlePulse ${4 + delay}s infinite ease-in-out`,
      }}
    />
    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max p-2 text-xs bg-gray-900/80 text-amber-200 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 border border-gray-700">
      Vol {book.volume}: {book.title}
    </div>
  </div>
);

const Constellation: React.FC<{ books: BookSummary[], cx: number, cy: number, radius: number, color: string, title: string }> = ({ books, cx, cy, radius, color, title }) => {
  const stars = books.map((book, index) => {
    const angle = (index / books.length) * 2 * Math.PI;
    const r = radius * (0.5 + Math.random() * 0.5); // Randomize radius for organic look
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return {
      book,
      size: 2 + Math.random() * 2,
      x,
      y,
      delay: Math.random() * 2,
    };
  });

  return (
    <div className="absolute inset-0">
      <div 
        className="absolute rounded-full"
        style={{
            left: `${cx}%`,
            top: `${cy}%`,
            width: `${radius*2}%`,
            height: `${radius*2}%`,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 150px 20px ${color}10, inset 0 0 80px 10px ${color}10`,
            border: `1px solid ${color}20`
        }}
      />
      <h3 className="font-serif text-2xl absolute" style={{left: `${cx}%`, top: `${cy}%`, transform: 'translate(-50%, -50%)', color, textShadow: `0 0 10px ${color}`}}>{title}</h3>
      {stars.map((star, index) => <Star key={index} {...star} />)}
    </div>
  );
};


const DharmaGalaxy: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    
    const parallaxX = (mousePos.x / window.innerWidth - 0.5) * -50;
    const parallaxY = (mousePos.y / window.innerHeight - 0.5) * -50;

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
            className="w-[110%] h-[110%] -m-[5%]"
            style={{
                transform: `translate(${parallaxX}px, ${parallaxY}px)`,
                transition: 'transform 0.2s ease-out'
            }}
        >
            <Constellation 
                title="Vinaya"
                books={TIPITAKA_STRUCTURE.vinaya.books}
                cx={25} cy={30} radius={18}
                color="#fde047"
            />
            <Constellation 
                title="Sutta"
                books={TIPITAKA_STRUCTURE.sutta.books}
                cx={50} cy={65} radius={25}
                color="#a5f3fc"
            />
            <Constellation 
                title="Abhidhamma"
                books={TIPITAKA_STRUCTURE.abhidhamma.books}
                cx={78} cy={40} radius={20}
                color="#fca5a5"
            />
        </div>
    </div>
  );
};

export default DharmaGalaxy;
