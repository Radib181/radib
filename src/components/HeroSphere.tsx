import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

interface MousePosition {
  x: number;
  y: number;
}

const Earth = ({ mouse }: { mouse: MousePosition }) => {
  const earthRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  // Create Earth texture using procedural generation
  const earthTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;

    // Ocean base
    const oceanGradient = ctx.createLinearGradient(0, 0, 0, 512);
    oceanGradient.addColorStop(0, "#0c2d48");
    oceanGradient.addColorStop(0.5, "#145374");
    oceanGradient.addColorStop(1, "#0c2d48");
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 0, 1024, 512);

    // Draw continents with realistic shapes
    ctx.fillStyle = "#1a472a";
    
    // North America
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.bezierCurveTo(200, 80, 280, 90, 300, 120);
    ctx.bezierCurveTo(320, 150, 310, 200, 280, 220);
    ctx.bezierCurveTo(250, 250, 200, 260, 180, 240);
    ctx.bezierCurveTo(140, 220, 120, 180, 130, 140);
    ctx.bezierCurveTo(135, 115, 145, 105, 150, 100);
    ctx.fill();

    // South America
    ctx.beginPath();
    ctx.moveTo(280, 280);
    ctx.bezierCurveTo(300, 270, 320, 290, 310, 340);
    ctx.bezierCurveTo(300, 400, 280, 430, 260, 420);
    ctx.bezierCurveTo(240, 410, 250, 350, 260, 310);
    ctx.bezierCurveTo(265, 290, 275, 282, 280, 280);
    ctx.fill();

    // Europe
    ctx.beginPath();
    ctx.moveTo(480, 100);
    ctx.bezierCurveTo(520, 90, 560, 100, 580, 130);
    ctx.bezierCurveTo(590, 150, 570, 170, 540, 175);
    ctx.bezierCurveTo(510, 180, 470, 170, 460, 145);
    ctx.bezierCurveTo(455, 125, 465, 105, 480, 100);
    ctx.fill();

    // Africa
    ctx.beginPath();
    ctx.moveTo(500, 200);
    ctx.bezierCurveTo(550, 190, 590, 210, 600, 260);
    ctx.bezierCurveTo(610, 320, 590, 380, 560, 400);
    ctx.bezierCurveTo(530, 415, 490, 400, 480, 350);
    ctx.bezierCurveTo(470, 300, 475, 250, 490, 220);
    ctx.bezierCurveTo(495, 205, 498, 202, 500, 200);
    ctx.fill();

    // Asia
    ctx.beginPath();
    ctx.moveTo(600, 100);
    ctx.bezierCurveTo(700, 80, 820, 100, 880, 150);
    ctx.bezierCurveTo(920, 190, 900, 250, 850, 280);
    ctx.bezierCurveTo(780, 320, 700, 300, 650, 260);
    ctx.bezierCurveTo(610, 230, 590, 180, 600, 140);
    ctx.bezierCurveTo(605, 115, 598, 102, 600, 100);
    ctx.fill();

    // Australia
    ctx.beginPath();
    ctx.moveTo(820, 340);
    ctx.bezierCurveTo(870, 330, 920, 350, 930, 390);
    ctx.bezierCurveTo(935, 420, 910, 445, 870, 450);
    ctx.bezierCurveTo(830, 455, 790, 435, 785, 400);
    ctx.bezierCurveTo(780, 365, 800, 345, 820, 340);
    ctx.fill();

    // Add some terrain variation
    ctx.fillStyle = "#2d5a3d";
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      const r = Math.random() * 15 + 5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // City lights
    ctx.fillStyle = "#fbbf24";
    const cityPositions = [
      [180, 150], [200, 180], [260, 200], // NA
      [280, 320], [270, 350], // SA
      [500, 130], [530, 150], [550, 140], // Europe
      [520, 250], [540, 280], [560, 320], // Africa
      [700, 150], [750, 180], [800, 200], [850, 250], // Asia
      [860, 380], [880, 400], // Australia
    ];
    cityPositions.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Cloud texture
  const cloudTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, 512, 256);

    // Draw cloud patterns
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const rx = Math.random() * 40 + 20;
      const ry = Math.random() * 20 + 10;
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Smooth mouse following
    targetRotation.current.x = mouse.y * 0.3;
    targetRotation.current.y = mouse.x * 0.5;

    if (earthRef.current) {
      earthRef.current.rotation.x = THREE.MathUtils.lerp(
        earthRef.current.rotation.x,
        targetRotation.current.x,
        0.03
      );
      earthRef.current.rotation.y = THREE.MathUtils.lerp(
        earthRef.current.rotation.y,
        targetRotation.current.y + t * 0.1,
        0.03
      );
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group ref={earthRef}>
      {/* Earth sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Cloud layer */}
      <mesh ref={cloudsRef} scale={1.02}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          map={cloudTexture}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh ref={glowRef} scale={1.15}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Inner atmosphere rim */}
      <mesh scale={1.08}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <shaderMaterial
          transparent
          uniforms={{
            glowColor: { value: new THREE.Color("#3b82f6") },
          }}
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            uniform vec3 glowColor;
            void main() {
              float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              gl_FragColor = vec4(glowColor, intensity * 0.5);
            }
          `}
          side={THREE.FrontSide}
          depthWrite={false}
        />
      </mesh>

      {/* Orbital ring */}
      <mesh rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusGeometry args={[2.2, 0.008, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.5} />
      </mesh>

      {/* Second orbital ring */}
      <mesh rotation={[Math.PI / 1.8, -0.3, 0.5]}>
        <torusGeometry args={[2.4, 0.005, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const Scene = ({ mouse }: { mouse: MousePosition }) => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -5, -10]} intensity={0.5} color="#3b82f6" />
      
      <Stars
        radius={80}
        depth={60}
        count={3000}
        factor={3}
        saturation={0.1}
        fade
        speed={0.3}
      />

      <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
        <Earth mouse={mouse} />
      </Float>
    </>
  );
};

const HeroSphere = () => {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
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