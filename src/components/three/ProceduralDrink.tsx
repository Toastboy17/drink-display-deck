import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { Group } from "three";

export type DrinkSpec = {
  id: string;
  name: string;
  price: string;
  category: string;
  liquidColor: string;
  foamColor?: string;
  swirlColor?: string;
  hasCream: boolean;
  hasIce: boolean;
  hasSwirl: boolean;
  modelPath?: string;
};

function GLBModel({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
}

function GlassShell() {
  const points = useMemo(
    () => [
      new THREE.Vector2(0.55, -0.9),
      new THREE.Vector2(0.62, -0.85),
      new THREE.Vector2(0.7, -0.3),
      new THREE.Vector2(0.78, 0.4),
      new THREE.Vector2(0.85, 0.9),
    ],
    [],
  );
  return (
    <mesh castShadow receiveShadow>
      <latheGeometry args={[points, 48]} />
      <meshPhysicalMaterial
        transparent
        opacity={0.22}
        roughness={0.05}
        transmission={0.9}
        thickness={0.4}
        color="#ffffff"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Liquid({ color, fillHeight = 0.75 }: { color: string; fillHeight?: number }) {
  return (
    <mesh position={[0, -0.15, 0]} castShadow>
      <cylinderGeometry args={[0.66, 0.56, fillHeight * 1.6, 48]} />
      <meshPhysicalMaterial color={color} roughness={0.2} clearcoat={0.5} transmission={0.15} />
    </mesh>
  );
}

function FoamCap({ color }: { color: string }) {
  return (
    <mesh position={[0, 0.65, 0]}>
      <cylinderGeometry args={[0.72, 0.7, 0.18, 48]} />
      <meshStandardMaterial color={color} roughness={0.6} />
    </mesh>
  );
}

function WhippedCream({ color = "#fdf8ef" }: { color?: string }) {
  const puffs = [
    [0, 0.78, 0, 0.42],
    [0.28, 0.7, 0.1, 0.3],
    [-0.25, 0.72, -0.15, 0.3],
    [0.1, 0.95, -0.1, 0.26],
    [-0.15, 0.9, 0.2, 0.24],
  ] as const;
  return (
    <group>
      {puffs.map((p, i) => (
        <mesh key={i} position={[p[0], p[1], p[2]]} castShadow>
          <sphereGeometry args={[p[3], 20, 20]} />
          <meshStandardMaterial color={color} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function IceCubes({ count = 5 }: { count?: number }) {
  const cubes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = (i + 1) * 2.399;
        return [Math.cos(a) * 0.3, 0.3 + ((i * 0.17) % 0.35), Math.sin(a) * 0.3, a] as const;
      }),
    [count],
  );
  return (
    <group>
      {cubes.map((c, i) => (
        <mesh
          key={i}
          position={[c[0], c[1], c[2]]}
          rotation={[c[3], c[3] * 0.6, 0]}
          castShadow
        >
          <boxGeometry args={[0.22, 0.22, 0.22]} />
          <meshPhysicalMaterial
            color="#eaf6ff"
            transparent
            opacity={0.55}
            roughness={0.05}
            transmission={0.85}
          />
        </mesh>
      ))}
    </group>
  );
}

function Swirl({ color }: { color: string }) {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        Array.from({ length: 24 }, (_, i) => {
          const t = i / 23;
          const angle = t * Math.PI * 6;
          const r = 0.5 - t * 0.15;
          return new THREE.Vector3(Math.cos(angle) * r, -0.8 + t * 1.5, Math.sin(angle) * r);
        }),
      ),
    [],
  );
  return (
    <mesh castShadow>
      <tubeGeometry args={[curve, 100, 0.035, 8, false]} />
      <meshStandardMaterial color={color} roughness={0.4} />
    </mesh>
  );
}

function StrawAndLid() {
  return (
    <group>
      <mesh position={[0.15, 1.05, 0]} rotation={[0, 0, -0.18]}>
        <cylinderGeometry args={[0.045, 0.045, 1.1, 12]} />
        <meshStandardMaterial color="#FFD1E0" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.06, 48]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.5} roughness={0.15} />
      </mesh>
    </group>
  );
}

type Props = { drink: DrinkSpec; focused?: boolean; idleRotate?: boolean };

export default function ProceduralDrink({ drink, focused, idleRotate = true }: Props) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    if (idleRotate) groupRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
    const target = focused ? 1.15 : 0.82;
    groupRef.current.scale.lerp(new THREE.Vector3(target, target, target), 0.08);
  });

  if (drink.modelPath) {
    return (
      <group ref={groupRef} scale={0.82}>
        <GLBModel path={drink.modelPath} />
      </group>
    );
  }

  return (
    <group ref={groupRef} scale={0.82}>
      <GlassShell />
      <Liquid color={drink.liquidColor} />
      {drink.hasIce && <IceCubes />}
      {drink.hasSwirl && drink.swirlColor && <Swirl color={drink.swirlColor} />}
      {drink.hasCream ? (
        <WhippedCream color={drink.foamColor} />
      ) : (
        drink.foamColor && <FoamCap color={drink.foamColor} />
      )}
      <StrawAndLid />
    </group>
  );
}