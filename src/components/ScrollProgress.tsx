import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-accent transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
