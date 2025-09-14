
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-gray-300 group-hover:text-amber-300 transition-colors"
  >
    {children}
  </svg>
);

export const EyeIcon: React.FC = () => (
  <IconWrapper>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);

export const EarIcon: React.FC = () => (
  <IconWrapper>
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 6a6.5 6.5 0 0 0-7 0" />
    <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2.5 2.5 0 0 0 5 0V8.5Z" />
  </IconWrapper>
);

export const NoseIcon: React.FC = () => (
  <IconWrapper>
     <path d="M12 22a4 4 0 0 0 4-4v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3a4 4 0 0 0 4 4Z" />
    <path d="M12 2v11" />
    <path d="M7 6c0-2.5 2-2.5 3-2" />
    <path d="M17 6c0-2.5-2-2.5-3-2" />
  </IconWrapper>
);

export const TongueIcon: React.FC = () => (
  <IconWrapper>
    <path d="M4 5.33C4 3.49 5.49 2 7.33 2h9.33C18.51 2 20 3.49 20 5.33V12a8 8 0 0 1-8 8 8 8 0 0 1-8-8V5.33Z" />
    <path d="M12 12h.01" />
    <path d="M12 15h.01" />
    <path d="M12 9h.01" />
  </IconWrapper>
);

export const BodyIcon: React.FC = () => (
  <IconWrapper>
    <path d="M12.5 2.5c4.5 1 8 5.4 8 10.5v2.2c0 1-.4 1.8-1 2.3v0c-1.3 1-3.3 1-5 .5" />
    <path d="M11.5 2.5c-4.5 1-8 5.4-8 10.5v2.2c0 1 .4 1.8 1 2.3v0c1.3 1 3.3 1 5 .5" />
    <path d="m11 12.5 2-2 2 2" />
    <path d="m5.5 12.5 2 2 2-2" />
  </IconWrapper>
);
