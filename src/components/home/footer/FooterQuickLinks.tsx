import React from "react";
import Link from "next/link";

const FooterQuickLinks: React.FC = () => {
  return (
    <section>
      <h4 className="h4 mb-5">Quick Links</h4>
      <div className="flex gap-x-5">
        {/* list 1 */}
        <ul className="flex flex-1 flex-col gap-y-5">
          <li>
            <Link href="/" className="transitional-all hover:text-accent">
              Home
            </Link>
          </li>
          <li>
            <Link href="doctors" className="transitional-all hover:text-accent">
              Find Doctors
            </Link>
          </li>
          <li>
            <Link href="feedback" className="transitional-all hover:text-accent">
            Customer Feedback
            </Link>
          </li>
        </ul>
        {/* list 2 */}
        <ul className="flex flex-1 flex-col gap-y-5">
          <li>
            <Link href="contact" className="transitional-all hover:text-accent">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="privacy-policy" className="transitional-all hover:text-accent">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="terms-conditions" className="transitional-all hover:text-accent">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FooterQuickLinks;
