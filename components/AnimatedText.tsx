"use client";
import React from "react";
import { motion } from "framer-motion";

interface IconProps {
  text?: string;
  className?: string;
}

const quote = {
  initial: {
    opacity: 0,
    y: 50, // Start 50px below
  },
  animate: {
    opacity: 1,
    y: 0, // Move to original position
    transition: {
      delay: 0.5, // Delay the animation
      duration: 0.5, // Duration of the animation
    },
  },
};

const AnimatedText: React.FC<IconProps> = ({ text = "", className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex justify-center items-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={quote}
            initial="initial"
            animate="animate"
            className="inline-block"
            key={word + "-" + index}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
