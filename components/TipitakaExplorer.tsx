
import React, { useState } from 'react';
import { TIPITAKA_STRUCTURE } from '../constants';
import type { Pitaka } from '../types';

type PitakaKey = 'vinaya' | 'sutta' | 'abhidhamma';

const TabButton: React.FC<{
  label: string;
  romanized: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, romanized, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 p-4 text-center transition-all duration-300 border-b-2 ${
      isActive
        ? 'border-amber-400 text-amber-300'
        : 'border-gray-700 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
    }`}
  >
    <span className="block font-serif text-lg">{label}</span>
    <span className="text-xs font-display tracking-wider uppercase">{romanized}</span>
  </button>
);

const PitakaContent: React.FC<{ pitaka: Pitaka }> = ({ pitaka }) => (
  <div className="p-6 md:p-8">
    <p className="text-center text-gray-300 mb-8">{pitaka.description}</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="font-serif text-xl text-amber-200 mb-4 border-b border-gray-700 pb-2">Major Divisions</h4>
        <ul className="space-y-3">
          {pitaka.divisions.map((div, i) => (
            <li key={i} className="p-3 bg-gray-900/40 rounded-md">
              <p className="font-semibold text-gray-200">{div.title}</p>
              <p className="text-sm text-gray-400">{div.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-serif text-xl text-amber-200 mb-4 border-b border-gray-700 pb-2">Volumes ({pitaka.books.length})</h4>
        <div className="max-h-80 overflow-y-auto pr-2 space-y-2">
          {pitaka.books.map((book) => (
            <div key={book.volume} className="p-3 bg-gray-900/40 rounded-md text-sm">
              <p className="font-semibold text-cyan-300">
                Volume {book.volume}: <span className="text-gray-200">{book.title}</span>
              </p>
              <p className="text-gray-400 mt-1">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


const TipitakaExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PitakaKey>('sutta');

  return (
    <section id="tipitaka" className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-serif font-semibold text-center mb-4">Explore the Tipiṭaka</h2>
      <p className="text-center font-display text-cyan-300 mb-8">The Three Baskets of Pāli Canon</p>
      
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-2xl shadow-black/30 overflow-hidden">
        <div className="flex">
          <TabButton
            label={TIPITAKA_STRUCTURE.vinaya.title}
            romanized={TIPITAKA_STRUCTURE.vinaya.romanizedTitle}
            isActive={activeTab === 'vinaya'}
            onClick={() => setActiveTab('vinaya')}
          />
          <TabButton
            label={TIPITAKA_STRUCTURE.sutta.title}
            romanized={TIPITAKA_STRUCTURE.sutta.romanizedTitle}
            isActive={activeTab === 'sutta'}
            onClick={() => setActiveTab('sutta')}
          />
          <TabButton
            label={TIPITAKA_STRUCTURE.abhidhamma.title}
            romanized={TIPITAKA_STRUCTURE.abhidhamma.romanizedTitle}
            isActive={activeTab === 'abhidhamma'}
            onClick={() => setActiveTab('abhidhamma')}
          />
        </div>
        
        {activeTab === 'vinaya' && <PitakaContent pitaka={TIPITAKA_STRUCTURE.vinaya} />}
        {activeTab === 'sutta' && <PitakaContent pitaka={TIPITAKA_STRUCTURE.sutta} />}
        {activeTab === 'abhidhamma' && <PitakaContent pitaka={TIPITAKA_STRUCTURE.abhidhamma} />}
      </div>
    </section>
  );
};

export default TipitakaExplorer;
