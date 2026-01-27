// GearModel3D.jsx
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

// ---------------------------
// Gear component
// ---------------------------
function Gear({ position = [0, 0, 0], scale = 1, speed = 1, color = "#60a5fa", reverse = false }) {
  const meshRef = useRef(null);
  const teethCount = 16;
  const innerRadius = 0.6;
  const outerRadius = 1;
  const toothHeight = 0.25;
  const thickness = 0.3;

  useFrame((state, delta) => {
    if (meshRef.current) meshRef.current.rotation.z += delta * speed * (reverse ? -1 : 1);
  });

  // Gear shape
  const shape = new THREE.Shape();
  for (let i = 0; i < teethCount; i++) {
    const angle = (i / teethCount) * Math.PI * 2;
    const toothStart = ((i + 0.35) / teethCount) * Math.PI * 2;
    const toothEnd = ((i + 0.65) / teethCount) * Math.PI * 2;
    const gapEnd = ((i + 1) / teethCount) * Math.PI * 2;

    if (i === 0) shape.moveTo(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius);

    shape.lineTo(Math.cos(toothStart) * (outerRadius + toothHeight), Math.sin(toothStart) * (outerRadius + toothHeight));
    shape.lineTo(Math.cos(toothEnd) * (outerRadius + toothHeight), Math.sin(toothEnd) * (outerRadius + toothHeight));
    shape.lineTo(Math.cos(gapEnd) * outerRadius, Math.sin(gapEnd) * outerRadius);
  }
  shape.closePath();

  // Center hole
  const hole = new THREE.Path();
  hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
  shape.holes.push(hole);

  const extrudeSettings = { depth: thickness, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelOffset: 0, bevelSegments: 3 };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} envMapIntensity={1} />
    </mesh>
  );
}

// ---------------------------
// Sprocket component
// ---------------------------
function Sprocket({ position = [0, 0, 0], scale = 1, speed = 0.5, color = "#3b82f6" }) {
  const meshRef = useRef(null);
  useFrame((state, delta) => { if (meshRef.current) meshRef.current.rotation.z += delta * speed; });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <mesh>
        <torusGeometry args={[1, 0.15, 16, 32]} />
        <meshStandardMaterial color={color} metalness={0.95} roughness={0.1} />
      </mesh>
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <mesh key={i} rotation={[0, 0, (angle * Math.PI) / 180]} position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 0.12, 0.25]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.15} />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

// ---------------------------
// TechRing component
// ---------------------------
function TechRing({ radius = 2, thickness = 0.02, speed = 0.3 }) {
  const meshRef = useRef(null);
  useFrame((state, delta) => { if (meshRef.current) meshRef.current.rotation.z -= delta * speed; });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[radius, thickness, 8, 64]} />
      <meshStandardMaterial color="#60a5fa" metalness={0.8} roughness={0.3} emissive="#3b82f6" emissiveIntensity={0.3} />
    </mesh>
  );
}

// ---------------------------
// FloatingBolt component
// ---------------------------
function FloatingBolt({ position = [0, 0, 0] }) {
  const groupRef = useRef(null);
  useFrame((state) => { if (groupRef.current) groupRef.current.rotation.y = state.clock.elapsedTime * 0.5; });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.1, 6]} />
          <meshStandardMaterial color="#64748b" metalness={0.95} roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.5, 16]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

// ---------------------------
// Scene component
// ---------------------------
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, -5, 5]} intensity={0.3} color="#3b82f6" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#60a5fa" />

      <Environment preset="city" />

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Gear position={[0, 0, 0]} scale={0.9} speed={0.4} color="#1e40af" />
      </Float>

      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <Gear position={[1.7, 1.2, -0.5]} scale={0.55} speed={0.65} color="#3b82f6" reverse />
      </Float>

      <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.4}>
        <Sprocket position={[-1.5, -1, -0.3]} scale={0.4} speed={0.8} color="#60a5fa" />
      </Float>

      <TechRing radius={2.2} thickness={0.015} speed={0.2} />
      <TechRing radius={2.5} thickness={0.01} speed={-0.15} />

      <FloatingBolt position={[2, -0.5, 0.5]} />
      <FloatingBolt position={[-1.8, 1.2, 0.3]} />
    </>
  );
}

// ---------------------------
// Main GearModel3D Component
// ---------------------------
const GearModel3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GearModel3D;
