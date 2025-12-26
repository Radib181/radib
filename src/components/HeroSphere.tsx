import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

const AnimatedRings = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const rings = useMemo(() => {
    const ringData = [];
    const ringCount = 8;
    
    for (let i = 0; i < ringCount; i++) {
      const curve = new THREE.EllipseCurve(
        0, 0,
        2.2, 2.2,
        0, Math.PI * 2,
        false,
        0
      );
      
      const points = curve.getPoints(100);
      const geometry = new THREE.BufferGeometry().setFromPoints(
        points.map(p => new THREE.Vector3(p.x, p.y, 0))
      );
      
      ringData.push({
        geometry,
        rotation: [
          (Math.PI / ringCount) * i + Math.random() * 0.3,
          (Math.PI / ringCount) * i * 1.5,
          Math.random() * 0.5
        ],
        color: i % 2 === 0 ? "#60a5fa" : "#c4b5fd",
        speed: 0.3 + Math.random() * 0.2,
        offset: Math.random() * Math.PI * 2
      });
    }
    return ringData;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[1.52, 64, 64]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Animated ribbon rings */}
      {rings.map((ring, index) => (
        <RibbonRing key={index} {...ring} index={index} />
      ))}
    </group>
  );
};

const RibbonRing = ({ 
  rotation, 
  color, 
  speed, 
  offset,
  index 
}: { 
  geometry: THREE.BufferGeometry;
  rotation: number[];
  color: string;
  speed: number;
  offset: number;
  index: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * speed + offset;
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[rotation[0], rotation[1], rotation[2]]}
    >
      <torusGeometry args={[2.2, 0.08, 16, 100, Math.PI * 1.5]} />
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.4}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c4b5fd" />
      <spotLight
        position={[0, 5, 5]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        color="#22d3ee"
      />
      
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <AnimatedRings />
      </Float>
    </>
  );
};

const HeroSphere = () => {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroSphere;
