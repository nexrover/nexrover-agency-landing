"use client";
import SectionHeading from "@/components/features/SectionHeading";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const leftFAQ = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.",
    },
    {
      id: 2,
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity, but we always ensure transparent communication and timely delivery.",
    },
    {
      id: 3,
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes! We offer maintenance, updates, and technical support after your product goes live to ensure everything runs smoothly.",
    },
  ];
  const rightFAQ = [
    {
      id: 4,
      question: "What services offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.",
    },
    {
      id: 5,
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity, but we always ensure transparent communication and timely delivery.",
    },
    {
      id: 6,
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes! We offer maintenance, updates, and technical support after your product goes live to ensure everything runs smoothly.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          head="Frequently Asked Questions"
          colorHead="primary-text"
          textAlign="center"
        />
        {/* FAQ wrapper */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8">
          {/* left FAQ */}
          <div className="flex flex-col gap-3 mt-8">
            {leftFAQ.map((item) => (
              <div
                key={item.id}
                className="bg-secondary-bg rounded-md border border-border overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setActiveId(activeId === item.id ? null : item.id)
                  }
                  className="flex justify-between items-center w-full text-left p-3 lg:p-5 cursor-pointer select-none"
                >
                  <span className="com-text font-medium">{item.question}</span>

                  {/* Icons */}
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <Image
                      src="/icons/down-arrow.svg"
                      alt="arrow-icon"
                      width={6}
                      height={6}
                      className={`w-5 h-5 transition ${
                        activeId === item.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeId === item.id ? "max-h-[150px]" : "max-h-0"
                  }`}
                >
                  <div className="p-5 border-t border-border text-secondary-text">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* right FAQ */}
          <div className="flex flex-col gap-3 mt-3 lg:mt-8">
            {rightFAQ.map((item) => (
              <div
                key={item.id}
                className="bg-secondary-bg rounded-md border border-border overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setActiveId(activeId === item.id ? null : item.id)
                  }
                  className="flex justify-between items-center w-full text-left p-3 lg:p-5 cursor-pointer select-none"
                >
                  <span className="com-text font-medium">{item.question}</span>

                  {/* Icons */}
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <Image
                      src="/icons/down-arrow.svg"
                      alt="arrow-icon"
                      width={6}
                      height={6}
                      className={`w-5 h-5 transition ${
                        activeId === item.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeId === item.id ? "max-h-[150px]" : "max-h-0"
                  }`}
                >
                  <div className="p-5 border-t border-border text-secondary-text">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
