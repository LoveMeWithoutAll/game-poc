import './App.css'
import { Canvas } from "@react-three/fiber";

const color = 0xffffff;
const intensity = 1;

function App() {
  return (
    <>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
