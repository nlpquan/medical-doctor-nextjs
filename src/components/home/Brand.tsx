'use client'

import React from "react";
import BrandItem from "./brand/BrandItem";

const Brand: React.FC = () => {
  return (
    <section>
      <section className="brands section">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-y-12 xl:flex-row xl:gap-y-0">
            <BrandItem src="/img/brands/brand-1.svg" alt="brand" width={168} height={10} delay={0.1} />
            <BrandItem src="/img/brands/brand-2.svg" alt="brand" width={168} height={10} delay={0.2} />
            <BrandItem src="/img/brands/brand-3.svg" alt="brand" width={168} height={10} delay={0.3} />
            <BrandItem src="/img/brands/brand-4.svg" alt="brand" width={168} height={10} delay={0.4} />
            <BrandItem src="/img/brands/brand-5.svg" alt="brand" width={168} height={10} delay={0.5} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Brand;
