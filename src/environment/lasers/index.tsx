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
            <sphereBufferGeometry attach="geometry" args={[0.25, 16, 16]} />
            <meshStandardMaterial attach="material" emissive={new Color("white")} wireframe />
          </mesh>
        ))}
      </group>
    );
  }

  export default Lasers;