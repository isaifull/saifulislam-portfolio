import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Network() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y += 0.0006; 
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * -0.08,
      0.03,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      group.current.rotation.y + state.pointer.x * 0.0005,
      0.03,
    );
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.5, 24, 24]} />
        <meshBasicMaterial
          color="#183d2b"
          transparent
          opacity={0.045} 
          wireframe
        />
      </mesh>

      <mesh position={[-1.25, 0.8, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#183d2b" />
      </mesh>

      <mesh position={[1.1, 0.95, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#183d2b" />
      </mesh>

      <mesh position={[1.35, -0.75, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#183d2b" />
      </mesh>

      <mesh position={[-0.75, -1.1, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#183d2b" />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
   <div className="absolute right-[-4%] top-[12%] h-[72%] w-[58%] [mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)]"> 
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Network />
      </Canvas>
    </div>
  );
} 