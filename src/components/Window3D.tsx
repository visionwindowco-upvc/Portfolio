'use client';

import { useRef, useMemo, Suspense, useState, useEffect, Component, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment
} from '@react-three/drei';
import * as THREE from 'three';

const globalPointer = { x: 0, y: 0 };
if (typeof window !== 'undefined') {
  window.addEventListener('pointermove', (e) => {
    globalPointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    globalPointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

function WindowFrame({ onIntroFinish, activeFeature }: { onIntroFinish?: () => void, activeFeature?: number | null }) {
  const groupRef = useRef<THREE.Group>(null);
  const baseRotX = useRef(0);
  const baseRotY = useRef(0);
  const introTimer = useRef(0);
  const introDuration = 5.0;
  const hasFinishedIntro = useRef(false);

  // Pre-allocate quaternions to avoid GC pressure every frame
  const _qExpl = useMemo(() => new THREE.Quaternion(), []);
  const _qOrig = useMemo(() => new THREE.Quaternion(), []);

  useEffect(() => {
    const handleScroll = () => {
      if (introTimer.current < introDuration && window.scrollY > 10) {
        introTimer.current = introDuration;
        if (!hasFinishedIntro.current && onIntroFinish) {
          hasFinishedIntro.current = true;
          onIntroFinish();
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const skipIntro = window.scrollY > 100;
    if (skipIntro) {
      introTimer.current = introDuration;
      if (!hasFinishedIntro.current && onIntroFinish) {
        hasFinishedIntro.current = true;
        onIntroFinish();
      }
    }

    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.userData.origPos = child.position.clone();
        
        let delay = 0;
        let dur = 1.0;
        
        if (i <= 3) { delay = 0.2; dur = 1.0; }
        else if (i <= 5) { delay = 1.2; dur = 0.8; }
        else if (i <= 9) { delay = 2.0; dur = 0.8; }
        else if (i <= 11) { delay = 2.8; dur = 0.6; }
        else { delay = 0.2; dur = 1.0; }

        child.userData.delay = delay;
        child.userData.duration = dur;
        child.userData.origRot = child.rotation.clone();

        if (skipIntro) {
          child.userData.explPos = child.position.clone();
          child.userData.explRot = child.rotation.clone();
        } else {
          const angle = (i / groupRef.current!.children.length) * Math.PI * 2;
          child.userData.explPos = new THREE.Vector3(
            Math.cos(angle) * 10 + (Math.random() - 0.5) * 5,
            Math.sin(angle) * 10 + (Math.random() - 0.5) * 5,
            5 + Math.random() * 5
          );
          child.userData.explRot = new THREE.Euler(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
          );
        }
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (introTimer.current < introDuration) {
      introTimer.current += delta;
    }
    const time = introTimer.current;

    // Use performance.now() for float to avoid clock issues
    const now = performance.now() * 0.0005;
    const floatRotY = Math.sin(now) * 0.05;
    const floatRotX = Math.cos(now) * 0.05;
    
    let normalRotX = 0;
    let normalRotY = 0;

    if (activeFeature === null) {
      const scrollRotY = (window.scrollY / window.innerHeight) * Math.PI * 0.1;
      const targetRotY = (globalPointer.x * Math.PI) / 12;
      const targetRotX = -(globalPointer.y * Math.PI) / 24;
      
      normalRotX = THREE.MathUtils.lerp(baseRotX.current, targetRotX + floatRotX, 0.05);
      normalRotY = THREE.MathUtils.lerp(baseRotY.current, targetRotY + floatRotY + scrollRotY, 0.05);
    } else {
      let targetRotX = floatRotX;
      let targetRotY = floatRotY;
      
      switch (activeFeature) {
        case 0:
          targetRotY += Math.PI / 8;
          targetRotX -= Math.PI / 16;
          break;
        case 1:
          targetRotY -= Math.PI / 6;
          break;
        case 2:
          targetRotY = 0;
          break;
        case 3:
          targetRotY += Math.PI / 4;
          targetRotX += Math.PI / 12;
          break;
      }
      
      normalRotX = THREE.MathUtils.lerp(baseRotX.current, targetRotX, 0.04);
      normalRotY = THREE.MathUtils.lerp(baseRotY.current, targetRotY, 0.04);
    }

    baseRotX.current = normalRotX;
    baseRotY.current = normalRotY;

    if (time < introDuration) {
      let groupProgress = 0;
      if (time > 3.5) {
        groupProgress = Math.min((time - 3.5) / 1.5, 1.0);
      }
      const easeOutGroup = 1 - Math.pow(1 - groupProgress, 4);

      const introSpinY = THREE.MathUtils.lerp(-Math.PI * 2 - Math.PI / 8, 0, easeOutGroup);
      const zPos = THREE.MathUtils.lerp(0.8, 0, easeOutGroup);
      groupRef.current.position.z = zPos;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, normalRotX, delta * 4);
      groupRef.current.rotation.y = normalRotY + introSpinY;

      groupRef.current.children.forEach((child) => {
        if (child.userData.origPos) {
          const delay = child.userData.delay;
          const dur = child.userData.duration;
          let pieceProgress = 0;
          if (time > delay) {
            pieceProgress = Math.min((time - delay) / dur, 1.0);
          }
          const easeOutPiece = 1 - Math.pow(1 - pieceProgress, 4);

          child.position.lerpVectors(child.userData.explPos, child.userData.origPos, easeOutPiece);
          
          // Reuse pre-allocated quaternions instead of creating new ones every frame
          _qExpl.setFromEuler(child.userData.explRot);
          _qOrig.setFromEuler(child.userData.origRot);
          child.quaternion.slerpQuaternions(_qExpl, _qOrig, easeOutPiece);
        }
      });
    } else {
      if (!hasFinishedIntro.current) {
        hasFinishedIntro.current = true;
        
        groupRef.current.position.z = 0;
        groupRef.current.children.forEach((child) => {
          if (child.userData.origPos) {
            child.position.copy(child.userData.origPos);
            child.rotation.copy(child.userData.origRot);
          }
        });

        if (onIntroFinish) onIntroFinish();
      }

      // Snap pieces if not perfectly in place
      if (groupRef.current.children[0]?.userData.origPos && 
          groupRef.current.children[0].position.distanceTo(groupRef.current.children[0].userData.origPos) > 0.001) {
        groupRef.current.children.forEach((child) => {
          child.position.copy(child.userData.origPos);
          child.rotation.copy(child.userData.origRot);
        });
      }

      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, 0, delta * 4);
      groupRef.current.rotation.x = normalRotX;
      groupRef.current.rotation.y = normalRotY;
    }
  });

  // Frame dimensions
  const frameWidth = 3;
  const frameHeight = 4;
  const frameDepth = 0.25;
  const frameThickness = 0.2;
  const mullionThickness = 0.12;

  const frameMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#f5f5f5'),
    roughness: 0.3,
    metalness: 0.05,
    clearcoat: 0.8,
    clearcoatRoughness: 0.15,
    envMapIntensity: 0.6,
  }), []);

  const handleMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#c0c0c0'),
    roughness: 0.15,
    metalness: 0.9,
    envMapIntensity: 1.2,
  }), []);

  // Simplified glass material — no transmission (huge perf hit)
  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#d4eaff'),
    transparent: true,
    opacity: 0.35,
    roughness: 0.05,
    metalness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    envMapIntensity: 0.8,
    side: THREE.DoubleSide,
  }), []);

  const halfW = frameWidth / 2;
  const halfH = frameHeight / 2;
  const panelW = (frameWidth - frameThickness * 2 - mullionThickness) / 2;
  const panelH = (frameHeight - frameThickness * 2 - mullionThickness) / 2;

  return (
    <group ref={groupRef}>
        {/* Outer Frame - Top */}
        <mesh position={[0, halfH - frameThickness/2, 0]} material={frameMaterial}>
          <boxGeometry args={[frameWidth, frameThickness, frameDepth]} />
        </mesh>
        {/* Outer Frame - Bottom */}
        <mesh position={[0, -halfH + frameThickness/2, 0]} material={frameMaterial}>
          <boxGeometry args={[frameWidth, frameThickness, frameDepth]} />
        </mesh>
        {/* Outer Frame - Left */}
        <mesh position={[-halfW + frameThickness/2, 0, 0]} material={frameMaterial}>
          <boxGeometry args={[frameThickness, frameHeight, frameDepth]} />
        </mesh>
        {/* Outer Frame - Right */}
        <mesh position={[halfW - frameThickness/2, 0, 0]} material={frameMaterial}>
          <boxGeometry args={[frameThickness, frameHeight, frameDepth]} />
        </mesh>

        {/* Center Vertical Mullion */}
        <mesh position={[0, 0, 0]} material={frameMaterial}>
          <boxGeometry args={[mullionThickness, frameHeight - frameThickness * 2, frameDepth]} />
        </mesh>
        {/* Center Horizontal Mullion */}
        <mesh position={[0, 0, 0]} material={frameMaterial}>
          <boxGeometry args={[frameWidth - frameThickness * 2, mullionThickness, frameDepth]} />
        </mesh>

        {/* Glass Panels */}
        {[
          [-panelW/2 - mullionThickness/4, panelH/2 + mullionThickness/4],
          [panelW/2 + mullionThickness/4, panelH/2 + mullionThickness/4],
          [-panelW/2 - mullionThickness/4, -panelH/2 - mullionThickness/4],
          [panelW/2 + mullionThickness/4, -panelH/2 - mullionThickness/4],
        ].map((pos, i) => (
          <mesh key={i} position={[pos[0], pos[1], 0]} material={glassMaterial}>
            <planeGeometry args={[panelW - 0.04, panelH - 0.04]} />
          </mesh>
        ))}

        {/* Window Handle (right side) */}
        <mesh position={[halfW - frameThickness - 0.12, 0, frameDepth/2 + 0.02]} material={handleMaterial}>
          <boxGeometry args={[0.04, 0.22, 0.04]} />
        </mesh>
        <mesh position={[halfW - frameThickness - 0.12, 0.12, frameDepth/2 + 0.04]} material={handleMaterial}>
          <boxGeometry args={[0.04, 0.04, 0.08]} />
        </mesh>

        {/* Subtle inner bevel for depth */}
        {[
          { pos: [0, halfH - frameThickness - 0.01, frameDepth/2], size: [frameWidth - frameThickness*2, 0.02, 0.02] },
          { pos: [0, -halfH + frameThickness + 0.01, frameDepth/2], size: [frameWidth - frameThickness*2, 0.02, 0.02] },
        ].map((bevel, i) => (
          <mesh key={`bevel-${i}`} position={bevel.pos as [number, number, number]}>
            <boxGeometry args={bevel.size as [number, number, number]} />
            <meshPhysicalMaterial color="#e8e8e8" roughness={0.5} />
          </mesh>
        ))}

        {/* --- DYNAMIC GRAPHICAL EFFECTS --- */}
        {/* Weather Resistant - Rain Particles */}
        <group visible={activeFeature === 0}>
          <WeatherEffect />
        </group>

        {/* Energy Efficient - Thermal Aura */}
        <group visible={activeFeature === 1}>
          <EnergyEffect />
        </group>

        {/* Sound Insulation - Sound Waves */}
        <group visible={activeFeature === 2}>
          <SoundEffect />
        </group>

        {/* Low Maintenance - Sparkles */}
        <group visible={activeFeature === 3}>
          <MaintenanceEffect />
        </group>
      </group>
  );
}

