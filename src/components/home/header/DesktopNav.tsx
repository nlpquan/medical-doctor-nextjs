import { MapPin, User } from "lucide-react";
import Link from "next/link";

const DesktopNav: React.FC = () => {
  return (
    <section>
      {/* desktop nav */}
      <nav className="absolute -bottom-[86px] left-0 hidden h-16 w-full rounded-[10px] bg-white shadow-custom1 lg:flex lg:items-center lg:justify-between lg:px-[50px]">
        {/* list */}
        <ul className="flex gap-x-4">
          <li>
            <Link
              href="/"
              className="border-r pr-4 text-secondary transition-all duration-300 hover:text-accent"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="doctors"
              className="border-r pr-4 text-secondary transition-all duration-300 hover:text-accent"
            >
              Find Doctor
            </Link>
          </li>
          <li>
            <Link
              href="feedback"
              className="border-r pr-4 text-secondary transition-all duration-300 hover:text-accent"
            >
              Customer Feedback
            </Link>
          </li>
        </ul>
        {/* search form */}
        <div className="relative flex gap-x-[10px]">
          <label className="group flex items-center justify-center">
            <User className="text-2xl text-accent" />
          </label>
          <input
            type="text"
            placeholder="Doctor..."
            className="w-[100px] outline-none transition-all duration-150 placeholder:text-base placeholder:italic focus:w-[180px] focus:border-b-2 focus:border-accent" // Normal input style
          />
          <label className="group flex items-center justify-center">
            <MapPin className="text-2xl text-accent" />
          </label>
          <input
            type="text"
            placeholder="Location..."
            className="w-[100px] outline-none transition-all duration-150 placeholder:text-base placeholder:italic focus:w-[180px] focus:border-b-2 focus:border-accent" // Normal input style
          />
          <button
            type="submit"
            className="btn-accent rounded-full bg-accent px-4 py-2 text-white"
          >
            Search
          </button>
        </div>
      </nav>
    </section>
  );
};

export default DesktopNav;
