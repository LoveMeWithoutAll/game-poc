import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {OrbitControls, Stage, useGLTF} from "@react-three/drei";
import Model from "./app/components/Model.tsx";

useGLTF.preload('/robot.gltf')

function App() {
  return (
    <Canvas shadows camera={{
      fov: 45,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.25,
      far: 100,
      position: [-5, 3, 10]
    }}>
      <Suspense fallback={null}>
        <Stage shadows={{type: 'contact', opacity: 1, blur: 2, size: 1}}>
          <mesh>
            <hemisphereLight intensity={0.15} groundColor="black"/>
            <Model scale={[0.01, 0.01, 0.01]}/>
          </mesh>
        </Stage>
      </Suspense>
      <OrbitControls makeDefault/>
    </Canvas>
  )
}

export default App
