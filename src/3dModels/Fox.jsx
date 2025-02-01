
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber"
// import { a } from "@react-spring/three"

// import foxScene from "../assets/3d/fox.glb"
import FoxScene from "../assets/3d/fox.glb"


const Fox = ({ currentAnimation, ...props }) => {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(FoxScene);
  console.log(animations);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach(action => action.stop())

    if (actions[currentAnimation]) {
      actions[currentAnimation].play()
    }

  }, [actions, currentAnimation])

  useEffect(() => {
    Object.values(actions).forEach(action => {
      action.fadeOut(0.5);
    });

    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
    }
  }, [actions, currentAnimation]);


  return (
    <group ref={group} {...props} >
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
}

export default Fox
