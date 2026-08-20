import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const points = useRef();
  const { viewport } = useThree();

  // Fewer particles on compact screens, while retaining the same visual density.
  const count = useMemo(() => (window.innerWidth < 768 ? 2400 : 4800), []);
  const { positions, origins, colors, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const phase = new Float32Array(count);
    const blue = new THREE.Color('#27b8ff');
    const purple = new THREE.Color('#9b5cff');

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const radius = 4 + Math.random() * 13;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i3] = base[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = base[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = base[i3 + 2] = radius * Math.cos(phi) - 3;
      phase[i] = Math.random() * Math.PI * 2;
      const color = blue.clone().lerp(purple, Math.random());
      cols[i3] = color.r;
      cols[i3 + 1] = color.g;
      cols[i3 + 2] = color.b;
    }
    return { positions: pos, origins: base, colors: cols, phases: phase };
  }, [count]);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    const array = points.current.geometry.attributes.position.array;
    const mouseX = pointer.x * viewport.width * 0.48;
    const mouseY = pointer.y * viewport.height * 0.48;

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const driftX = Math.sin(t * 0.12 + phases[i]) * 0.18;
      const driftY = Math.cos(t * 0.15 + phases[i] * 1.7) * 0.16;
      let targetX = origins[i3] + driftX;
      let targetY = origins[i3 + 1] + driftY;

      // Cursor repulsion in the camera-facing plane.
      const dx = targetX - mouseX;
      const dy = targetY - mouseY;
      const distanceSq = dx * dx + dy * dy;
      if (distanceSq < 2.8) {
        const force = (2.8 - distanceSq) / 2.8;
        const inv = 1 / Math.sqrt(distanceSq + 0.02);
        targetX += dx * inv * force * 1.25;
        targetY += dy * inv * force * 1.25;
      }
      array[i3] += (targetX - array[i3]) * 0.035;
      array[i3 + 1] += (targetY - array[i3 + 1]) * 0.035;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y = t * 0.012 + pointer.x * 0.025;
    points.current.rotation.x = pointer.y * -0.018;
  });

  return (
    <points ref={points} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        sizeAttenuation
        transparent
        opacity={0.78}
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="particle-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 58 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
