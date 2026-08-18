import { Suspense, useRef, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import type { Group } from "three";

/** Tilts its children toward the pointer (max ~9deg) with soft easing. */
function PointerTilt({ children }: { children: ReactNode }) {
  const ref = useRef<Group>(null);
  const { pointer } = useThree();
  useFrame(() => {
    if (!ref.current) return;
    const ry = pointer.x * 0.16;
    const rx = -pointer.y * 0.16;
    ref.current.rotation.y += (ry - ref.current.rotation.y) * 0.06;
    ref.current.rotation.x += (rx - ref.current.rotation.x) * 0.06;
  });
  return <group ref={ref}>{children}</group>;
}

export function DrinkStage({
  children,
  className,
  cameraZ = 4.2,
}: {
  children: ReactNode;
  className?: string;
  cameraZ?: number;
}) {
  return (
    <Canvas
      className={className}
      dpr={[1, 2]}
      camera={{ position: [0, 0.2, cameraZ], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 5, 4]} intensity={1.5} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.6} color="#C2E9FF" />
      <pointLight position={[0, -2, 2]} intensity={0.4} color="#FFD1E0" />
      <Suspense fallback={null}>
        <PointerTilt>{children}</PointerTilt>
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}