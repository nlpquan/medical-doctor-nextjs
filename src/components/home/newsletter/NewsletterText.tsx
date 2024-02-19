import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/ui/variants";

const NewsletterText: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0 }}
      className="z-10 flex-1 text-center md:text-left"
    >
      <div className="text-base font-medium uppercase tracking-[2.24px] text-white">
        Our newsletter
      </div>
      <h1 className="h1 mb-4 text-white">Subscribe to get more updates</h1>
    </motion.div>
  );
};

export default NewsletterText;
