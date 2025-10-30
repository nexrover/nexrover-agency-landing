"use client";
import Modal from "@/components/features/modal/Modal";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  // console.log(pathname);

  const navlist = [
    {
      id: 1,
      title: "What we do",
      link: "/",
    },
    {
      id: 2,
      title: "How We Work",
      link: "/work",
    },
    {
      id: 3,
      title: "About Us",
      link: "/about",
    },
    {
      id: 4,
      title: "Success Stories",
      link: "/story",
    },
    {
      id: 5,
      title: "Blog",
      link: "/blog",
    },
  ];
  return (
    <header>
      <nav className="container m-auto">
        <div className="wrapper flex justify-between items-center w-full h-[56px]">
          <div className="">
            <Link href="/">
              <Image
                src="/logo/logo.svg"
                alt="logo"
                width={110}
                height={32}
                className="w-[110px] h-8 md:w-[180px] "
              />
            </Link>
          </div>
          <div
            id="nav-list"
            className="hidden lg:flex flex-col lg:flex-row justify-center items-center gap-7 bg-white lg:bg-transparent absolute lg:static top-14 left-0 w-full lg:w-auto h-screen lg:h-14"
          >
            <ul className="flex flex-col lg:flex-row justify-between items-center gap-4">
              {navlist.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`font-primary  text-[16px] font-light text-lg  duration-200 hover:text-gray-700  ${
                    pathname === item.link ? "text-[#27BFE7] " : "text-primary"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
            <div>
              <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="font-primary font-semibold text-[16px] text-[#27BFE7] px-6 py-1 border-2 border-[#27BFE7] hover:cursor-pointer hover:bg-[#27BFE7] duration-200 hover:text-white"
              >
                Get Started
              </button>
            </div>
          </div>
          {/* mobile responsive  */}
          <div className="block lg:hidden" id="menuToggle">
            <Image
              src="/icons/menu.png"
              alt="icon"
              width={28}
              height={28}
              id="isActive"
            />
          </div>
        </div>
      </nav>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </header>
  );
};
