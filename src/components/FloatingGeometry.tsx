import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
  type?: 'box' | 'sphere' | 'torus' | 'octahedron';
}

export const FloatingGeometry = ({ 
  position, 
  color, 
  scale = 1, 
  speed = 1,
  type = 'box' 
}: FloatingGeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  const geometry = useMemo(() => {
    switch (type) {
      case 'sphere':
        return new THREE.SphereGeometry(0.5, 32, 32);
      case 'torus':
        return new THREE.TorusGeometry(0.5, 0.2, 16, 100);
      case 'octahedron':
        return new THREE.OctahedronGeometry(0.5);
      default:
        return new THREE.BoxGeometry(1, 1, 1);
    }
  }, [type]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <primitive object={geometry} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.6} 
        roughness={0.4}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};