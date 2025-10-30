"use client";
import Modal from "@/components/features/modal/Modal";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-[#eaf0f7] py-[40px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto">
        <div className="wrapper flex flex-col-reverse lg:flex-row justify-between items-center">
          {/* <!-- hero-left part --> */}
          <div>
            {/* <!-- hero-title --> */}
            <h1 className="max-w-[600px] font-bold font-second text-[24px] md:text-[32px] lg:text-[50px] leading-[130%] mt-[24px] tracking-[2px] text-center lg:text-left">
              Software development for businesses & founders launching
              innovative products
            </h1>
            {/* <!-- hero-list-items --> */}
            <ul className="max-w-[632px] mt-8 flex flex-col gap-[22px]">
              <li className="hero-list-item">
                <Image
                  src="/icons/check-circle-solid-blue.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span>Skilled in product strategy, design, & development</span>
              </li>
              <li className="hero-list-item">
                <img src="/icons/check-circle-solid-blue.svg" alt="icon" />
                <span>
                  The smartest possible way to acquire a high-performing
                  distributed team
                </span>
              </li>
              <li className="hero-list-item">
                <img src="/icons/check-circle-solid-blue.svg" alt="icon" />
                <span>
                  Trusted by Founders and Fortune 500 businesses for
                  cost-effective solutions
                </span>
              </li>
            </ul>
            {/* <!-- hero-button --> */}
            <div className="mt-[36px] flex justify-center lg:justify-start">
              <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="font-primary font-medium text-[16px] text-white bg-[#17D5FF] p-[12px] rounded-xs duration-300 hover:cursor-pointer hover:scale-105 active:scale-95"
              >
                Get Started
              </button>
            </div>
          </div>
          {/* <!-- hero right part --> */}
          <div className="max-w-[450px] object-cover object-center">
            <Image
              src="/image/hero-team.svg"
              alt="image"
              width={380}
              height={260}
            />
          </div>
        </div>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </section>
  );
};

export default Hero;
