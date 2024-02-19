"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/ui/variants";
import Image from "next/image";

const HeroImage: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="hero__img hidden max-w-[814px] self-end xl:flex"
    >
      <Image src="/img/hero/img.png" alt="Hero" width={600} height={80} />
    </motion.div>
  );
};

export default HeroImage;
