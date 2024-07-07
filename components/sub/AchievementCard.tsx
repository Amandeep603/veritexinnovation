"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
}

const AchievementCard = ({ src, title, description }: Props) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={src}
        alt={title}
        width={400}
        height={300}
        className="w-full h-[200px] object-cover"
      />
      <div className="relative p-4 bg-gradient-to-r from-purple-700 to-indigo-900">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default AchievementCard;


