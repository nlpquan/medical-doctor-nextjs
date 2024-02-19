"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { fadeNone } from "@/components/ui/variants";

interface FaqItemProps {
  question: string;
  answer: string;
  delay: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      variants={fadeNone(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="faq__item cursor-pointer select-none border-b px-[30px] pb-4 pt-7"
      onClick={toggleFaq}
    >
      <div className="mb-[10px] flex items-center justify-between">
        <h4 className="h4">{question}</h4>
        <div className="faq__btn text-accent">
          {isOpen ? (
            <Minus className="text-2xl" />
          ) : (
            <Plus className="text-2xl" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="faq__answer">
          <p className="font-light">{answer}</p>
        </div>
      )}
    </motion.div>
  );
};

export default FaqItem;
