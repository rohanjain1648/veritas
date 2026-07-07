import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix() {
  const group = useRef<THREE.Group>(null);

  // Generate helix positions
  const particles = useMemo(() => {
    const temp = [];
    const count = 100;
    for (let i = 0; i < count; i++) {
      const t = i * 0.2;
      const x = Math.cos(t) * 2;
      const z = Math.sin(t) * 2;
      const y = (i - count / 2) * 0.15;
      
      // Strand 1
      temp.push({ position: [x, y, z], color: '#4299e1' });
      // Strand 2 (offset phase)
      temp.push({ position: [-x, y, -z], color: '#ed8936' });
      
      // Connecting bridge every few steps
      if (i % 3 === 0) {
        for(let j = 1; j < 5; j++) {
           const lerpX = (x * (5-j) + (-x) * j) / 5;
           const lerpZ = (z * (5-j) + (-z) * j) / 5;
           temp.push({ position: [lerpX, y, lerpZ], color: '#9f7aea' });
        }
      }
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position as [number, number, number]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color={p.color} 
            emissive={p.color} 
            emissiveIntensity={0.5} 
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export function Hero3D() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: -1, opacity: 0.8 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <DNAHelix />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
