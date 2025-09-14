
import React, { useState } from 'react';
import DharmaGalaxy from './DharmaGalaxy';
import Dock from './Dock';
import ChantViewer from './ChantViewer';
import AriyaMindChat from './AriyaMindChat';
import DailyPractice from './DailyPractice';
import WellnessInterface from './WellnessInterface';

export type ActiveView = 'GALAXY' | 'CHANT' | 'CHAT' | 'PRACTICE' | 'WELLNESS';

const AppView: React.FC<{ view: ActiveView, onClose: () => void }> = ({ view, onClose }) => {
  const renderView = () => {
    switch(view) {
      case 'CHANT': return <ChantViewer />;
      case 'CHAT': return <AriyaMindChat />;
      case 'PRACTICE': return <DailyPractice />;
      case 'WELLNESS': return <WellnessInterface />;
      default: return null;
    }
  }

  if (view === 'GALAXY') return null;

  return (
    <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-md z-30 animate-fade-in-glow">
      <div className="relative container mx-auto p-4 md:p-8 h-full">
         <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700/50 hover:text-white transition-colors"
          aria-label="Close View"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="h-full overflow-y-auto">
            {renderView()}
        </div>
      </div>
    </div>
  );
};


const ArayaOS: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('GALAXY');

  return (
    <div className="relative w-screen h-screen bg-gray-900">
       <div className="absolute inset-0 -z-0 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
       <div className="absolute top-0 left-0 -z-0 h-full w-full bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>

      <header className="absolute top-0 left-1/2 -translate-x-1/2 text-center p-4 z-20 pointer-events-none">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-amber-300 tracking-widest uppercase animate-pulse">
          Araya<span className="text-cyan-300">3</span> OS
        </h1>
        <p className="mt-1 text-sm text-cyan-200 font-serif">The Integrated Mind Simulation</p>
      </header>
      
      <DharmaGalaxy isVisible={activeView === 'GALAXY'} />
      
      <AppView view={activeView} onClose={() => setActiveView('GALAXY')} />

      <Dock activeView={activeView} setActiveView={setActiveView} />
    </div>
  );
};

export default ArayaOS;
