import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraController() {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      6,
      0.01
    );
  });

  return null;
}