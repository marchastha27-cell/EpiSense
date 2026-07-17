import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import latLonToVector from "../../utils/latLonToVector";

export default function CityMarker({ lat, lon, color }) {
  const marker = useRef();

  const position = latLonToVector(lat, lon, 2.03);

  useFrame((state) => {
    const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.2;
    marker.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={marker} position={position}>

    {/* Main Dot */}
    <mesh>
        <sphereGeometry args={[0.01,16,16]} />
        <meshBasicMaterial color={color}/>
    </mesh>

    {/* Glow Halo */}
    <mesh>
        <sphereGeometry args={[0.05,16,16]} />
        <meshBasicMaterial
            color={color}
            transparent
            opacity={0.25}
        />
    </mesh>

</group>
  );
}