import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
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

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking with smooth spring damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / width - 0.5;
      const relY = (e.clientY - rect.top) / height - 0.5;
      mouse.targetX = relX * 1.5;
      mouse.targetY = relY * 1.5;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Create 3D spherical / torus constellation points
    const points: Point3D[] = [];
    const count = Math.min(Math.floor((width * height) / 16000), 50);
    const radiusSphere = Math.min(width, height) * 0.32;

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = radiusSphere * (0.6 + Math.random() * 0.4);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      points.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        radius: Math.random() * 1.8 + 1,
        color: Math.random() > 0.45 ? '#315CF5' : '#94A3B8'
      });
    }

    let angleX = 0;
    let angleY = 0;
    const fov = 340;

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!reducedMotion) {
        angleY += 0.003 + mouse.x * 0.01;
        angleX += 0.0015 + mouse.y * 0.008;
      }

      ctx.clearRect(0, 0, width, height);

      // Center of 3D projection: slightly offset to align with the right-column portrait composition
      const originX = width > 1024 ? width * 0.72 : width * 0.5;
      const originY = height * 0.48;

      // Project and draw orbital depth rings
      const ringRadius = radiusSphere * 1.05;
      ctx.save();
      ctx.translate(originX, originY);
      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadius, ringRadius * 0.42, angleY * 0.4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(49, 92, 245, 0.09)';
      ctx.setLineDash([6, 10]);
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadius * 1.35, ringRadius * 0.55, -angleY * 0.25, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(23, 23, 23, 0.04)';
      ctx.setLineDash([]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Project 3D points
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      interface ProjectedPoint {
        px: number;
        py: number;
        scale: number;
        color: string;
        radius: number;
        z: number;
      }

      const projected: ProjectedPoint[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // 3D Rotation Y
        const x1 = p.baseX * cosY - p.baseZ * sinY;
        const z1 = p.baseZ * cosY + p.baseX * sinY;

        // 3D Rotation X
        const y2 = p.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.baseY * sinX;

        // Perspective division
        const distance = fov + z2;
        if (distance > 10) {
          const scale = fov / distance;
          const px = originX + x1 * scale;
          const py = originY + y2 * scale;

          projected.push({
            px,
            py,
            scale,
            color: p.color,
            radius: p.radius * Math.max(0.4, scale),
            z: z2
          });
        }
      }

      // Sort points by z for proper depth rendering
      projected.sort((a, b) => a.z - b.z);

      // Connect near points with hairline depth lines
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dist = Math.hypot(p1.px - p2.px, p1.py - p2.py);
          if (dist < 85) {
            const alpha = (1 - dist / 85) * 0.12 * Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(49, 92, 245, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Render projected points
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#315CF5'
          ? `rgba(49, 92, 245, ${Math.min(0.65, p.scale * 0.5)})`
          : `rgba(104, 104, 104, ${Math.min(0.35, p.scale * 0.3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-85 z-0"
      aria-hidden="true"
    />
  );
};
