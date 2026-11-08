import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const TEAL = "#25C8D1";
const CYAN = "#83E6E6";
const EMBLEM_CENTER_X = 0.45;
const EMBLEM_CENTER_Y = -0.65;

function Emblem() {
  const tex = useLoader(THREE.TextureLoader, "/hover_logo.png");
  tex.colorSpace = THREE.SRGBColorSpace;
  const group = useRef<THREE.Group>(null);
  const aspect = 1;
  const layers = 5;

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const dt = Math.min(delta, 0.05);
    const tx = state.pointer.x * 0.5 + Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    const ty = -state.pointer.y * 0.3;
    g.rotation.y += (tx - g.rotation.y) * (1 - Math.exp(-3 * dt));
    g.rotation.x += (ty - g.rotation.x) * (1 - Math.exp(-3 * dt));
    g.position.y = EMBLEM_CENTER_Y + Math.sin(state.clock.elapsedTime * 1.2) * 0.12;
  });

  return (
    <group ref={group} position={[EMBLEM_CENTER_X, EMBLEM_CENTER_Y, 0]} scale={4.5}>
      {Array.from({ length: layers }).map((_, i) => {
        const front = i === layers - 1;
        return (
          <mesh key={i} position={[0, 0, (i - layers + 1) * 0.012]}>
            <planeGeometry args={[aspect, 1]} />
            <meshStandardMaterial
              map={tex}
              transparent
              alphaTest={0.4}
              side={THREE.DoubleSide}
              metalness={front ? 0.45 : 0.7}
              roughness={front ? 0.45 : 0.6}
              color={front ? "#ffffff" : "#2c4a52"}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Ocean() {
  const ref = useRef<THREE.Points>(null);
  const { positions, base } = useMemo(() => {
    const cols = 36,
      rows = 20;
    const p = new Float32Array(cols * rows * 3);
    let k = 0;
    for (let i = 0; i < cols; i++)
      for (let j = 0; j < rows; j++) {
        p[k++] = (i - cols / 2) * 0.28;
        p[k++] = 0;
        p[k++] = (j - rows / 2) * 0.28;
      }
    return { positions: p, base: p.slice() };
  }, []);

  const lastUpdate = useRef(0);
  useFrame((state) => {
    const pts = ref.current;
    if (!pts) return;
    const t = state.clock.elapsedTime;
    if (t - lastUpdate.current < 1 / 24) return;
    lastUpdate.current = t;
    const attr = pts.geometry.getAttribute("position");
    const arr = attr.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      const x = base[i] ?? 0,
        z = base[i + 2] ?? 0;
      arr[i + 1] = Math.sin(x * 0.45 + t) * 0.35 + Math.cos(z * 0.6 + t * 0.8) * 0.25;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref} position={[0, -3.2, -4]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color={TEAL} transparent opacity={0.75} sizeAttenuation />
    </points>
  );
}

function Rings() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.children.forEach((c, i) => {
      c.rotation.z += Math.min(d, 0.05) * (i % 2 ? -0.15 : 0.1);
    });
  });
  return (
    <group ref={ref} position={[0, 0, -1.2]}>
      {[2.3, 2.75, 3.3].map((r, i) => (
        <mesh key={r} rotation={[0, 0, i]}>
          <ringGeometry args={[r, r + 0.012, 6, 1, 0, Math.PI * (1.2 + i * 0.25)]} />
          <meshBasicMaterial
            color={i === 1 ? CYAN : TEAL}
            transparent
            opacity={0.45 - i * 0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function Ready({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    const id = requestAnimationFrame(onReady);
    return () => cancelAnimationFrame(id);
  }, [onReady]);
  return null;
}

export default function TurtleScene() {
  const wrap = useRef<HTMLDivElement>(null);
  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.25]}
        performance={{ min: 0.6 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#ffffff", 7, 16]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={2} />
        <pointLight position={[-3, -1, 2]} intensity={8} color={TEAL} />
        <Ocean />
        <Rings />
        <Suspense fallback={null}>
          <Emblem />
          <Ready onReady={() => wrap.current?.setAttribute("data-scene-ready", "true")} />
        </Suspense>
      </Canvas>
    </div>
  );
}
