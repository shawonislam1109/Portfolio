import React from "react";
import { CircularText } from "./icons/socialIcnos";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex  justify-center items-center overflow-hidden">
      <div className="w-24 h-auto flex justify-center items-center relative">
        <CircularText className="fill-primary animate-spin-slow" />

        <Link href={""} className=""></Link>
      </div>
    </div>
  );
};

export default HireMe;
