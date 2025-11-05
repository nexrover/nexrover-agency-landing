"use client";
import Modal from "@/components/ui/modal/Modal";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="section-padding">
      <div className="container mx-auto mt-[94px] ">
        <div className="wrapper flex flex-col-reverse lg:flex-row justify-between items-center ">
          {/* <!-- hero-left part --> */}
          <div className="lg:w-7/12 w-auto">
            {/* <!-- hero-title --> */}
            <h1 className="max-w-[600px] hero-head text-center lg:text-left">
              Building software
              <br />
              for businesses & founders shaping the future
            </h1>
            {/* <!-- hero-list-items --> */}
            <ul className="max-w-[600px] mt-8 flex flex-col gap-4">
              <li className="hero-list-item">
                <Image
                  src="/icons/check-circle-solid-blue.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="lg:w-4 lg:h-4 w-3 h-3"
                />
                <span>End-to-end product strategy, design & development</span>
              </li>
              <li className="hero-list-item">
                <Image
                  src="/icons/check-circle-solid-blue.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="lg:w-4 lg:h-4 w-3 h-3"
                />
                <span>High-performing distributed engineering team</span>
              </li>
              <li className="hero-list-item">
                <Image
                  src="/icons/check-circle-solid-blue.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="lg:w-4 lg:h-4 w-3 h-3"
                />
                <span>
                  Trusted by innovative startups and global enterprises
                </span>
              </li>
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
              src="/image/hero-team.svg"
              alt="image"
              width={600}
              height={600}
              className="max-w-[650px] h-auto"
            />
          </div>
        </div>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </section>
  );
};

export default Hero;
