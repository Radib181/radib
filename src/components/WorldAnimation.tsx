import { useEffect, useRef } from "react";

interface GlobePoint {
  lat: number;
  lng: number;
  x: number;
  y: number;
  z: number;
  connections: number[];
}

const WorldAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = rect?.width || 400;
      canvas.height = rect?.height || 400;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate globe points
    const points: GlobePoint[] = [];
    const numPoints = 120;
    
    for (let i = 0; i < numPoints; i++) {
      const lat = Math.acos(2 * Math.random() - 1) - Math.PI / 2;
      const lng = Math.random() * Math.PI * 2;
      
      points.push({
        lat,
        lng,
        x: 0,
        y: 0,
        z: 0,
        connections: [],
      });
    }

    // Create connections
    points.forEach((point, i) => {
      points.forEach((other, j) => {
        if (i !== j) {
          const dist = Math.abs(point.lat - other.lat) + Math.abs(point.lng - other.lng);
          if (dist < 0.8 && point.connections.length < 3) {
            point.connections.push(j);
          }
        }
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;

      // Mouse influence on rotation
      const targetRotation = rotationRef.current + 0.003 + mouseRef.current.x * 0.02;
      rotationRef.current += (targetRotation - rotationRef.current) * 0.1;
      const rotation = rotationRef.current;

      // Draw globe outline glow
      const glowGradient = ctx.createRadialGradient(
        centerX, centerY, radius * 0.8,
        centerX, centerY, radius * 1.3
      );
      glowGradient.addColorStop(0, "hsla(185, 70%, 50%, 0.1)");
      glowGradient.addColorStop(0.5, "hsla(280, 60%, 50%, 0.05)");
      glowGradient.addColorStop(1, "transparent");
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Project and draw points
      const projectedPoints = points.map((point) => {
        const x = Math.cos(point.lat) * Math.cos(point.lng + rotation);
        const y = Math.sin(point.lat);
        const z = Math.cos(point.lat) * Math.sin(point.lng + rotation);

        return {
          ...point,
          x: centerX + x * radius,
          y: centerY + y * radius,
          z,
          visible: z > -0.2,
        };
      });

      // Draw connections first
      ctx.lineWidth = 0.5;
      projectedPoints.forEach((point) => {
        if (!point.visible) return;
        
        point.connections.forEach((connIndex) => {
          const other = projectedPoints[connIndex];
          if (!other.visible) return;

          const opacity = Math.min((point.z + 0.2) * 0.6, (other.z + 0.2) * 0.6);
          if (opacity > 0) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsla(185, 70%, 60%, ${opacity * 0.4})`;
            ctx.stroke();
          }
        });
      });

      // Draw points
      projectedPoints.forEach((point) => {
        if (!point.visible) return;

        const opacity = (point.z + 0.2) * 0.8;
        const size = 1.5 + point.z * 1.5;

        if (opacity > 0) {
          // Glow
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, size * 3
          );
          gradient.addColorStop(0, `hsla(185, 70%, 60%, ${opacity * 0.5})`);
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.fillRect(point.x - size * 3, point.y - size * 3, size * 6, size * 6);

          // Point
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(185, 70%, 70%, ${opacity})`;
          ctx.fill();
        }
      });

      // Orbiting rings
      for (let i = 0; i < 2; i++) {
        const ringRotation = rotation * (i === 0 ? 1.5 : -1) + i * Math.PI / 3;
        const tilt = Math.PI / 6 + i * Math.PI / 8;
        
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radius * 1.15,
          radius * 0.3,
          tilt + ringRotation * 0.1,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `hsla(${185 + i * 40}, 60%, 50%, 0.15)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Orbiting dot
        const dotAngle = ringRotation * 2;
        const dotX = centerX + Math.cos(dotAngle) * radius * 1.15;
        const dotY = centerY + Math.sin(dotAngle) * radius * 0.3 * Math.cos(tilt);
        
        ctx.beginPath();
        ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${185 + i * 40}, 70%, 60%, 0.8)`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto opacity-60"
    />
  );
};

export default WorldAnimation;
