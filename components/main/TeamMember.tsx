"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from './TeamMember.module.css';

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, expertise, imageSrc }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={imageSrc}
        alt={name}
        width={150}
        height={150}
        className={`${styles.image} rounded-full mb-4`}
      />
      <p className={styles.heading}>{name}</p>
      <p>{expertise}</p>
      <p>{role}</p>
    </motion.div>
  );
};

export default TeamMember;
