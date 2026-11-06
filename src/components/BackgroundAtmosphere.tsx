import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from '../hooks';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
  type: 'dot' | 'cross' | 'ring';
  rotation?: number;
  vRot?: number;
}

export const BackgroundAtmosphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    onResize();
    window.addEventListener('resize', onResize);

    // Color palette strictly from user guidelines:
    // Very light electric blue (#DCE8FF), pale silver (#E8EDF5), soft cool grey (#D6E4F5), faint icy blue (#EEF2F8), translucent white (#DCE3ED)
    const palette = ['#DCE8FF', '#E8EDF5', '#D6E4F5', '#EEF2F8', '#DCE3ED'];

    // Balanced density: 25 on mobile, 45 on desktop
    const count = width < 768 ? 24 : 45;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const typeRoll = Math.random();
      let type: 'dot' | 'cross' | 'ring' = 'dot';
      if (typeRoll > 0.88) type = 'cross';
      else if (typeRoll > 0.80) type = 'ring';

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Calm, smooth, slow drifting
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.10,
        radius: type === 'dot' ? Math.random() * 1.8 + 1.2 : type === 'ring' ? 6 : 4,
        color: palette[Math.floor(Math.random() * palette.length)],
        baseAlpha: Math.random() * 0.28 + 0.14,
        type,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.004,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Render calm atmospheric particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.rotation !== undefined && p.vRot !== undefined) {
            p.rotation += p.vRot;
          }

          // Gentle seamless toroidal wrapping
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }

        ctx.save();
        ctx.translate(p.x, p.y);

        if (p.type === 'dot') {
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.baseAlpha;
          ctx.fill();
        } else if (p.type === 'cross') {
          ctx.rotate(p.rotation || 0);
          ctx.strokeStyle = '#315CF5';
          ctx.globalAlpha = 0.16;
          ctx.lineWidth = 1;
          const s = p.radius;
          ctx.beginPath();
          ctx.moveTo(-s, 0);
          ctx.lineTo(s, 0);
          ctx.moveTo(0, -s);
          ctx.lineTo(0, s);
          ctx.stroke();
        } else if (p.type === 'ring') {
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.strokeStyle = '#315CF5';
          ctx.globalAlpha = 0.12;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        ctx.restore();

        // Connect near particles with ultra-faint hairline filaments
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.10;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(49, 92, 245, 0.4)';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle Full-Page Depth: Gentle Ambient Light Wells */}
      <div 
        className="absolute top-0 right-0 w-[55vw] h-[55vh] rounded-full blur-[140px] opacity-65 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 25%, #DCE8FF 0%, rgba(232, 237, 245, 0.4) 45%, transparent 75%)'
        }}
      />
      <div 
        className="absolute top-[35%] left-0 w-[50vw] h-[50vh] rounded-full blur-[150px] opacity-55 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 50%, #D6E4F5 0%, rgba(238, 242, 248, 0.3) 50%, transparent 75%)'
        }}
      />
      <div 
        className="absolute top-[60%] right-0 w-[50vw] h-[50vh] rounded-full blur-[150px] opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 60%, #EEF2F8 0%, rgba(220, 232, 255, 0.35) 50%, transparent 75%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-[15vw] w-[55vw] h-[45vh] rounded-full blur-[130px] opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 40% 70%, #E8EDF5 0%, rgba(220, 227, 237, 0.3) 45%, transparent 75%)'
        }}
      />

      {/* Full-Page Architectural Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30" />

      {/* Calm Drifting Atmospheric Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};
