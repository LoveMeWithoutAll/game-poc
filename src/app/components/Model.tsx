import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useState} from "react";
import {STATES} from "./Controller.tsx";
import * as THREE from 'three'
import {AnimationAction} from 'three'

function Model(props: any) {
  const {scene, animations} = useGLTF('/assets/RobotExpressive.glb')
  const {actions, mixer} = useAnimations(animations, scene);

  const [prevState, setPrevState] = useState(STATES.Idle.key);

  const isCustomEvent = (event: Event): event is CustomEvent => {
    return 'detail' in event;
  }
  const changeState = (event: Event) => {
    if (!isCustomEvent(event)) return;
    if (!actions) return;

    const newState = event.detail.state;
    const isLoop = event.detail.loop;
    const newAction: AnimationAction | null = actions[newState];

    if (!newAction) return;

    if (!isLoop) {
      // @ts-ignore
      newAction.clampWhenFinished = true;
      // @ts-ignore
      newAction.loop = THREE.LoopOnce;
    }

    if (prevState !== newState) mixer.stopAllAction();

    newAction.reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(0.5)
      .play();

    setPrevState(newState);
  }

  useEffect(() => {
    if (!actions.Idle) return;

    actions.Idle.play();
  }, [actions, scene])

  useEffect(() => {
    // const face = scene.getObjectByName('Head_4')
    // console.log('face', face)
    // const expressions = Object.keys(face!.morphTargetDictionary);
    // console.log('expressions', expressions)
    // face!.morphTargetInfluences = [0, 1, 0]
  }, [])

  useEffect(() => {
    window.addEventListener('changeState', changeState)

    return () => {
      document.removeEventListener('changeState', changeState)
    }
  }, [])


  return <primitive object={scene} {...props} />
}

export default Model;
