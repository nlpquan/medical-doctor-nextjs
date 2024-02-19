import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "@/components/ui/variants";

interface StatItemProps {
  value: string;
  description: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, description, delay }) => {
  return (
    <motion.div
      variants={fadeIn("down", delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="stats__item flex flex-1 flex-col items-center xl:border-r"
    >
      <div className="text-4xl font-semibold text-accent-tertiary xl:mb-2 xl:text-[64px]">
        {value}
      </div>
      <div>{description}</div>
    </motion.div>
  );
};

export default StatItem;
