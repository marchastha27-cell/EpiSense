import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { useRef } from "react";
import { Stars } from "@react-three/drei";
import { useState, useEffect } from "react";
import CameraController from "./CameraController";
import CityMarker from "./CityMarker";
import cities from "../../data/cities";





function Earth({children}) {
  const mesh = useRef();

  const color = useLoader(TextureLoader, "/textures/earth_day.jpg");

  // Rotation where India roughly faces the camera
  const targetRotation = -2.9;

  useFrame((state) => {
    // Smoothly rotate toward India
    mesh.current.rotation.y = THREE.MathUtils.lerp(
      mesh.current.rotation.y,
      targetRotation,
      0.01
    );

    // Floating animation
    mesh.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.08;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={color} />
      {children}
    </mesh>
  );
}

export default function HeroGlobe() {

  const [showStars, setShowStars] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowStars(true);
  }, 1000);

  return () => clearTimeout(timer);
}, []);



  return (
    
     

    <div className="w-[500px] h-[500px]">
         

      
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <CameraController />
          <ambientLight intensity={1.8} />

        <directionalLight
          position={[6, 4, 5]}
          intensity={3}
        />
        

      <pointLight
       position={[-5,2,5]}
       intensity={1.5}
      />
      <mesh scale={1.04}>
      <sphereGeometry args={[2,64,64]} />
      <meshBasicMaterial
      color="#3ec9ff"
      transparent
      opacity={0.05}
      />
     </mesh>
     
      <Earth >
  {cities.map((city) => (
    <CityMarker
      key={city.name}
      lat={city.lat}
      lon={city.lon}
      color={city.color}
    />
  ))}
</Earth>
   
      
    
        {showStars && (
         <Stars 
         radius={250}
         depth={8}
         count={2000}
         factor={12}
         saturation={0}
         fade
        />
)}

        
        

      </Canvas>
    </div>
  );
}