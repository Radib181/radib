import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RibbonRing({ 
  radius, 
  thickness, 
  color, 
  rotationSpeed, 
  tiltX, 
  tiltY,
  wobbleAmplitude = 0.1,
  wobbleSpeed = 1 
}: { 
  radius: number; 
  thickness: number; 
  color: string;
  rotationSpeed: number;
  tiltX: number;
  tiltY: number;
  wobbleAmplitude?: number;
  wobbleSpeed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += rotationSpeed;
      // Add subtle wobble
      ref.current.rotation.x = tiltX + Math.sin(state.clock.elapsedTime * wobbleSpeed) * wobbleAmplitude;
      ref.current.rotation.y = tiltY + Math.cos(state.clock.elapsedTime * wobbleSpeed * 0.7) * wobbleAmplitude * 0.5;
    }
  });

  return (
    <mesh ref={ref} rotation={[tiltX, tiltY, 0]}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.7}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function GlobeCore() {
  const ref = useRef<THREE.Mesh>(null);
  
  const gridTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Dark base with grid of lights
    ctx.fillStyle = '#0a0a1a';
    ctx.fillRect(0, 0, 512, 512);
    
    // Create glowing dots pattern
    const dotSpacing = 24;
    for (let x = dotSpacing / 2; x < 512; x += dotSpacing) {
      for (let y = dotSpacing / 2; y < 512; y += dotSpacing) {
        const brightness = Math.random() * 0.5 + 0.5;
        const glowRadius = 2 + Math.random() * 3;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius * 2);
        gradient.addColorStop(0, `rgba(255, 200, 100, ${brightness})`);
        gradient.addColorStop(0.5, `rgba(255, 150, 50, ${brightness * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, glowRadius * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright center
        ctx.fillStyle = `rgba(255, 255, 200, ${brightness})`;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 2);
    return texture;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        map={gridTexture}
        roughness={0.2}
        metalness={0.9}
        envMapIntensity={1}
      />
    </mesh>
  );
}

function FloatingBlobs() {
  const blobsRef = useRef<THREE.Group>(null);
  
  const blobs = useMemo(() => [
    { position: [0, 2.2, 0], scale: 0.15, color: '#e8b4b4' },
    { position: [0.8, 2.1, 0.3], scale: 0.12, color: '#d4a0a0' },
    { position: [-0.6, 2.15, -0.2], scale: 0.1, color: '#c8b4d4' },
    { position: [0.3, 2.25, -0.4], scale: 0.08, color: '#b4c8d4' },
    { position: [-0.4, 2.18, 0.5], scale: 0.11, color: '#d4b4c8' },
    { position: [0.5, 2.3, 0.2], scale: 0.09, color: '#c4b4d4' },
  ], []);

  useFrame((state) => {
    if (blobsRef.current) {
      blobsRef.current.children.forEach((blob, i) => {
        const offset = i * 0.5;
        blob.position.y += Math.sin(state.clock.elapsedTime * 1.5 + offset) * 0.002;
        blob.position.x += Math.cos(state.clock.elapsedTime * 1.2 + offset) * 0.001;
      });
    }
  });

  return (
    <group ref={blobsRef}>
      {blobs.map((blob, i) => (
        <mesh key={i} position={blob.position as [number, number, number]} scale={blob.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={blob.color}
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#8888ff" />
      <pointLight position={[0, 3, 0]} intensity={0.5} color="#ffddcc" />
      
      <group ref={groupRef}>
        {/* Core globe with city lights texture */}
        <GlobeCore />
        
        {/* Ribbon rings with gradient colors */}
        <RibbonRing 
          radius={1.8} 
          thickness={0.08} 
          color="#e8b4c4"
          rotationSpeed={0.008}
          tiltX={Math.PI / 4}
          tiltY={0.2}
          wobbleAmplitude={0.05}
          wobbleSpeed={0.8}
        />
        <RibbonRing 
          radius={1.9} 
          thickness={0.06} 
          color="#c8a4d4"
          rotationSpeed={-0.006}
          tiltX={Math.PI / 3}
          tiltY={-0.3}
          wobbleAmplitude={0.07}
          wobbleSpeed={1.2}
        />
        <RibbonRing 
          radius={2.0} 
          thickness={0.07} 
          color="#a4b4d4"
          rotationSpeed={0.01}
          tiltX={Math.PI / 2.5}
          tiltY={0.4}
          wobbleAmplitude={0.06}
          wobbleSpeed={0.9}
        />
        <RibbonRing 
          radius={2.1} 
          thickness={0.05} 
          color="#94a4c4"
          rotationSpeed={-0.007}
          tiltX={Math.PI / 2}
          tiltY={-0.2}
          wobbleAmplitude={0.08}
          wobbleSpeed={1.1}
        />
        <RibbonRing 
          radius={2.2} 
          thickness={0.06} 
          color="#8494b4"
          rotationSpeed={0.005}
          tiltX={Math.PI / 1.8}
          tiltY={0.1}
          wobbleAmplitude={0.04}
          wobbleSpeed={0.7}
        />
        
        {/* Floating blobs on top */}
        <FloatingBlobs />
      </group>
    </>
  );
}

const Contact3D = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Contact3D;
