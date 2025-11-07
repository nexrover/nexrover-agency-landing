"use client";
import Modal from "@/components/ui/modal/Modal";
import React, { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      className="section-padding section-bg-gradient
    "
    >
      <div className="contaner max-w-[770px] mx-auto mt-[100px]">
        <div className="wrapper px-4 lg:px-0">
          <h1 className="hero-head-dark text-center">
            Meet the Architects Behind Your Success
          </h1>
          <p className="section-head-desc-dark text-center mt-4">
            Our Journey in SaaS Development Excellence
          </p>
          <div className="text-center mt-10 md:mt-14 lg:mt-16">
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              type="button"
              className="text-primary-text font-medium leading-2.5 md:leading-6 bg-secondary-bg rounded-md md:rounded-lg px-4 md:px-8 py-3 border-2 border-transparent hover:border-2 hover:border-dark-bg  hover:cursor-pointer active:scale-95 duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </section>
  );
};

export default Hero;
