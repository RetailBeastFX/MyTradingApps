'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

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
            floatIntensity={0.3}
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

interface Mascot3DProps {
    scale?: number;
    className?: string;
}

export function Mascot3D({ scale = 2.5, className = '' }: Mascot3DProps) {
    return (
        <div className={`w-full h-full ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00E676" />

                <Suspense fallback={null}>
                    <MascotModel scale={scale} />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}

// Preload the model
useGLTF.preload('/mascot/Normal.glb');

export default Mascot3D;
