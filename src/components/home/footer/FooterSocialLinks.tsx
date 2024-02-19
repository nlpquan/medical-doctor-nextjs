import React from "react";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

const FooterSocialLinks: React.FC = () => {
  return (
    <section>
      {/* socials */}
      <div className="flex gap-[14px] text-[30px]">
        <div className="cursor-pointer rounded-[10px] p-[10px] text-accent-tertiary shadow-custom2 transition-all hover:text-accent">
          <Facebook />
        </div>
        <div className="cursor-pointer rounded-[10px] p-[10px] text-accent-tertiary shadow-custom2 transition-all hover:text-accent">
          <Instagram />
        </div>
        <div className="cursor-pointer rounded-[10px] p-[10px] text-accent-tertiary shadow-custom2 transition-all hover:text-accent">
          <Twitter />
        </div>
        <div className="cursor-pointer rounded-[10px] p-[10px] text-accent-tertiary shadow-custom2 transition-all hover:text-accent">
          <Github />
        </div>
      </div>
    </section>
  );
};

export default FooterSocialLinks;
