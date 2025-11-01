import React from "react";

const DigitalProduct = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 md:gap-10 gap-4 items-center">
        <div>
          {/* section-head */}
          <div>
            <h1 className="section-head md:text-left text-center">
              Build powerful{" "}
              <span className="text-secondary">digital products</span> with the
              right tech partner
            </h1>

            <p className="section-head-desc text-left">
              We help startups and enterprises design, develop, and scale
              world-class web, mobile, and AI solutions — faster and smarter.
            </p>
          </div>

          <ul className="com-text ">
            <li>• Product strategy, UI/UX, and full-stack development</li>
            <li>• High-performing distributed engineering team</li>
            <li>• Trusted by founders & global brands</li>
          </ul>

          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="font-primary font-medium  md:text-[16px] text-sm text-primary-text-dark bg-gradient md:px-8 px-1 md:py-3 py-1 rounded-lg duration-200 hover:cursor-pointer hover:shadow-xl hover:scale-101 active:scale-95"
            >
              Start a Project
            </a>
            <a
              href="#"
              className="border border-border text-primary-text px-6 py-3 rounded-lg font-medium  hover:text-primary-text-dark duration-200  hover:bg-linear-to-r hover:from-secondary hover:via-primary hover:to-secondary"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[90%] h-[300px] bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Illustration goes here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalProduct;
