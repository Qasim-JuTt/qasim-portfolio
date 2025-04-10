import React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import { Element } from "react-scroll"; // Import Element from react-scroll
import earthTexture from "/images/globe.jpeg"; // Ensure you have an Earth texture image

const SpinningGlobe = () => {
  const texture = useLoader(TextureLoader, earthTexture);
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} emissiveIntensity={0.8} />
    </mesh>
  );
};

const ContactForm = () => {
  return (
    <Element name="contact-form"> {/* Wrap contact form with Element */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white p-10 w-full">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-full md:w-1/2 p-10 bg-gray-700 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-6">Contact.</h2>
            <form className="flex flex-col gap-6 w-full">
              <input type="text" placeholder="What's your good name?" className="p-4 bg-gray-600 rounded text-white w-full" />
              <input type="email" placeholder="What's your web address?" className="p-4 bg-gray-600 rounded text-white w-full" />
              <textarea placeholder="What you want to say?" className="p-4 bg-gray-600 rounded text-white w-full h-32"></textarea>
              <button className="p-4 bg-blue-600 hover:bg-blue-700 rounded w-full">Send</button>
            </form>
          </div>
          <div className="w-full md:w-1/2 h-[500px] flex justify-center items-center">
            <Canvas>
              <ambientLight intensity={1} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <SpinningGlobe />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactForm;
