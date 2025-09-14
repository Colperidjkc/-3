
import React from 'react';

type HealerStatus = 'idle' | 'scanning' | 'healing';

const ResonanceHealer: React.FC<{ status: HealerStatus }> = ({ status }) => {
  const idleContent = (
    <g opacity="0.3">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0ea5e9" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#0ea5e9" fontSize="12" className="font-serif">
        Bio-Resonance Field Standby
      </text>
    </g>
  );

  const scanningContent = (
      <g>
        {/* Human outline */}
        <path d="M100 20 Q95 25 90 40 T90 60 Q95 75 100 80 Q105 75 110 60 T110 40 Q105 25 100 20" fill="none" stroke="#34d399" strokeWidth="0.5" />
        <circle cx="100" cy="15" r="5" fill="none" stroke="#34d399" strokeWidth="0.5" />
        {/* Scan line */}
        <line x1="70" y1="10" x2="130" y2="10" stroke="#fde047" strokeWidth="1.5" strokeLinecap="round">
            <animate attributeName="y1" values="10;90;10" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y2" values="10;90;10" dur="2s" repeatCount="indefinite" />
        </line>
        <text x="50%" y="95%" dominantBaseline="hanging" textAnchor="middle" fill="#fde047" fontSize="8" className="font-display animate-pulse">
            SCANNING BIO-SIGNATURE...
        </text>
      </g>
  );

  const healingContent = (
      <g>
        <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="50%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
        </defs>
        {/* Sine Waves */}
        <path d="M 0 50 C 50 20, 150 80, 200 50" stroke="url(#waveGrad)" strokeWidth="1" fill="none" strokeOpacity="0.8">
            <animate attributeName="d" values="M 0 50 C 50 20, 150 80, 200 50; M 0 50 C 50 80, 150 20, 200 50; M 0 50 C 50 20, 150 80, 200 50" dur="3s" repeatCount="indefinite" />
        </path>
         <path d="M 0 50 C 50 80, 150 20, 200 50" stroke="url(#waveGrad)" strokeWidth="0.5" fill="none" strokeOpacity="0.6">
            <animate attributeName="d" values="M 0 50 C 50 80, 150 20, 200 50; M 0 50 C 50 20, 150 80, 200 50; M 0 50 C 50 80, 150 20, 200 50" dur="4s" repeatCount="indefinite" />
        </path>

         {/* Particle Field */}
        {[...Array(30)].map((_, i) => (
            <circle key={i} cx={Math.random() * 200} cy={Math.random() * 100} r={0.5 + Math.random()} fill="#34d399" opacity="0.7">
                <animate attributeName="cx" values={`${Math.random() * 200};${Math.random() * 200};${Math.random() * 200}`} dur={`${3 + Math.random() * 4}s`} repeatCount="indefinite" />
                <animate attributeName="cy" values={`${Math.random() * 100};${Math.random() * 100};${Math.random() * 100}`} dur={`${3 + Math.random() * 4}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0; 0.7; 0" dur={`${2 + Math.random() * 2}s`} repeatCount="indefinite" />
            </circle>
        ))}
         <text x="50%" y="95%" dominantBaseline="hanging" textAnchor="middle" fill="#a78bfa" fontSize="8" className="font-display animate-pulse">
            TRANSMITTING RESONANCE FREQUENCIES...
        </text>
      </g>
  );

  const renderStatus = () => {
    switch(status) {
        case 'scanning': return scanningContent;
        case 'healing': return healingContent;
        case 'idle':
        default: return idleContent;
    }
  }

  return (
    <div className="absolute inset-0 z-0">
      <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice">
        {renderStatus()}
      </svg>
    </div>
  );
};

export default ResonanceHealer;