// === EFFECT COMPONENTS ===

function WeatherEffect() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 100; // Reduced from 200
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = Math.random() * 6 - 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < 100; i++) {
        positions[i * 3 + 1] -= delta * 8;
        positions[i * 3] -= delta * 2;
        if (positions[i * 3 + 1] < -3) {
          positions[i * 3 + 1] = 3;
          positions[i * 3] = (Math.random() - 0.5) * 6 + 2;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={100} args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#93c5fd" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function EnergyEffect() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
    }
  });
  return (
    <mesh ref={meshRef} position={[0, 0, -0.2]}>
      <planeGeometry args={[4.2, 4.2]} />
      <meshBasicMaterial color="#fcd34d" transparent opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
}

function SoundEffect() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.scale.setScalar(1 + (t % 2));
      (ring1.current.material as THREE.MeshBasicMaterial).opacity = 1 - (t % 2);
    }
    if (ring2.current) {
      ring2.current.scale.setScalar(1 + ((t + 1) % 2));
      (ring2.current.material as THREE.MeshBasicMaterial).opacity = 1 - ((t + 1) % 2);
    }
  });

  return (
    <group position={[0, 0, 0.5]}>
      <mesh ref={ring1}>
        <ringGeometry args={[1, 1.1, 32]} />
        <meshBasicMaterial color="#60a5fa" transparent blending={THREE.AdditiveBlending} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={ring2}>
        <ringGeometry args={[1, 1.1, 32]} />
        <meshBasicMaterial color="#60a5fa" transparent blending={THREE.AdditiveBlending} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// Memoize the sparkle texture so it's only created once
let _sparkleTexture: THREE.CanvasTexture | null = null;
function getSparkleTexture() {
  if (_sparkleTexture) return _sparkleTexture;
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const context = canvas.getContext('2d')!;
  const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
  gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 32, 32);
  _sparkleTexture = new THREE.CanvasTexture(canvas);
  return _sparkleTexture;
}

