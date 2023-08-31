import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect} from "react";

function Model(props: any) {
  const { scene, animations } = useGLTF('/robot-draco.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (!actions.Idle) return;

    actions.Idle.play()
    scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
  }, [actions, scene])
  return <primitive object={scene} {...props} />
}

export default Model;
