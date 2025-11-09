"use client";
import SectionHeading from "@/components/features/SectionHeading";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const leftFAQ = [
    {
      id: 1,
      question: "How do you start a new project?",
      answer:
        "We begin with a short discovery: clarify goals, users, metrics, and constraints. That produces a clear plan—design sprint or development roadmap—so you know milestones, deliverables, and risks up front.",
    },
    {
      id: 2,
      question: "Which engagement models do you offer?",
      answer:
        "Flexible options: rapid Product Design Sprints for fast validation, dedicated engineering teams for long‑term product delivery, or fixed‑scope engagements for defined outcomes. We recommend the model that minimizes risk and maximizes impact.",
    },
    {
      id: 3,
      question: "Who will I work with day‑to‑day?",
      answer:
        "A cross‑functional team tailored to your needs: product strategist, UX/UI designers, engineers, QA, and a single point of contact who coordinates delivery and communication.",
    },
  ];
  const rightFAQ = [
    {
      id: 4,
      question: "How do you handle communication and timezones?",
      answer:
        "We blend synchronous overlap (planning, demos) with async updates via Slack, Notion, and GitHub. Regular demos, clear tickets, and status notes keep progress visible across timezones.",
    },
    {
      id: 5,
      question: "Who owns the code and intellectual property?",
      answer:
        "You own the IP and repositories for your product. We deliver code, documentation, and can sign NDAs or custom contracts to meet procurement and legal needs.",
    },
    {
      id: 6,
      question: "How do you ensure quality and post‑launch support?",
      answer:
        "Quality is built in: automated tests, code reviews, and CI/CD pipelines. After launch we offer monitoring, maintenance, and optional support plans so your product stays reliable as you scale.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          head="Frequently asked questions"
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
