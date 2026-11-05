import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Node {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export const AbstractCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive repulsion/attraction
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate balanced node constellation
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 45);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.2,
        color: Math.random() > 0.4 ? '#315CF5' : '#94A3B8',
      });
    }

    let angle = 0;

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render subtle abstract geometric orbital rings
      const centerX = width * 0.65;
      const centerY = height * 0.45;
      angle += reducedMotion ? 0 : 0.003;

      // Orbit 1: Subtle blue accent ring
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(
        centerX + Math.sin(angle * 0.5) * 15,
        centerY + Math.cos(angle * 0.5) * 10,
        180,
        120,
        angle * 0.2,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = 'rgba(49, 92, 245, 0.09)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.stroke();
      ctx.restore();

      // Orbit 2: Secondary subtle ring
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(
        centerX,
        centerY,
        260,
        170,
        -angle * 0.15,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = 'rgba(23, 23, 23, 0.04)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Update and draw constellation nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Bounce boundaries
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Subtle reaction to mouse
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            node.x -= (dx / dist) * force * 1.5;
            node.y -= (dy / dist) * force * 1.5;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color === '#315CF5' ? 'rgba(49, 92, 245, 0.45)' : 'rgba(104, 104, 104, 0.25)';
        ctx.fill();

        // Connect nearby nodes with subtle hairline lines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const distNodes = Math.hypot(node.x - other.x, node.y - other.y);

          if (distNodes < 110) {
            const alpha = (1 - distNodes / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(49, 92, 245, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-80"
      aria-hidden="true"
    />
  );
};
