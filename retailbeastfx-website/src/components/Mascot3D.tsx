'use client';

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// ═══════════════════════════════════════════════════════════════════════════
// FLOATING CHART SCREEN - Solo Leveling Quest Window Style
// ═══════════════════════════════════════════════════════════════════════════
interface FloatingScreenProps {
    position: [number, number, number];
    rotation?: [number, number, number];
    scale?: number;
    color?: string;
    delay?: number;
}

function FloatingScreen({
    position,
    rotation = [0, 0, 0],
    scale = 1,
    color = '#00E676',
    delay = 0
}: FloatingScreenProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    // Holographic pulsing animation
    useFrame((state) => {
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.MeshBasicMaterial;
            material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.15;
            // Subtle float
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + delay) * 0.05;
        }
    });

    return (
        <mesh
            ref={meshRef}
            position={position}
            rotation={rotation}
            scale={scale}
        >
            {/* Screen panel */}
            <planeGeometry args={[1.2, 0.8]} />
            <meshBasicMaterial
                color={color}
                transparent
                opacity={0.5}
                side={THREE.DoubleSide}
            />
            {/* Border glow */}
            <lineSegments>
                <edgesGeometry args={[new THREE.PlaneGeometry(1.2, 0.8)]} />
                <lineBasicMaterial color={color} linewidth={2} />
            </lineSegments>
        </mesh>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// CANDLESTICK CHART VISUALIZATION (Simple 3D bars)
// ═══════════════════════════════════════════════════════════════════════════
function CandlestickChart({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
    const candles = useMemo(() => {
        // Generate simple candlestick pattern
        return [
            { x: -0.4, height: 0.3, color: '#00E676' },  // Bull
            { x: -0.2, height: 0.2, color: '#FF5252' },  // Bear
            { x: 0, height: 0.4, color: '#00E676' },     // Bull (big)
            { x: 0.2, height: 0.15, color: '#FF5252' },  // Bear
            { x: 0.4, height: 0.35, color: '#00E676' },  // Bull
        ];
    }, []);

    return (
        <group position={position} rotation={rotation}>
            {/* Screen background */}
            <mesh position={[0, 0, -0.01]}>
                <planeGeometry args={[1.4, 0.9]} />
                <meshBasicMaterial color="#0a0a0a" transparent opacity={0.8} />
            </mesh>
            {/* Border */}
            <lineSegments position={[0, 0, 0]}>
                <edgesGeometry args={[new THREE.PlaneGeometry(1.4, 0.9)]} />
                <lineBasicMaterial color="#00E676" />
            </lineSegments>
            {/* Candlesticks */}
            {candles.map((candle, i) => (
                <mesh key={i} position={[candle.x, candle.height / 2 - 0.2, 0]}>
                    <boxGeometry args={[0.08, candle.height, 0.02]} />
                    <meshBasicMaterial color={candle.color} transparent opacity={0.9} />
                </mesh>
            ))}
            {/* Grid lines */}
            {[-0.3, -0.1, 0.1, 0.3].map((y, i) => (
                <mesh key={i} position={[0, y, -0.005]}>
                    <planeGeometry args={[1.3, 0.005]} />
                    <meshBasicMaterial color="#1a1a1a" transparent opacity={0.5} />
                </mesh>
            ))}
        </group>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// HEXAGON PLATFORM - Sci-Fi Base
// ═══════════════════════════════════════════════════════════════════════════
function HexagonPlatform() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Pulsing glow animation
    useFrame((state) => {
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.MeshBasicMaterial;
            material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
        }
    });

    return (
        <group position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            {/* Main hexagon */}
            <mesh ref={meshRef}>
                <circleGeometry args={[1.2, 6]} />
                <meshBasicMaterial
                    color="#00E676"
                    transparent
                    opacity={0.3}
                    side={THREE.DoubleSide}
                />
            </mesh>
            {/* Inner hexagon */}
            <mesh position={[0, 0, 0.01]}>
                <ringGeometry args={[0.8, 1.1, 6]} />
                <meshBasicMaterial
                    color="#00E676"
                    transparent
                    opacity={0.5}
                    side={THREE.DoubleSide}
                />
            </mesh>
            {/* Outer glow ring */}
            <mesh position={[0, 0, -0.01]}>
                <ringGeometry args={[1.15, 1.25, 6]} />
                <meshBasicMaterial
                    color="#00E676"
                    transparent
                    opacity={0.7}
                    side={THREE.DoubleSide}
                />
            </mesh>
            {/* Center glow */}
            <mesh position={[0, 0, 0.02]}>
                <circleGeometry args={[0.3, 6]} />
                <meshBasicMaterial
                    color="#00FF88"
                    transparent
                    opacity={0.4}
                />
            </mesh>
        </group>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// MASCOT MODEL
// ═══════════════════════════════════════════════════════════════════════════
interface MascotModelProps {
    scale?: number;
}

function MascotModel({ scale = 1 }: MascotModelProps) {
    const { scene } = useGLTF('/mascot/Normal.glb');
    const meshRef = useRef<THREE.Group>(null);

    // Subtle idle animation - gentle sway
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={0.1}
            floatIntensity={0.2}
        >
            <primitive
                ref={meshRef}
                object={scene}
                scale={scale}
                position={[0, -1, 0]}
            />
        </Float>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// HOLOGRAPHIC COMMAND CENTER - Main Export
// ═══════════════════════════════════════════════════════════════════════════
interface Mascot3DProps {
    scale?: number;
    className?: string;
    showEnvironment?: boolean;
}

export function Mascot3D({ scale = 2.5, className = '', showEnvironment = true }: Mascot3DProps) {
    return (
        <div className={`w-full h-full ${className}`}>
            <Canvas
                camera={{ position: [0, 0.5, 5], fov: 45 }}
                style={{ background: 'transparent' }}
            >
                {/* Lighting */}
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <pointLight position={[-3, 2, -3]} intensity={0.6} color="#00E676" />
                <pointLight position={[3, 2, -3]} intensity={0.4} color="#00E676" />

                <Suspense fallback={null}>
                    {/* THE BEAST */}
                    <MascotModel scale={scale} />

                    {showEnvironment && (
                        <>
                            {/* HEXAGON PLATFORM */}
                            <HexagonPlatform />

                            {/* FLOATING CHART SCREENS - Solo Leveling Style */}
                            {/* Left screen */}
                            <CandlestickChart
                                position={[-2, 0.5, -1]}
                                rotation={[0, 0.4, 0]}
                            />

                            {/* Right screen */}
                            <CandlestickChart
                                position={[2, 0.3, -1]}
                                rotation={[0, -0.4, 0]}
                            />

                            {/* Top center screen (smaller, data panel) */}
                            <FloatingScreen
                                position={[0, 1.8, -0.5]}
                                rotation={[-0.2, 0, 0]}
                                scale={0.6}
                                color="#FFD700"
                                delay={1}
                            />
                        </>
                    )}

                    <Environment preset="night" />
                </Suspense>
            </Canvas>
        </div>
    );
}

// Preload the model
useGLTF.preload('/mascot/Normal.glb');

export default Mascot3D;
