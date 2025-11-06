"use client";
import Modal from "@/components/ui/modal/Modal";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroLists = [
    {
      id: 1,
      text: "Nexrover helps you move from concept to market—fast.",
    },
    {
      id: 2,
      text: "Validate early, craft world-class UX, and launch with confidence.",
    },
    {
      id: 3,
      text: "No long-term contracts. Just results.",
    },
  ];
  return (
    <section className="section-padding">
      <div className="container mx-auto mt-[94px] ">
        <div className="wrapper flex flex-col-reverse lg:flex-row justify-between items-center ">
          {/* <!-- hero-left part --> */}
          <div className="lg:w-7/12 w-auto">
            {/* <!-- hero-title --> */}
            <h1 className="max-w-[650px] hero-head text-center lg:text-left">
              You bring the vision.
              <br />
              We make it real.{" "}
            </h1>
            {/* <!-- hero-list-items --> */}
            <ul className="max-w-[600px] mt-8 flex flex-col gap-4">
              {heroLists.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-start gap-3 md:gap-5 text-secondary-text font-extralight  leading-[120%]"
                >
                  <div className="min-w-5 min-h-4 border border-primary rounded-sm flex items-center justify-center mt-1 p-1">
                    <Image
                      src="/icons/check-circle-solid-blue.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      className="w-3 h-3 object-contain"
                    />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            {/* <!-- hero-button --> */}
            <div className="mt-14 flex justify-center lg:justify-start">
              <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="font-primary font-medium  md:text-[16px] text-sm text-primary-text-dark bg-gradient md:px-8 px-1 md:py-3 py-1 rounded-lg duration-200 hover:cursor-pointer hover:shadow-xl hover:scale-101 active:scale-95"
              >
                Get Started
              </button>
            </div>
          </div>
          {/* <!-- hero right part --> */}
          <div className="lg:h-5/12 w-auto object-cover object-center">
            <Image
              src="/image/how-we-work.svg"
              alt="image"
              width={600}
              height={600}
              className="max-w-[650px] h-[450px]"
            />
          </div>
        </div>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </section>
  );
};

export default Hero;
