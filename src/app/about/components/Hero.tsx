"use client";
import Modal from "@/components/features/modal/Modal";
import React, { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="section-padding bg-bgPrimary">
      <div className="contaner max-w-[770px] mx-auto">
        <div className="wrapper px-4 lg:px-0">
          <h1 className="hero-head-light">
            Meet the Architects Behind Your Success
          </h1>
          <p className="com-text-light text-center">
            Our Journey in SaaS Development Excellence
          </p>
          <div className="text-center mt-16">
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              type="button"
              className="com-btn-second"
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
