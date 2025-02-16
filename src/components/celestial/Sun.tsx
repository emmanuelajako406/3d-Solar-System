import { Vector3, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { MeshWobbleMaterial, Sphere } from "@react-three/drei";

interface SunProps {
  position: Vector3 | [number, number, number];
  radius: number;
}

export default function Sun({ position, radius }: SunProps) {
  const sunTexture = useLoader(TextureLoader, "/images/bodies/8k_sun.jpg");

  return (
    <mesh position={position}>
      <Sphere args={[radius, 32, 32]}>
        <MeshWobbleMaterial
          map={sunTexture}
          emissive="#FFFF99"
          emissiveIntensity={0.012}
          factor={0.1}
          speed={0.05}
        />
      </Sphere>
    </mesh>
  );
}
