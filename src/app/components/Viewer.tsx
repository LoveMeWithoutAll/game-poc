import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {OrbitControls, Stage} from "@react-three/drei";
import {Vector3} from "three";
import Model from "./Model.tsx";

const Viewer = () => {
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
            <hemisphereLight position={new Vector3(0, 20, 0)}/>
            <directionalLight position={new Vector3(0, 20, 10)}/>
            <Model scale={[0.01, 0.01, 0.01]}/>
          </mesh>
        </Stage>
      </Suspense>
      <OrbitControls makeDefault/>
    </Canvas>
  )
}

export default Viewer;
