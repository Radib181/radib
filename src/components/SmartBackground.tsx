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
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const createParticle = (x?: number, y?: number): Particle => ({
      x: x ?? Math.random() * window.innerWidth,
      y: y ?? Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      hue: 270 + Math.random() * 80, // Purple to cyan range
      life: 0,
      maxLife: Math.random() * 300 + 200,
    });

    const particleCount = 100;
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle());

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, isActive: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Clear with fade effect
      ctx.fillStyle = "rgba(8, 8, 15, 0.08)";
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Draw connecting lines first (behind particles)
      particles.forEach((particle, i) => {
        if (particle.opacity < 0.1) return;
        
        particles.slice(i + 1).forEach((other) => {
          if (other.opacity < 0.1) return;
          
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.25 * Math.min(particle.opacity, other.opacity);
            const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y);
            gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${other.hue}, 70%, 60%, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Mouse interaction
        if (mouse.isActive) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 250) {
            const force = (250 - dist) / 250;
            particle.vx += (dx / dist) * force * 0.03;
            particle.vy += (dy / dist) * force * 0.03;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.995;
        particle.vy *= 0.995;

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
        particle.opacity = fadeOpacity * (Math.random() * 0.3 + 0.4);

        // Wrap around edges
        if (particle.x < -50) particle.x = width + 50;
        if (particle.x > width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = height + 50;
        if (particle.y > height + 50) particle.y = -50;

        // Draw particle glow
        const glowSize = particle.size * 4;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${particle.opacity * 0.5})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 60%, 50%, ${particle.opacity * 0.2})`);
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 70%, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw mouse glow effect
      if (mouse.isActive) {
        const mouseGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 200
        );
        mouseGradient.addColorStop(0, "hsla(270, 75%, 60%, 0.12)");
        mouseGradient.addColorStop(0.3, "hsla(185, 80%, 50%, 0.06)");
        mouseGradient.addColorStop(0.6, "hsla(320, 70%, 55%, 0.03)");
        mouseGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = mouseGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ambient floating orbs
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const orbX = width * (0.2 + i * 0.3) + Math.sin(time + i * 2) * 100;
        const orbY = height * 0.5 + Math.cos(time * 0.7 + i * 1.5) * 150;
        const orbSize = 150 + Math.sin(time * 0.5 + i) * 50;
        
        const orbGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbSize);
        orbGradient.addColorStop(0, `hsla(${270 + i * 40}, 70%, 50%, 0.04)`);
        orbGradient.addColorStop(0.5, `hsla(${270 + i * 40}, 60%, 40%, 0.02)`);
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        background: "linear-gradient(180deg, hsl(230 25% 5%) 0%, hsl(250 30% 8%) 50%, hsl(230 25% 5%) 100%)"
      }}
    />
  );
};

export default SmartBackground;
