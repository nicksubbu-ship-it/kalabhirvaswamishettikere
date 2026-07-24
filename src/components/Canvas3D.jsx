import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars, Environment } from '@react-three/drei';

export default function Canvas3D() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ff9933" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffd700" />
      
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, 0, -2]}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial 
            color="#ff9933" 
            wireframe 
            emissive="#cc7a29"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
      
      <Environment preset="city" />
    </>
  );
}
