"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import imageMySelf from "@/assets/mySelf.png";
import Image from "next/image";

const ImageComponent = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="grid h-[500px] w-full place-items-center bg-neutral-100 dark:bg-neutral-900">
      {cards.map((card) => (
        <Card key={card.id} cards={cards} setCards={setCards} {...card} />
      ))}
    </div>
  );
};

interface CardProps {
  id: number;
  url: string;
  setCards: React.Dispatch<React.SetStateAction<{ id: number; url: string }[]>>;
  cards: { id: number; url: string }[];
}

const Card: React.FC<CardProps> = ({ id, url, setCards, cards }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const { theme } = useTheme(); // Get the current theme

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((prev) => prev.filter((card) => card.id !== id));
    }
  };

  return (
    <motion.div
      className={`relative h-96 w-72 origin-bottom rounded-lg overflow-hidden ${
        isFront ? "shadow-lg" : "shadow-md opacity-80"
      }`}
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    >
      <Image
        src={url}
        width={100}
        height={200}
        alt={`Image ${id}`}
        className="h-full w-full object-cover"
      />
      {!isFront && (
        <div
          className={`absolute inset-0 ${
            theme === "dark" ? "bg-black/80" : "bg-white/80"
          }`}
        ></div>
      )}
    </motion.div>
  );
};

export default ImageComponent;

const cardData = [
  {
    id: 1,
    url: imageMySelf.src,
  },
  {
    id: 2,
    url: imageMySelf.src,
  },
  {
    id: 4,
    url: imageMySelf.src,
  },
];
