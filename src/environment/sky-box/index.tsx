import { useThree } from "react-three-fiber";
import { CubeTextureLoader } from "three";

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "./env/space/1.jpg",
    "./env/space/2.jpg",
    "./env/space/3.jpg",
    "./env/space/4.jpg",
    "./env/space/5.jpg",
    "./env/space/6.jpg",
  ]);
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
};

export default SkyBox;