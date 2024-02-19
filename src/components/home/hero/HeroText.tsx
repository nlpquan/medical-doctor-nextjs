"use client";

import HeroBadge from "./HeroBadge";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/ui/variants";
import Link from "next/link";

const HeroText: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="hero__text text-center xl:w-[48%] xl:text-left"
    >
      <HeroBadge />
      <h1 className="h1 mb-6">We care about your health</h1>
      <p className="mb-[42px] md:max-w-xl">
        Discover Your Ideal Healthcare Partner: Our Find-a-Doctor service
        connects you with experienced and trusted medical professionals tailored
        to your unique health needs. Begin your journey to wellness with just a
        few clicks!
      </p>
      <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
        <Link href="doctors">Find Doctor</Link>
      </button>
    </motion.div>
  );
};

export default HeroText;
