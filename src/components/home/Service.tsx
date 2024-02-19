"use client";

import ServiceItem from "./service/ServiceItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/ui/variants";

const Service: React.FC = () => {
  const services = [
    {
      icon: "icons/services/icon-1.svg",
      title: "Find Doctors",
      description:
        "Locate the best doctor for your healthcare needs with ease.",
      delay: 0.1,
    },
    {
      icon: "icons/services/icon-2.svg",
      title: "Filter Settings",
      description: "Customize your search with our comprehensive filters.",
      delay: 0.3,
    },
    {
      icon: "icons/services/icon-3.svg",
      title: "Filter Settings",
      description: "Customize your search with our comprehensive filters.",
      delay: 0.5,
    },
    {
      icon: "icons/services/icon-4.svg",
      title: "Filter Settings",
      description: "Customize your search with our comprehensive filters.",
      delay: 0.7,
    },
  ];

  return (
    <section className="services">
      {/* background and text */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        className="relative -z-10 mx-4 flex h-[368px] max-w-[1466px] items-center rounded-[20px] bg-services bg-cover bg-no-repeat px-6 xl:mx-auto xl:items-start xl:px-0 xl:pt-[70px]"
      >
        <div className="container mx-auto">
          {/* text */}
          <div className="services__top xl:mb[60px] flex flex-col items-center xl:flex-row">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0 }}
              className="h2 mb-4 flex-1 text-center text-white xl:mb-0 xl:text-left"
            >
              Our best services for solution
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0 }}
              className="max-w-2xl flex-1 text-center text-white xl:max-w-none xl:text-left"
            >
              Patient Feedback: Share your experience with our medical care to
              help us improve and serve you better. Your thoughts matter!
            </motion.p>
          </div>
        </div>
      </motion.div>
      <div className="container mx-auto mt-8 xl:-mt-[144px]">
        <div className="grid gap-5 px-8 xl:grid-cols-4 xl:px-0">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
