"use client";

import Modal from "@/components/ui/modal/Modal";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navlist = [
    { id: 1, title: "What we do", link: "/" },
    { id: 2, title: "How We Work", link: "/work" },
    { id: 3, title: "About Us", link: "/about" },
    // { id: 4, title: "Success Stories", link: "/story" },
    // { id: 5, title: "Blog", link: "/blog" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-full bg-nav-bg border border-nav-border shadow-sm z-50 container ${
        isMenuOpen ? "rounded-t-lg" : "rounded-lg lg:rounded-2xl"
      }`}
    >
      <nav className="flex justify-between items-center md:px-6 lg:px-8 h-14 md:h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.svg"
            alt="logo"
            width={110}
            height={32}
            className="w-[90px] md:w-[110px] lg:w-[150px] h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navlist.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`text-sm duration-200 hover:text-primary ${
                pathname === item.link
                  ? "text-primary-text font-medium"
                  : "text-nav-text"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden lg:flex font-medium text-nav-btn px-6 py-2 bg-transparent rounded-md border border-nav-btn hover:shadow-lg hover:text-primary-text/90 duration-200"
        >
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <Image
            src={isMenuOpen ? "/icons/close.png" : "/icons/menu.png"}
            alt="menu"
            width={28}
            height={28}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-nav-bg border-2 border-nav-border rounded-b-2xl overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "h-screen opacity-100" : "h-0 opacity-0"
        }`}
      >
        <ul className="h-scree flex flex-col items-center gap-10 py-14 ">
          {navlist.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium duration-200 hover:text-primary ${
                pathname === item.link
                  ? "text-primary-text font-semibold"
                  : "text-nav-text"
              }`}
            >
              {item.title}
            </Link>
          ))}

          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsMenuOpen(false);
            }}
            className="font-medium text-nav-btn px-5 py-2 border border-nav-btn rounded-md hover:shadow-lg hover:text-primary-text/90 duration-200"
          >
            Get Started
          </button>
        </ul>
      </div>

      {/* Modal */}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </header>
  );
};
