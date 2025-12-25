import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface MousePosition {
  x: number;
  y: number;
}

function DottedSphere({ 
  position, 
  radius, 
  ringColor = "#ff6b35",
  dotColor = "#ff9500",
  mouse,
  parallaxStrength = 1,
  ringTilt = Math.PI / 2.5
}: { 
  position: [number, number, number]; 
  radius: number;
  ringColor?: string;
  dotColor?: string;
  mouse: MousePosition;
  parallaxStrength?: number;
  ringTilt?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  const dotTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;
    
    // Dark sphere base
    ctx.fillStyle = '#0a0a14';
    ctx.fillRect(0, 0, 1024, 1024);
    
    const dotSpacing = 20;
    const dotRadius = 4;
    
    // Create glowing dots pattern
    for (let x = dotSpacing / 2; x < 1024; x += dotSpacing) {
      for (let y = dotSpacing / 2; y < 1024; y += dotSpacing) {
        // Outer glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, dotRadius * 3);
        glowGradient.addColorStop(0, dotColor);
        glowGradient.addColorStop(0.3, `${dotColor}aa`);
        glowGradient.addColorStop(0.6, `${dotColor}44`);
        glowGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(x, y, dotRadius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright center
        const centerGradient = ctx.createRadialGradient(x, y, 0, x, y, dotRadius);
        centerGradient.addColorStop(0, '#ffffff');
        centerGradient.addColorStop(0.4, dotColor);
        centerGradient.addColorStop(1, `${dotColor}88`);
        ctx.fillStyle = centerGradient;
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 3);
    return texture;
  }, [dotColor]);

  useFrame((state) => {
    if (groupRef.current) {
      const targetX = position[0] + mouse.x * 0.4 * parallaxStrength;
      const targetY = position[1] + mouse.y * 0.25 * parallaxStrength;
      const targetZ = position[2] + mouse.x * 0.15 * parallaxStrength;
      
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.015;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.015;
      groupRef.current.position.z += (targetZ - groupRef.current.position.z) * 0.015;
      
      groupRef.current.rotation.x += (mouse.y * 0.15 - groupRef.current.rotation.x) * 0.008;
      groupRef.current.rotation.y += 0.002;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.15;
      
      // Subtle pulsing animation
      const pulse = Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.5 + 0.5;
      const material = ringRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 2.5 + pulse * 1.5;
      
      // Subtle scale pulse
      const scalePulse = 1 + Math.sin(state.clock.elapsedTime * 1.2 + position[1]) * 0.02;
      ringRef.current.scale.setScalar(scalePulse);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main sphere with dotted texture */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          map={dotTexture}
          emissive={dotColor}
          emissiveIntensity={0.3}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>
      
      {/* Glowing ring - thick and prominent */}
      <mesh ref={ringRef} rotation={[ringTilt, 0, 0]}>
        <torusGeometry args={[radius * 1.05, radius * 0.12, 32, 100]} />
        <meshStandardMaterial
          color={ringColor}
          emissive={ringColor}
          emissiveIntensity={3}
          roughness={0.1}
          metalness={0.95}
          transparent
          opacity={0.98}
        />
      </mesh>
      
      {/* Inner glow ring for extra luminosity */}
      <mesh rotation={[ringTilt, 0, 0]}>
        <torusGeometry args={[radius * 1.05, radius * 0.18, 16, 100]} />
        <meshBasicMaterial
          color={ringColor}
          transparent
          opacity={0.25}
        />
      </mesh>
      
      {/* Point light for ambient glow */}
      <pointLight color={ringColor} intensity={3} distance={radius * 10} />
    </group>
  );
}

function FloatingSpheres({ mouse }: { mouse: MousePosition }) {
  const spheresConfig = useMemo(() => [
    { position: [3.2, -1.8, -1] as [number, number, number], radius: 2.2, parallaxStrength: 0.6, ringTilt: Math.PI / 2.2 },
    { position: [-2.8, 1.2, -3] as [number, number, number], radius: 1.6, parallaxStrength: 1.0, ringTilt: Math.PI / 2.5 },
    { position: [0.8, 3, -5] as [number, number, number], radius: 1.1, parallaxStrength: 1.3, ringTilt: Math.PI / 2.8 },
    { position: [-4.5, -2.5, -2] as [number, number, number], radius: 0.8, parallaxStrength: 1.6, ringTilt: Math.PI / 2.3 },
    { position: [5.5, 2.5, -7] as [number, number, number], radius: 0.55, parallaxStrength: 1.9, ringTilt: Math.PI / 2.6 },
  ], []);

  return (
    <>
      {spheresConfig.map((config, i) => (
        <DottedSphere
          key={i}
          position={config.position}
          radius={config.radius}
          mouse={mouse}
          parallaxStrength={config.parallaxStrength}
          ringTilt={config.ringTilt}
          ringColor="#ff7a1a"
          dotColor="#ffaa33"
        />
      ))}
    </>
  );
}

function AmbientParticles({ mouse }: { mouse: MousePosition }) {
  const ref = useRef<THREE.Points>(null);
  const particlesCount = 200;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25 - 5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.008 + mouse.x * 0.08;
      ref.current.rotation.x = mouse.y * 0.04;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ff8833"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({ mouse }: { mouse: MousePosition }) {
  const { camera } = useThree();
  
  useFrame(() => {
    camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.015;
    camera.position.y += (mouse.y * 0.25 - camera.position.y) * 0.015;
    camera.lookAt(0, 0, -3);
  });

  return (
    <>
      <ambientLight intensity={0.08} />
      <directionalLight position={[10, 10, 5]} intensity={0.25} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.15} color="#ff7a1a" />
      <FloatingSpheres mouse={mouse} />
      <AmbientParticles mouse={mouse} />
      <fog attach="fog" args={['#050510', 6, 28]} />
    </>
  );
}

const Background3D = () => {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    const handleMouseDown = () => {
      isDragging.current = true;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        const y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
        setMouse({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none bg-[#050510]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <Scene mouse={mouse} />
      </Canvas>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050510]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#050510]/50 pointer-events-none" />
    </div>
  );
};

export default Background3D;
