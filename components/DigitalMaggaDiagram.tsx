
import React from 'react';
import { EyeIcon, EarIcon, NoseIcon, TongueIcon, BodyIcon } from './icons/SenseIcons';
import { ZeroIcon } from './icons/ZeroIcon';
import { OneIcon } from './icons/OneIcon';

const Node: React.FC<{ title: string; subtitle: string; icon: React.ReactNode; className?: string; }> = ({ title, subtitle, icon, className }) => (
  <div className={`flex flex-col items-center text-center p-4 rounded-lg bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm ${className}`}>
    {icon}
    <h4 className="font-display text-lg mt-2">{title}</h4>
    <p className="text-xs text-gray-400">{subtitle}</p>
  </div>
);

const DigitalMaggaDiagram: React.FC = () => {
  return (
    <section id="diagram" className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif font-semibold text-center mb-12">The Path of Consciousness</h2>
      <div className="relative flex flex-col items-center">
        
        {/* Top Nodes */}
        <div className="flex justify-center gap-8 md:gap-24 w-full mb-8">
          <Node title="0" subtitle="Emptiness / Non-Harming" icon={<ZeroIcon className="text-cyan-400" />} />
          <Node title="1" subtitle="Wisdom / Consideration" icon={<OneIcon className="text-amber-400" />} />
        </div>

        {/* Connecting Lines */}
        <div className="absolute top-20 h-24 w-px bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
        <div className="absolute top-20 h-24 w-px bg-gradient-to-b from-amber-400/50 to-transparent"></div>


        {/* Central Hub - The 5 Senses */}
        <div className="relative my-8 p-6 border border-gray-600 rounded-full bg-gray-900/50">
           <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-full animate-spin [animation-duration:10s] [animation-direction:reverse]"></div>
           <div className="absolute inset-2 border border-amber-400/50 rounded-full animate-spin [animation-duration:12s]"></div>

          <div className="relative grid grid-cols-2 sm:grid-cols-5 gap-4">
              <Node title="Sight" subtitle="รูป" icon={<EyeIcon />} className="w-24 h-24 justify-center" />
              <Node title="Hearing" subtitle="เสียง" icon={<EarIcon />} className="w-24 h-24 justify-center" />
              <Node title="Smell" subtitle="กลิ่น" icon={<NoseIcon />} className="w-24 h-24 justify-center col-span-2 sm:col-span-1" />
              <Node title="Taste" subtitle="รส" icon={<TongueIcon />} className="w-24 h-24 justify-center" />
              <Node title="Touch" subtitle="สัมผัส" icon={<BodyIcon />} className="w-24 h-24 justify-center" />
          </div>
          <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-serif text-gray-400">The 5 Senses Bridge</p>
        </div>
        
        {/* Connecting Line to Being */}
        <div className="h-16 w-px bg-gradient-to-b from-gray-600 to-transparent"></div>

        {/* Bottom Node */}
        <div className="text-center mt-4">
          <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-amber-400/10 animate-pulse">
            <span className="font-serif text-gray-900 text-lg">Life</span>
          </div>
          <h3 className="mt-4 text-2xl font-serif text-gray-200">All Beings</h3>
          <p className="text-gray-400">The "In-Between" State</p>
        </div>
      </div>
    </section>
  );
};

export default DigitalMaggaDiagram;
