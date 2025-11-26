"use client";

import { motion } from "framer-motion";
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      {/* Animated Link */}
      <motion.a
        className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold 
          bg-gray-200 dark:bg-gray-700 text-white"
        href="/"
        whileHover={{
          // scale: 1.5,
          backgroundColor: [
            "#121212",
            "rgba(131, 58,180,1)",
            "rgba(253, 29 , 29, 1)",
            "rgba(252, 176 , 69, 1)",
            "rgba(131, 58 , 180, 1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        CB
      </motion.a>
    </div>
  );
};

export default Logo;
