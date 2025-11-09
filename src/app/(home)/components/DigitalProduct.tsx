import React from "react";
import Image from "next/image";

const DigitalProduct = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 md:gap-10 gap-4 items-center">
        <div className="order-2">
          {/* section-head */}
          <div className="mt-4 md:mt-5 lg:mt-0">
            <h1 className="section-head md:text-left text-center">
              Plug in <span className="text-secondary">NexRover</span> — your on‑demand partner
            </h1>

            <p className="section-head-desc text-left mt-4 md:mt-5">
              <strong>Fast product development and reliable launches. Scale faster with a dedicated NexRover engineering team.</strong>
            </p>
          </div>

          <ul className="com-text mt-4">
            <li>• Product strategy & UX that reduce risk</li>
            <li>• End‑to‑end engineering teams to build and scale</li>
            <li>• Rapid validation and reliable product launches</li>
          </ul>

          <div className="mt-8 flex flex-col lg:flex-row gap-4">
            <a
              href="#"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-center"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-block border border-border text-primary-text px-6 py-3 rounded-lg font-medium text-center"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>

        <div className="flex justify-center order-1">
          {/* replaced placeholder with referenced hero image */}
          <div className="w-[95%] h-[350px] rounded-xl overflow-hidden flex items-center justify-center">
            <Image
              src="/image/plugNplay.png"
              alt="Illustration showing plug and play team"
              width={1200}
              height={700}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalProduct;
