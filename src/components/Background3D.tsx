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
  dotColor = "#ff8c42",
  mouse,
  parallaxStrength = 1
}: { 
  position: [number, number, number]; 
  radius: number;
  ringColor?: string;
  dotColor?: string;
  mouse: MousePosition;
  parallaxStrength?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  const dotTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    ctx.fillStyle = '#0a0a12';
    ctx.fillRect(0, 0, 512, 512);
    
    const dotSpacing = 16;
    const dotRadius = 3;
    
    for (let x = dotSpacing / 2; x < 512; x += dotSpacing) {
      for (let y = dotSpacing / 2; y < 512; y += dotSpacing) {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, dotRadius * 2);
        gradient.addColorStop(0, dotColor);
        gradient.addColorStop(0.5, dotColor);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, dotRadius * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 2);
    return texture;
  }, [dotColor]);

  useFrame((state) => {
    if (groupRef.current) {
      const targetX = position[0] + mouse.x * 0.5 * parallaxStrength;
      const targetY = position[1] + mouse.y * 0.3 * parallaxStrength;
      const targetZ = position[2] + mouse.x * 0.2 * parallaxStrength;
      
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.02;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.02;
      groupRef.current.position.z += (targetZ - groupRef.current.position.z) * 0.02;
      
      groupRef.current.rotation.x += (mouse.y * 0.2 - groupRef.current.rotation.x) * 0.01;
      groupRef.current.rotation.y += 0.003;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          map={dotTexture}
          emissive={dotColor}
          emissiveIntensity={0.15}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      
      <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[radius * 1.1, radius * 0.08, 32, 100]} />
        <meshStandardMaterial
          color={ringColor}
          emissive={ringColor}
          emissiveIntensity={2}
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.95}
        />
      </mesh>
      
      <pointLight color={ringColor} intensity={2} distance={radius * 8} />
    </group>
  );
}

function FloatingSpheres({ mouse }: { mouse: MousePosition }) {
  const spheresConfig = useMemo(() => [
    { position: [3.5, -1.5, -2] as [number, number, number], radius: 2, parallaxStrength: 0.8 },
    { position: [-2.5, 1.5, -4] as [number, number, number], radius: 1.4, parallaxStrength: 1.2 },
    { position: [0.5, 2.5, -6] as [number, number, number], radius: 1, parallaxStrength: 1.5 },
    { position: [-4, -2, -3] as [number, number, number], radius: 0.7, parallaxStrength: 1.8 },
    { position: [5, 3, -8] as [number, number, number], radius: 0.5, parallaxStrength: 2 },
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
          ringColor="#ff6b35"
          dotColor="#ff8c42"
        />
      ))}
    </>
  );
}

function AmbientParticles({ mouse }: { mouse: MousePosition }) {
  const ref = useRef<THREE.Points>(null);
  const particlesCount = 300;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01 + mouse.x * 0.1;
      ref.current.rotation.x = mouse.y * 0.05;
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
        size={0.03}
        color="#ff6b35"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({ mouse }: { mouse: MousePosition }) {
  const { camera } = useThree();
  
  useFrame(() => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, -3);
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.1} color="#ff6b35" />
      <FloatingSpheres mouse={mouse} />
      <AmbientParticles mouse={mouse} />
      <fog attach="fog" args={['#050510', 5, 25]} />
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
