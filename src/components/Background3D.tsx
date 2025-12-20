import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesCount = 2000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.5;
        child.position.x = Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.3;
      });
    }
  });

  return (
    <group ref={orbsRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[(i - 2) * 3, 0, -5]}>
          <sphereGeometry args={[0.5 + Math.random() * 0.5, 32, 32]} />
          <meshBasicMaterial 
            color="#22d3ee" 
            transparent 
            opacity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function GridPlane() {
  const gridRef = useRef<THREE.GridHelper>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 1;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[30, 30, "#22d3ee", "#0a1628"]}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingOrbs />
        <GridPlane />
      </Canvas>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none" />
    </div>
  );
};

export default Background3D;
