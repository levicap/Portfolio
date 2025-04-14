import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

interface CommitNode {
  position: [number, number, number];
  connections: number[];
}

const CommitSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="#4CAF50" />
    </mesh>
  );
};

const CommitConnections = ({ nodes }: { nodes: CommitNode[] }) => {
  const connectionsRef = useRef<THREE.LineSegments>(null);

  useEffect(() => {
    if (!connectionsRef.current) return;

    const positions: number[] = [];
    nodes.forEach((node, i) => {
      node.connections.forEach(targetIndex => {
        positions.push(...node.position);
        positions.push(...nodes[targetIndex].position);
      });
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    connectionsRef.current.geometry = geometry;
  }, [nodes]);

  return (
    <lineSegments ref={connectionsRef}>
      <bufferGeometry />
      <lineBasicMaterial color="#2196F3" linewidth={2} />
    </lineSegments>
  );
};

 const CommitGraph = () => {
  const nodes: CommitNode[] = [
    { position: [0, 0, 0], connections: [1, 2] },
    { position: [-1, 1, 0], connections: [3] },
    { position: [1, 1, 0], connections: [3] },
    { position: [0, 2, 0], connections: [] },
  ];

  return (
    <div style={{ height: '200px', backgroundColor: '#1e1e1e', borderRadius: '8px', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {nodes.map((node, i) => (
          <CommitSphere key={i} position={node.position} />
        ))}
        <CommitConnections nodes={nodes} />
      </Canvas>
    </div>
  );
};
export default CommitGraph;