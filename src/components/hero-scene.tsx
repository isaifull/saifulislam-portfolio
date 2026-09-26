import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const GLOBE_RADIUS = 1.5;
const ORBIT_RADIUS = 1.54;

const nodes = [
  { label: "CLIMATE", angle: 0 },
  { label: "BUSINESS", angle: Math.PI / 2 },
  { label: "FINANCE", angle: Math.PI },
  { label: "RISK", angle: (Math.PI * 3) / 2 },
];

function Scene() {
  const system = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!system.current) return;

    system.current.rotation.y += 0.0006;

    system.current.rotation.x = THREE.MathUtils.lerp(
      system.current.rotation.x,
      state.pointer.y * -0.02,
      0.02,
    );
  });

  return (
    <group ref={system}>
      {/* Rotating wireframe globe */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 32, 24]} />
        <meshBasicMaterial
          color="#183d2b"
          transparent
          opacity={0.07}
          wireframe
          depthWrite={false}
        />
      </mesh>

      {/* North / South axis */}
      <mesh>
        <cylinderGeometry args={[0.0035, 0.0035, 3.2, 8]} />
        <meshBasicMaterial
          color="#183d2b"
          transparent
          opacity={0.09}
          depthTest={false}
          depthWrite={false}
        />
      </mesh>

      {/* Single orbital ring */}
      <group rotation={[Math.PI / 2.45, 0.16, 0]}>
        <mesh>
          <torusGeometry args={[ORBIT_RADIUS, 0.006, 8, 180]} />
          <meshBasicMaterial
            color="#183d2b"
            transparent
            opacity={0.14}
            depthWrite={false}
          />
        </mesh>

        {/* Four nodes */}
        {nodes.map((node) => {
          const x = Math.cos(node.angle) * ORBIT_RADIUS;
          const y = Math.sin(node.angle) * ORBIT_RADIUS;

          let transform = "translate(10px, -50%)";

          if (node.angle === Math.PI / 2) {
            transform = "translate(-50%, calc(-100% - 10px))";
          } else if (node.angle === Math.PI) {
            transform = "translate(calc(-100% - 10px), -50%)";
          } else if (node.angle === (Math.PI * 3) / 2) {
            transform = "translate(-50%, 10px)";
          }

          return (
            <group key={node.label} position={[x, y, 0]}>
              <mesh>
                <sphereGeometry args={[0.014, 12, 12]} />
                <meshBasicMaterial
                  color="#183d2b"
                  transparent
                  opacity={0.9}
                  depthTest={false}
                  depthWrite={false}
                />
              </mesh>

              <Html center>
                <span
                  style={{
                    display: "block",
                    transform,
                    color: "#59625a",
                    fontFamily:
                      "Figtree Variable, Figtree, sans-serif",
                    fontSize: "7px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                    textTransform: "uppercase",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {node.label}
                </span>
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
}

export function HeroScene() {
  return (
    <div
  className="pointer-events-none absolute block"
  style={{
    right: "-18%",
    top: "18%",
    width: "77%",
    height: "79%",
  }}
>
      <Canvas
        camera={{
          position:   [0, 0, 5.0],
          fov: 35,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
} 