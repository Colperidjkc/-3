
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {children}
  </svg>
);

export const GalaxyIcon: React.FC = () => (
  <IconWrapper className="group-hover:text-cyan-300 transition-colors">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </IconWrapper>
);

export const WellnessIcon: React.FC = () => (
    <IconWrapper className="group-hover:text-lime-300 transition-colors">
        <path d="M12 6V4" />
        <path d="M12 12v-2" />
        <path d="M12 18v-2" />
        <path d="M18 12h2" />
        <path d="M4 12h2" />
        <path d="m16.5 7.5-.88.88" />
        <path d="M6.38 17.62l.88-.88" />
        <path d="m17.62 17.62-.88-.88" />
        <path d="m7.26 7.26-.88.88" />
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
    </IconWrapper>
);


export const ChantIcon: React.FC = () => (
    <IconWrapper className="group-hover:text-amber-300 transition-colors">
        <path d="M12 6v13" />
        <path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
        <path d="M12 19a3 3 0 0 0 3-3V6" />
  </IconWrapper>
);

export const ChatIcon: React.FC = () => (
  <IconWrapper className="group-hover:text-green-300 transition-colors">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
  </IconWrapper>
);

export const JournalIcon: React.FC = () => (
    <IconWrapper className="group-hover:text-red-300 transition-colors">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
    </IconWrapper>
);
