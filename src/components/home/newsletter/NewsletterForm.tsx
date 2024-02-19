import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/ui/variants";

const NewsletterForm: React.FC = () => {
  return (
    <motion.form
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0 }}
      className="flex-1"
    >
      <div className="relative flex flex-col gap-y-4 md:flex-row">
        <input
          type="text"
          placeholder="Your email address"
          className="h-[66px] w-full rounded-full border-2 border-white bg-transparent pl-[30px] outline-none placeholder:text-white focus:text-white"
        />
        <button className="btn btn-lg btn-white right-0 md:absolute">
          Subscribe
        </button>
      </div>
    </motion.form>
  );
};

export default NewsletterForm;
