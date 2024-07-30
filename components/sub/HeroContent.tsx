"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Environment } from "@react-three/drei";
import { Robot } from "../../components/sub/robot";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-10 lg:px-20 mt-20 lg:mt-30 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            <Typewriter
              options={{
                strings: ["Veritex Innovation"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing{" "}
            <Typewriter
              options={{
                strings: ["the best"],
                autoStart: true,
                loop: true,
              }}
            />
            {" "}
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          At Veritex Innovation Company, we revolutionize industries with our cutting-edge IoT and robotics solutions, crafting smart, automated systems that redefine innovation and efficiency. Experience the future of technology with our groundbreaking expertise and visionary approach.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div style={{ width: '50vw', height: '80vh' }}>
          <Canvas>
            <OrbitControls/>
            <Environment preset="sunset"/>
            <ambientLight/>
          <Robot position={[0,0,0]}/>
          </Canvas>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
