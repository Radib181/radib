import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

interface MousePosition {
  x: number;
  y: number;
}

const AbstractShape = ({ mouse }: { mouse: MousePosition }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 0.5;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      const t = Math.random();
      colors[i * 3] = 0.1 + t * 0.4;
      colors[i * 3 + 1] = 0.6 + t * 0.2;
      colors[i * 3 + 2] = 0.8 + t * 0.2;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Smooth mouse following
    targetRotation.current.x = mouse.y * 0.5;
    targetRotation.current.y = mouse.x * 0.5;
    
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x + t * 0.05,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current.y + t * 0.08,
        0.05
      );
    }
    
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position;
      const original = meshRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < positions.count; i++) {
        const x = original[i * 3];
        const y = original[i * 3 + 1];
        const z = original[i * 3 + 2];
        
        const noise = Math.sin(x * 2 + t) * Math.cos(y * 2 + t) * 0.1;
        positions.setXYZ(
          i,
          x + noise * x * 0.1,
          y + noise * y * 0.1,
          z + noise * z * 0.1
        );
      }
      positions.needsUpdate = true;
    }
    
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -t * 0.03;
      wireframeRef.current.rotation.y = -t * 0.05;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.02 + mouse.x * 0.2;
      particlesRef.current.rotation.x = Math.sin(t * 0.1) * 0.1 + mouse.y * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main glass-like icosahedron */}
      <mesh ref={meshRef} scale={1.2}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.5}
          chromaticAberration={0.2}
          anisotropy={0.3}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color="#0ea5e9"
          transmission={0.95}
          roughness={0.1}
          ior={1.5}
        />
      </mesh>

      {/* Outer wireframe */}
      <mesh ref={wireframeRef} scale={1.6}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner glowing core */}
      <mesh scale={0.4}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
      </mesh>

      {/* Orbital ring 1 */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.015, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
      </mesh>

      {/* Orbital ring 2 */}
      <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
      </mesh>

      {/* Floating particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

const Scene = ({ mouse }: { mouse: MousePosition }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[10, -10, 10]} intensity={0.5} color="#06b6d4" />
      
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <AbstractShape mouse={mouse} />
      </Float>
    </>
  );
};

const HeroSphere = () => {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        setMouse({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[320px] lg:h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default HeroSphere;
