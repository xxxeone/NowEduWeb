import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FlowingCurve: React.FC<{ position: [number, number, number]; color: string; speed: number }> = ({ 
  position, 
  color, 
  speed 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const elapsed = clock.getElapsedTime();
      meshRef.current.rotation.z = elapsed * speed * 0.2;
      meshRef.current.position.x = position[0] + Math.sin(elapsed * speed * 0.5) * 3;
      meshRef.current.position.y = position[1] + Math.cos(elapsed * speed * 0.3) * 1;
    }
  });

  // 创建曲线几何体
  const curveGeometry = React.useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(-5, 2, 1),
      new THREE.Vector3(0, -1, 2),
      new THREE.Vector3(5, 1, -1),
      new THREE.Vector3(10, 0, 0)
    ]);

    return new THREE.TubeGeometry(curve, 64, 0.1, 8, false);
  }, []);

  return (
    <mesh ref={meshRef} position={position} geometry={curveGeometry}>
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

const FloatingParticles: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 150;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const elapsed = clock.getElapsedTime();
      particlesRef.current.rotation.y = elapsed * 0.1;
      
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(elapsed * 0.5 + i * 0.01) * 0.02;
        positions[i + 1] += Math.cos(elapsed * 0.3 + i * 0.01) * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#03AED2"
        size={0.1}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
};

const WireframeSphere: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      const elapsed = clock.getElapsedTime();
      sphereRef.current.rotation.x = elapsed * 0.3;
      sphereRef.current.rotation.y = elapsed * 0.2;
      sphereRef.current.position.y = position[1] + Math.sin(elapsed + position[0]) * 2;
    }
  });

  return (
    <mesh ref={sphereRef} position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial
        color="#FFFFFF"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const Scene3D: React.FC = () => {
  return (
    <>
      {/* 流动曲线 */}
      <FlowingCurve position={[0, 3, 0]} color="#03AED2" speed={0.6} />
      <FlowingCurve position={[0, 0, 3]} color="#FFFFFF" speed={0.4} />
      <FlowingCurve position={[0, -3, -2]} color="#03AED2" speed={0.8} />
      <FlowingCurve position={[5, 1, -1]} color="#FFFFFF" speed={0.5} />
      <FlowingCurve position={[-5, -1, 2]} color="#03AED2" speed={0.7} />
      
      {/* 粒子系统 */}
      <FloatingParticles />
      
      {/* 线框球体 */}
      <WireframeSphere position={[-8, 0, 0]} />
      <WireframeSphere position={[8, 2, -3]} />
      <WireframeSphere position={[0, -5, 4]} />
      
      {/* 光照 */}
      <ambientLight intensity={0.4} />
      <pointLight position={[15, 15, 15]} intensity={0.6} color="#03AED2" />
      <pointLight position={[-15, -15, -15]} intensity={0.4} color="#FFFFFF" />
      
      {/* 雾效 */}
      <fog attach="fog" args={['#FDDE55', 20, 100]} />
    </>
  );
};

const ThreeDFlowingLines: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ 
          position: [0, 0, 15], 
          fov: 60,
          near: 0.1,
          far: 1000 
        }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
};

export default ThreeDFlowingLines;