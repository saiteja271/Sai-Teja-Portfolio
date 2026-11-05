import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer || reducedMotion) return;

    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[data-cursor-hover]') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth trailing animation loop
    const follow = () => {
      setTrailing((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible, position.x, position.y, reducedMotion]);

  if (reducedMotion || !isVisible) return null;

  return (
    <>
      {/* Precision Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 0 : 1})`,
          width: '6px',
          height: '6px',
          backgroundColor: '#315CF5',
        }}
      />
      {/* Trailing Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out hidden md:block"
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0) scale(${isHovered ? 1.6 : 1})`,
          width: '32px',
          height: '32px',
          border: isHovered ? '1.5px solid rgba(49, 92, 245, 0.7)' : '1px solid rgba(23, 23, 23, 0.25)',
          backgroundColor: isHovered ? 'rgba(49, 92, 245, 0.08)' : 'transparent',
        }}
      />
    </>
  );
};
