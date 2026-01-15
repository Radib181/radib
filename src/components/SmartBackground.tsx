import { useEffect, useRef, useState } from "react";

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

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

const SmartBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const particlesRef = useRef<Particle[]>([]);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();
  const [isLightMode, setIsLightMode] = useState(false);

  // Watch for theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.documentElement.classList.contains("light"));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, [isLightMode]);

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

    const resizeInterval = setInterval(resize, 2000);

    // Create particles with better visibility
    const createParticle = (x?: number, y?: number): Particle => ({
      x: x ?? Math.random() * window.innerWidth,
      y: y ?? Math.random() * document.documentElement.scrollHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.15,
      hue: 260 + Math.random() * 60,
      life: 0,
      maxLife: Math.random() * 500 + 400,
    });

    // Create stars for twinkling effect
    const createStar = (): Star => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * document.documentElement.scrollHeight,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2,
    });

    const particleCount = 80;
    const starCount = 100;
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle());
    starsRef.current = Array.from({ length: starCount }, () => createStar());

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
      
      // Clear with black
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;
      const stars = starsRef.current;
      const mouse = mouseRef.current;
      const time = Date.now() * 0.001;

      // Draw twinkling stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 10 + star.twinklePhase) * 0.5 + 0.5;
        const currentOpacity = star.opacity * twinkle;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();
      });

      // Draw connecting lines with gradient
      particles.forEach((particle, i) => {
        if (particle.opacity < 0.1) return;
        
        particles.slice(i + 1).forEach((other) => {
          if (other.opacity < 0.1) return;
          
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.15 * Math.min(particle.opacity, other.opacity);
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
            particle.vx += (dx / dist) * force * 0.02;
            particle.vy += (dy / dist) * force * 0.02;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.997;
        particle.vy *= 0.997;

        particle.life++;
        if (particle.life > particle.maxLife) {
          particles[index] = createParticle();
          return;
        }

        const lifeRatio = particle.life / particle.maxLife;
        const fadeOpacity = lifeRatio < 0.1 
          ? lifeRatio * 10 
          : lifeRatio > 0.85 
            ? (1 - lifeRatio) * 6.67 
            : 1;
        particle.opacity = fadeOpacity * (Math.random() * 0.2 + 0.2);

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
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 70%, ${particle.opacity * 0.9})`;
        ctx.fill();
      });

      // Mouse glow effect
      if (mouse.isActive) {
        const mouseGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 200
        );
        mouseGradient.addColorStop(0, "hsla(270, 70%, 55%, 0.08)");
        mouseGradient.addColorStop(0.3, "hsla(280, 60%, 50%, 0.04)");
        mouseGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = mouseGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ambient floating orbs
      for (let i = 0; i < 3; i++) {
        const orbX = width * (0.2 + i * 0.3) + Math.sin(time * 0.5 + i * 2) * 100;
        const orbY = (height * 0.25) + Math.cos(time * 0.4 + i * 1.5) * 120;
        const orbSize = 150 + Math.sin(time * 0.3 + i) * 50;
        
        const orbGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbSize);
        orbGradient.addColorStop(0, `hsla(${260 + i * 30}, 60%, 45%, 0.03)`);
        orbGradient.addColorStop(0.5, `hsla(${270 + i * 25}, 50%, 40%, 0.015)`);
        orbGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = orbGradient;
        ctx.beginPath();
        ctx.arc(orbX, orbY, orbSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Bottom gradient glow (purple/magenta)
      const bottomGradient = ctx.createLinearGradient(0, height - 300, 0, height);
      bottomGradient.addColorStop(0, "transparent");
      bottomGradient.addColorStop(0.5, "hsla(300, 50%, 30%, 0.03)");
      bottomGradient.addColorStop(1, "hsla(280, 60%, 25%, 0.06)");
      ctx.fillStyle = bottomGradient;
      ctx.fillRect(0, height - 300, width, 300);

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

  // Don't render canvas in light mode - just use CSS background
  if (isLightMode) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: "#000000",
      }}
    />
  );
};

export default SmartBackground;
