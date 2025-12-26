import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const Globe = () => {
  const globeRef = useRef<THREE.Group>(null);
  const innerGlobeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (innerGlobeRef.current) {
      innerGlobeRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const ribbons = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      rotation: [
        (Math.PI / 6) * i + Math.random() * 0.2,
        (Math.PI / 4) * i,
        Math.random() * 0.3
      ] as [number, number, number],
      color: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4",
      arc: Math.PI * (1.2 + Math.random() * 0.6),
      radius: 1.1 + (i % 3) * 0.05,
      thickness: 0.025 + Math.random() * 0.015,
    }));
  }, []);

  return (
    <group ref={globeRef}>
      {/* Core dark sphere with reflections */}
      <mesh ref={innerGlobeRef}>
        <sphereGeometry args={[0.9, 128, 128]} />
        <MeshDistortMaterial
          color="#0c1222"
          metalness={1}
          roughness={0.1}
          distort={0.1}
          speed={2}
        />
      </mesh>

      {/* Glass outer shell */}
      <mesh>
        <sphereGeometry args={[0.95, 64, 64]} />
        <meshPhysicalMaterial
          color="#1e3a5f"
          metalness={0.2}
          roughness={0}
          transmission={0.6}
          thickness={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Inner glow core */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.15} />
      </mesh>

      {/* City lights texture simulation */}
      <points>
        <sphereGeometry args={[0.91, 64, 64]} />
        <pointsMaterial
          color="#fbbf24"
          size={0.008}
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Ribbon rings */}
      {ribbons.map((ribbon, i) => (
        <RibbonRing key={i} {...ribbon} index={i} />
      ))}

      {/* Atmosphere glow */}
      <mesh scale={1.25}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const RibbonRing = ({
  rotation,
  color,
  arc,
  radius,
  thickness,
  index,
}: {
  rotation: [number, number, number];
  color: string;
  arc: number;
  radius: number;
  thickness: number;
  index: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = 
        Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} rotation={rotation}>
      <torusGeometry args={[radius, thickness, 16, 100, arc]} />
      <meshStandardMaterial
        color={color}
        metalness={0.6}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      {/* Lighting setup for realism */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[5, -5, -5]} intensity={0.5} color="#8b5cf6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#06b6d4"
      />

      <Stars
        radius={80}
        depth={60}
        count={2000}
        factor={3}
        saturation={0.1}
        fade
        speed={0.5}
      />

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Globe />
      </Float>
    </>
  );
};

const HeroSphere = () => {
  return (
    <div className="w-full h-[280px] lg:h-[350px]">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroSphere;
