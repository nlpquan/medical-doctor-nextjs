import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/ui/variants";

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="services__item flex min-h-[288px] flex-col items-center rounded-[10px] bg-white p-[30px] text-center shadow-custom2"
    >
      <div className="mb-[15px]">
        <img src={icon} alt={title} />
      </div>
      <h3 className="h3 mb-[10px]">{title}</h3>
      <p className="max-w-[300px] font-light leading-normal">{description}</p>
    </motion.div>
  );
};

export default ServiceItem;
