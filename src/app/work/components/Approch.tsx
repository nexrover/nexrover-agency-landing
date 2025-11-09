import Image from "next/image";
import React from "react";

const Approch = () => {
  const approchList = [
    {
      id: 1,
      text: "We obsess over outcomes, not output — measurable product impact comes first.",
    },
    {
      id: 2,
      text: "User‑centered design: we build for real people and validate with testing and analytics.",
    },
    {
      id: 3,
      text: "Ship minimal, test often, iterate fast — reduce risk and accelerate learning.",
    },
    {
      id: 4,
      text: "Transparent collaboration: clear roadmaps, regular demos, and shared decisions.",
    },
    {
      id: 5,
      text: "Long‑term thinking: we design for maintainability, scalability, and growth.",
    },
    {
      id: 6,
      text: "Data‑informed decisions: metrics guide prioritization and product direction.",
    },
    {
      id: 7,
      text: "Ego‑free teams: honest feedback, continuous learning, and pragmatic solutions.",
    },
  ];
  return (
    <section className="section-padding bg-bgSecond">
      <div className="container mx-auto">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-20 items-start">
          {/* title: slightly narrower left column, added right padding */}
          <h2 className="section-head text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl leading-tight pr-4 lg:pr-6 mb-0">
            At the Heart of Our Approach
          </h2>
          {/* Approach-list */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-6 lg:gap-x-12 lg:gap-y-8">
              {approchList.map((item) => (
                <div
                  className="flex items-start gap-4 md:gap-5 py-3"
                  key={item.id}
                >
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 border border-primary rounded-md flex items-center justify-center">
                    <Image
                      src="/icons/check-circle-solid-blue.svg"
                      alt="icon"
                      width={20}
                      height={20}
                      className="w-4 h-4 md:w-5 md:h-5 object-contain"
                    />
                  </div>
                  <p className="com-text text-sm md:text-base leading-6 md:leading-7">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approch;
