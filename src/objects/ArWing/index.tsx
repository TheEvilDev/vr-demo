import React, { FC, useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { useRecoilState } from 'recoil';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { shipPositionState } from "../../gameState";


interface ArWingProps {
}

const ArWing : FC<ArWingProps> = () => {
    const ship = useRef(null);
    const [shipPosition, setShipPosition] = useRecoilState(shipPositionState);

    const scene = useLoader(GLTFLoader, "./models/arwing.glb");
    const nodes = (scene as unknown as any).nodes;

    useFrame(({ mouse }) => {
        setShipPosition({
            position: { x: mouse.x * 6, y: mouse.y * 2 },
            rotation: { z: -mouse.x * 0.5, x: -mouse.x * 0.5, y: -mouse.y * 0.2 },
        });
    });

    useFrame(() => {
        ship.current.rotation.z = shipPosition.rotation.z;
        ship.current.rotation.y = shipPosition.rotation.x;
        ship.current.rotation.x = shipPosition.rotation.y;
        ship.current.position.y = shipPosition.position.y;
        ship.current.position.x = shipPosition.position.x;
    });

    return (
        <group ref={ship}>
        <mesh visible geometry={nodes.Default.geometry}>
            <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.3}
            />
        </mesh>
        </group>
    );
}

export default ArWing;