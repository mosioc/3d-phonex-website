import React, { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { SRGBColorSpace, Color } from "three";
import usePhoneXStore from "../../store/index"; 

export default function ModelPhonex(props) {
  const color = usePhoneXStore((state) => state.color);

  const noChangeParts = [
    "Object_2",
    "Object_10",
    "Object_11",
    "Object_12",
    "Object_13",
    "Object_23",
    "Object_26",
  ];

  const { nodes, materials, scene } = useGLTF(
    "/models/samsung_galaxy_s22_ultra-transformed.glb"
  );

  const texture = useTexture("/texture.png");
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && !noChangeParts.includes(child.name)) {
        child.material = child.material.clone();
        child.material.color = new Color(color);
        child.material.needsUpdate = true;
      }
    });
  }, [color, scene]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.PaletteMaterial001}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial002}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.Cam_lens}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.Display_ActiveArea}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.Flash}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_23.geometry}
        material={materials.SpeakerMic}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials.Zoom_Cam}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/samsung_galaxy_s22_ultra-transformed.glb");
