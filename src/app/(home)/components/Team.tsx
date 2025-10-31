"use client";
import Modal from "@/components/features/modal/Modal";
import SectionHeading from "@/components/features/SectionHeading";
import React, { useState } from "react";

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="section-padding section-bg-gradient">
      <div className="container mx-auto">
        <div className="wrapper max-w-[880px] mx-auto">
          <div>
            <h2 className="hero-head-dark text-center">
              Work with the customer-centric team that delivers
            </h2>
            <p className="section-head-desc-dark text-center mt-4">
              Invaluable agile team management experience. Simplified monthly
            </p>
          </div>
          <div className="text-center w-full mt-16">
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="text-primary-text font-medium leading-2.5 md:leading-6 bg-secondary-bg rounded-md md:rounded-lg px-4 md:px-8 py-2 md:py-3 border-2 border-transparent hover:border-2 hover:border-dark-bg  hover:cursor-pointer active:scale-95 duration-200"
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

export default Team;
