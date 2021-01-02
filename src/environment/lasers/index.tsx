import { laserPositionState } from "gameState";
import { useRecoilValue } from "recoil";
import { Color } from "three";

// Draws all of the lasers existing in state.
function Lasers() {
    const lasers = useRecoilValue(laserPositionState);
    return (
      <group>
        {lasers.map((laser) => (
          <mesh position={[laser.x, laser.y, laser.z]} key={`${laser.id}`}>
            <cylinderBufferGeometry attach="geometry" args={[2, 2, 17, 20, 4, false, 90]} />
            <meshStandardMaterial attach="material" emissive={new Color("red")} />
          </mesh>
        ))}
      </group>
    );
  }

  export default Lasers;