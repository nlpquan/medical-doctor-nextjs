import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterContact: React.FC = () => {
  return (
    <section>
      {/* logo */}
      <Link href="">
        <Image src="img/header/logo.svg" alt="" width={200} height={50} />
      </Link>
      {/* description */}
      <p className="mb-[20px]">Lorem ipsum dolor</p>
      {/* location, email and phone */}
      <div className="mb-10 flex flex-col gap-y-3">
        <div className="flex items-center gap-x-[6px]">
          <MapPin className="text-[24px] text-accent" />
          <div>123 Airling, Miola, NY</div>
        </div>
        <div className="flex items-center gap-x-[6px]">
          <Mail className="text-[24px] text-accent" />
          <div>insolve@gmail.com</div>
        </div>
        <div className="flex items-center gap-x-[6px]">
          <Phone className="text-[24px] text-accent" />
          <div>(123) 456 789</div>
        </div>
      </div>
    </section>
  );
};

export default FooterContact;
