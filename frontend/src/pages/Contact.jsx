"use client";
import React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import { Element } from "react-scroll";
import earthTexture from "/images/globe.jpeg";
import { useTheme } from "../context/ColorTheme";

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
  const { darkMode } = useTheme()

  // ✅ Tailwind classes based on theme
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-100";
  const cardBg = darkMode ? "bg-gray-700" : "bg-white";
  const inputBg = darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-black";
  const headingColor = darkMode ? "text-white" : "text-gray-900";

  return (
    <Element name="contact-form">
      <div className={`flex flex-col md:flex-row items-center justify-center min-h-screen ${bgColor} p-10 w-full`}>
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Contact Form */}
          <div className={`w-full md:w-1/2 p-10 rounded-lg shadow-lg flex flex-col items-center ${cardBg}`}>
            <h2 className={`text-4xl font-bold mb-6 ${headingColor}`}>Contact.</h2>
            <form className="flex flex-col gap-6 w-full">
              <input
                type="text"
                placeholder="What's your good name?"
                className={`p-4 rounded w-full ${inputBg}`}
              />
              <input
                type="email"
                placeholder="What's your web address?"
                className={`p-4 rounded w-full ${inputBg}`}
              />
              <textarea
                placeholder="What you want to say?"
                className={`p-4 rounded w-full h-32 ${inputBg}`}
              ></textarea>
              <button className="p-4 bg-blue-600 hover:bg-blue-700 rounded w-full text-white">Send</button>
            </form>
          </div>

          {/* 3D Globe */}
          <div className="w-full md:w-1/2 h-[500px] justify-center items-center hidden md:flex">
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
