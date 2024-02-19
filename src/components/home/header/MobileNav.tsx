"use client";

import { ChevronRight, ChevronLeft, User, MapPin } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      {/* mobile nav */}
      <nav
        className={`mnav fixed ${
          isOpen ? "left-0" : "-left-[300px]"
        } top-0 z-20 h-screen w-[300px] bg-white shadow-2xl transition-all duration-300 lg:hidden`}
      >
        {/* nav trigger btn */}
        <div
          className="mnav__close-btn relative -right-full top-8 flex h-8 w-8 cursor-pointer items-center justify-center rounded-br-lg rounded-tr-lg bg-primary transition-all"
          onClick={toggleNav}
        >
          {isOpen ? (
            <ChevronLeft className="text-2xl text-white" />
          ) : (
            <ChevronRight className="text-2xl text-white" />
          )}
        </div>

        {/* logo, list, form */}
        <div className="flex h-full flex-col gap-y-12 px-12">
          <Link href="">
            {/* logo */}
            <Image
              src="/img/header/logo.svg"
              alt="Logo"
              width={200}
              height={50}
            />
          </Link>
          {/* list */}
          <ul className="flex flex-col gap-y-5">
            <li>
              <Link
                href="/"
                className="text-secondary transition-all duration-300 hover:text-accent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="doctors"
                className="text-secondary transition-all duration-300 hover:text-accent"
              >
                Find Doctor
              </Link>
            </li>
            <li>
              <Link
                href="feedback"
                className="text-secondary transition-all duration-300 hover:text-accent"
              >
                Customer Feedback
              </Link>
            </li>
          </ul>

          {/* form */}
          <form className="relative flex gap-x-[10px]">
            <label htmlFor="mnav-search-input">
              <User className="text-2xl text-accent" />
            </label>
            <input
              type="text"
              id="mnav-search-input"
              placeholder="Doctor..."
              className="w-[160px] border-b-2 outline-none placeholder:italic focus:border-b-2 focus:border-accent"
            ></input>
          </form>
          <form className="relative flex gap-x-[10px]">
            <label htmlFor="mnav-search-input">
              <MapPin className="text-2xl text-accent" />
            </label>
            <input
              type="text"
              id="mnav-search-input"
              placeholder="Location..."
              className="w-[160px] border-b-2 outline-none placeholder:italic focus:border-b-2 focus:border-accent"
            ></input>
          </form>
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

export default MobileNav;