function MaintenanceEffect() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 30; // Reduced from 50
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1;
    }
    return positions;
  }, []);

  const sparkleMap = useMemo(() => getSparkleTexture(), []);

  useFrame((state) => {
    if (pointsRef.current) {
      (pointsRef.current.material as THREE.PointsMaterial).opacity = 0.5 + Math.sin(state.clock.elapsedTime * 5) * 0.5;
      pointsRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <points ref={pointsRef} position={[0, 0, 0.5]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={30} args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="#ffffff" transparent opacity={0.8} map={sparkleMap} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

// Error Boundary to catch WebGL / Three.js runtime errors
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class Canvas3DErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('3D Canvas Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Loading / fallback UI component
function Window3DFallback() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
    }}>
      <div style={{
        position: 'relative',
        width: '60px',
        height: '80px',
        border: '4px solid #1a1a1a',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 0 25px rgba(0,0,0,0.1)',
        background: 'transparent',
        marginBottom: '20px'
      }}>
        {/* Left Fixed Pane */}
        <div style={{ 
          position: 'absolute', top: 0, bottom: 0, left: 0, width: '52%', 
          borderRight: '3px solid #1a1a1a',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 100%)',
          zIndex: 1
        }} />
        
        {/* Right Sliding Pane */}
        <div style={{ 
          position: 'absolute', top: 0, bottom: 0, right: 0, width: '52%', 
          borderLeft: '3px solid #1a1a1a',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 100%)',
          zIndex: 2,
          animation: 'windowSlide 2s infinite ease-in-out',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* Handle */}
          <div style={{ width: '3px', height: '14px', background: '#1a1a1a', marginLeft: '3px', borderRadius: '2px' }} />
        </div>
      </div>
      
      <style>{`
        @keyframes windowSlide {
          0%, 15%, 100% { transform: translateX(0); }
          40%, 75% { transform: translateX(-85%); }
        }
      `}</style>
    </div>
  );
}

export default function Window3D({ onIntroFinish, activeFeature = null }: { onIntroFinish?: () => void, activeFeature?: number | null }) {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setIsWebGLAvailable(false);
      }
    } catch {
      setIsWebGLAvailable(false);
    }
  }, []);

  if (!isClient) {
    return <Window3DFallback />;
  }

  if (!isWebGLAvailable) {
    return <Window3DFallback />;
  }

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      <Canvas3DErrorBoundary fallback={<Window3DFallback />}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 40 }}
          style={{ background: 'transparent' }}
          dpr={[1, 1.5]}
          frameloop="always"
          gl={{ 
            alpha: true, 
            antialias: false,
            powerPreference: 'default',
            failIfMajorPerformanceCaveat: false,
            stencil: false,
            depth: true,
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <directionalLight position={[-3, 3, -5]} intensity={0.3} color="#b0d4ff" />

            <WindowFrame onIntroFinish={onIntroFinish} activeFeature={activeFeature} />

            <Environment preset="city" environmentIntensity={0.4} />

            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              makeDefault
              maxPolarAngle={Math.PI / 1.7}
              minPolarAngle={Math.PI / 2.5}
            />
          </Suspense>
        </Canvas>
      </Canvas3DErrorBoundary>
    </div>
  );
}
