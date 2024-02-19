import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/ui/variants";

interface BrandItemProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  delay: number;
}

const BrandItem: React.FC<BrandItemProps> = ({
  src,
  alt,
  width,
  height,
  delay,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", delay)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
    >
      <Image
        className="brands__logo"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </motion.div>
  );
};

export default BrandItem;
