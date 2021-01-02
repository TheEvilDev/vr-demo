import { enemyPositionState } from "gameState";
import { useRecoilValue } from "recoil";

// Manages Drawing enemies that currently exist in state
function Enemies() {
    const enemies = useRecoilValue(enemyPositionState);
    return (
      <group>
        {enemies.map((enemy) => (
          <mesh position={[enemy.x, enemy.y, enemy.z]} key={`${enemy.x}`}>
            <sphereBufferGeometry attach="geometry" args={[2, 8, 8]} />
            <meshStandardMaterial attach="material" color="white" wireframe />
          </mesh>
        ))}
      </group>
    );
  }

  export default Enemies;
  