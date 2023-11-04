import React from 'react';
import { TextureLoader, Vector3 } from 'three';
import { useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Ring from '../../components/Ring';

interface MercuryProps {
  position: Vector3 | [number, number, number];
  radius: number;
}

const Mercury: React.FC<MercuryProps> = ({ position, radius }) => {
  const mercuryTexture = useLoader(TextureLoader, '/images/bodies/mercury_2k.jpg');
  const orbitRadius = Array.isArray(position) ? position[0] : position.x;

  return (
    <>
      <mesh position={position}>
        <Sphere args={[radius, 32, 32]}>
          <meshStandardMaterial map={mercuryTexture} />
        </Sphere>
      </mesh>
      <Ring radius={orbitRadius} />
    </>
  );
};

export default Mercury;
