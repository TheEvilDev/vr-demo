// An invisible clickable element in the front of the scene.

import { shipPositionState, laserPositionState } from "gameState";
import { useRecoilValue, useRecoilState } from "recoil";
import { Color } from "three";

// Manages creating lasers with the correct initial velocity on click.
function LaserController() {
    const shipPosition = useRecoilValue(shipPositionState);
    const [lasers, setLasers] = useRecoilState(laserPositionState);
    return (
      <mesh
        position={[0, 0, -8]}
        onClick={() =>
          setLasers([
            ...lasers,
            {
              id: Math.random(),
              x: 0,
              y: 0,
              z: 0,
              velocity: [
                shipPosition.rotation.x * 6,
                shipPosition.rotation.y * 5,
              ],
            },
          ])
        }
      >
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial
          attach="material"
          color="orange"
          emissive={ new Color("#ff0860") }
          visible={false}
        />
      </mesh>
    );
  }

  export default LaserController;