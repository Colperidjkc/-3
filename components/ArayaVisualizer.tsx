
import React from 'react';

export const ArayaVisualizer: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const animationDuration = isLoading ? '1.5s' : '4s';
  const coreScale = isLoading ? 'scale(1.1)' : 'scale(1)';
  const coreOpacity = isLoading ? 1 : 0.8;

  return (
    <div className="h-40 w-full flex items-center justify-center p-4 overflow-hidden bg-gray-900/30 border-b border-gray-700/50">
      <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
        {/* Defs for gradients */}
        <defs>
          <radialGradient id="gradCore">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gradRing1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a5f3fc" />
          </linearGradient>
           <linearGradient id="gradRing2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>
        </defs>
        
        {/* Glow Effects */}
        <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>

        {/* Rings */}
        <g transform="translate(100, 50)" filter="url(#glow)">
          {/* Outer Ring */}
          <circle 
            cx="0" cy="0" r="45" 
            fill="none" 
            stroke="url(#gradRing1)" 
            strokeWidth="0.5" 
            strokeOpacity="0.6"
          >
             <animate 
              attributeName="stroke-dasharray" 
              values="0, 283; 283, 0; 0, 283"
              dur="8s"
              repeatCount="indefinite"
             />
          </circle>

          {/* Middle Ring */}
           <circle 
            cx="0" cy="0" r="30" 
            fill="none" 
            stroke="url(#gradRing2)" 
            strokeWidth="0.75" 
            strokeOpacity="0.8"
          >
             <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 0 0"
                to="360 0 0"
                dur="15s"
                repeatCount="indefinite"
            />
          </circle>
          
          {/* Inner Pulse */}
           <circle 
            cx="0" cy="0" r="15" 
            fill="none" 
            stroke="#a5f3fc"
            strokeWidth="0.5" 
            strokeOpacity="0.7"
          >
             <animate 
                attributeName="r" 
                values="15; 18; 15"
                dur={animationDuration}
                repeatCount="indefinite"
             />
             <animate 
                attributeName="stroke-opacity" 
                values="0.7; 1; 0.7"
                dur={animationDuration}
                repeatCount="indefinite"
             />
          </circle>

          {/* Core */}
          <circle 
            cx="0" cy="0" r="8" 
            fill="url(#gradCore)"
            style={{
                transition: `all ${animationDuration} ease-in-out`,
                transform: coreScale,
                opacity: coreOpacity,
                transformOrigin: 'center'
            }}
          >
             <animate 
                attributeName="r" 
                values="8; 9; 8"
                dur="3s"
                repeatCount="indefinite"
             />
          </circle>
        </g>
      </svg>
    </div>
  );
};
