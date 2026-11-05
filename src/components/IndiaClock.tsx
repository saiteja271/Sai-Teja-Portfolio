import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const IndiaClock: React.FC = () => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setTimeString(formatted);
      } catch {
        setTimeString('IST');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-secondary hover:text-primary transition-colors shadow-subtle"
      title="Current local time in Andhra Pradesh, India (IST)"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Clock className="w-3.5 h-3.5 text-secondary opacity-70" />
      <span className="tracking-tight font-medium text-primary">{timeString || '00:00:00 IST'}</span>
      <span className="text-[10px] text-secondary/80 hidden sm:inline border-l border-border pl-2">IST (UTC+5:30)</span>
    </div>
  );
};
