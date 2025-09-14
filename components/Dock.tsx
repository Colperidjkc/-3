
import React from 'react';
import type { ActiveView } from './ArayaOS';
import { GalaxyIcon, ChantIcon, ChatIcon, JournalIcon, WellnessIcon } from './icons/DockIcons';

interface DockButtonProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const DockButton: React.FC<DockButtonProps> = ({ label, icon, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors group"
    aria-label={`Open ${label}`}
  >
    <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-900/50 group-hover:bg-gray-700/50 transition-all duration-300 relative ${isActive ? 'bg-cyan-400/20' : ''}`}>
       {icon}
       {isActive && <div className="absolute -bottom-2 w-1.5 h-1.5 bg-cyan-300 rounded-full"></div>}
    </div>
    <span className="text-xs">{label}</span>
  </button>
);


const Dock: React.FC<{ activeView: ActiveView, setActiveView: (view: ActiveView) => void }> = ({ activeView, setActiveView }) => {
  return (
    <footer className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 p-2">
      <div className="flex items-center gap-4 bg-black/30 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-3 shadow-2xl">
        <DockButton
            label="Galaxy"
            icon={<GalaxyIcon />}
            isActive={activeView === 'GALAXY'}
            onClick={() => setActiveView('GALAXY')}
        />
         <DockButton
            label="Wellness"
            icon={<WellnessIcon />}
            isActive={activeView === 'WELLNESS'}
            onClick={() => setActiveView('WELLNESS')}
        />
         <DockButton
            label="Chant"
            icon={<ChantIcon />}
            isActive={activeView === 'CHANT'}
            onClick={() => setActiveView('CHANT')}
        />
         <DockButton
            label="Chat"
            icon={<ChatIcon />}
            isActive={activeView === 'CHAT'}
            onClick={() => setActiveView('CHAT')}
        />
         <DockButton
            label="Practice"
            icon={<JournalIcon />}
            isActive={activeView === 'PRACTICE'}
            onClick={() => setActiveView('PRACTICE')}
        />
      </div>
    </footer>
  );
};

export default Dock;
