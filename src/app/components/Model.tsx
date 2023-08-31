import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect} from "react";

function Model(props: any) {
  const { scene, animations } = useGLTF('/RobotExpressive.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (!actions.Idle) return;

    actions.Idle.play();
  }, [actions, scene])
  return <primitive object={scene} {...props} />
}

export default Model;
