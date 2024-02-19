"use client";

import FaqItem from "./faq/FaqItem";
import { motion } from "framer-motion";
import { fadeNone } from "@/components/ui/variants"; // Adjust the import path as needed

const faqData = [
  {
    question: "Why to believe in Insove medical healthcare",
    answer:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    delay: 0.2,
  },
  {
    question: "Will we get healthcare updates after surgery?",
    answer:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    delay: 0.2,
  },
  {
    question: "Will we get healthcare updates after surgery?",
    answer:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    delay: 0.2,
  },
  {
    question: "Will we get healthcare updates after surgery?",
    answer:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    delay: 0.2,
  },
];

const Faq: React.FC = () => {
  return (
    <section className="faq xl:pt-[150px]">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeNone(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="fag__title h2 mb-[50px] text-center"
        >
          We've got answers
        </motion.h2>
        <div className="mx-auto max-w-5xl">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              delay={faq.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
