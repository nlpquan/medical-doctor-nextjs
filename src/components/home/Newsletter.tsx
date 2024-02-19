"use client";

import NewsletterText from "./newsletter/NewsletterText";
import NewsletterForm from "./newsletter/NewsletterForm";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/ui/variants";

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter relative flex items-center overflow-hidden bg-accent py-12 md:h-[444px]">
      <div className="absolute bottom-0 left-0">
        <img src="img/newsletter/pattern.svg" alt="" />
      </div>
      <div className="newsletter__container container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[58px]">
          <NewsletterText />
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
