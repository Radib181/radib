import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  life: number;
  maxLife: number;
}

const SmartBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = document.documentElement.scrollHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${document.documentElement.scrollHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Re-check height periodically for dynamic content
    const resizeInterval = setInterval(resize, 2000);

    // Initialize particles with lower opacity
    const createParticle = (x?: number, y?: number): Particle => ({
      x: x ?? Math.random() * window.innerWidth,
      y: y ?? Math.random() * document.documentElement.scrollHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.25 + 0.05, // Much lower opacity
      hue: 270 + Math.random() * 80,
      life: 0,
      maxLife: Math.random() * 400 + 300,
    });

    const particleCount = 60; // Fewer particles
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle());

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY, isActive: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;
      
      // Clear with solid black + slight fade
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Draw connecting lines (very subtle)
      particles.forEach((particle, i) => {
        if (particle.opacity < 0.05) return;
        
        particles.slice(i + 1).forEach((other) => {
          if (other.opacity < 0.05) return;
          
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.08 * Math.min(particle.opacity, other.opacity);
            const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y);
            gradient.addColorStop(0, `hsla(${particle.hue}, 60%, 50%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${other.hue}, 60%, 50%, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Mouse interaction (subtle)
        if (mouse.isActive) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 200) {
            const force = (200 - dist) / 200;
            particle.vx += (dx / dist) * force * 0.015;
            particle.vy += (dy / dist) * force * 0.015;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.998;
        particle.vy *= 0.998;

        // Life cycle
        particle.life++;
        if (particle.life > particle.maxLife) {
          particles[index] = createParticle();
          return;
        }

        // Fade in/out based on life
        const lifeRatio = particle.life / particle.maxLife;
        const fadeOpacity = lifeRatio < 0.1 
          ? lifeRatio * 10 
          : lifeRatio > 0.9 
            ? (1 - lifeRatio) * 10 
            : 1;
        particle.opacity = fadeOpacity * (Math.random() * 0.15 + 0.1); // Lower opacity

        // Wrap around edges
        if (particle.x < -50) particle.x = width + 50;
        if (particle.x > width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = height + 50;
        if (particle.y > height + 50) particle.y = -50;

        // Draw particle glow (very subtle)
        const glowSize = particle.size * 3;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 50%, 50%, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 60%, 60%, ${particle.opacity * 0.6})`;
        ctx.fill();
      });

      // Draw mouse glow effect (very subtle)
      if (mouse.isActive) {
        const mouseGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 150
        );
        mouseGradient.addColorStop(0, "hsla(270, 60%, 50%, 0.04)");
        mouseGradient.addColorStop(0.5, "hsla(185, 60%, 40%, 0.02)");
        mouseGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = mouseGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ambient floating orbs (very subtle)
      const time = Date.now() * 0.0008;
      for (let i = 0; i < 2; i++) {
        const orbX = width * (0.25 + i * 0.5) + Math.sin(time + i * 2) * 80;
        const orbY = (height * 0.3) + Math.cos(time * 0.6 + i * 1.5) * 100;
        const orbSize = 100 + Math.sin(time * 0.4 + i) * 30;
        
        const orbGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbSize);
        orbGradient.addColorStop(0, `hsla(${270 + i * 50}, 50%, 40%, 0.015)`);
        orbGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = orbGradient;
        ctx.beginPath();
        ctx.arc(orbX, orbY, orbSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(resizeInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: "#000000"
      }}
    />
  );
};

export default SmartBackground;
