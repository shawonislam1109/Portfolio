"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import imageMySelf from "@/assets/mySelf.png"; // Replace with your image

const AboutImage = () => {
  return (
    <div className="grid w-full place-content-center px-4 py-12 text-slate-900 dark:from-gray-800 dark:to-gray-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-[2px] shadow-lg"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 rounded-xl bg-white dark:bg-gray-900 overflow-hidden"
      >
        <div
          className="absolute inset-[2px] rounded-[calc(0.75rem-2px)] bg-gradient-to-br from-gray-700 to-gray-800 shadow-2xl overflow-hidden"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          <Image
            src={imageMySelf.src} // Replace with your actual image
            alt="Your Image"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutImage;
