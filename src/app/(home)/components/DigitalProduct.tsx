import React from "react";

const DigitalProduct = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 md:gap-10 gap-4 items-center">
        <div className="order-2">
          {/* section-head */}
          <div className="mt-4 md:mt-5 lg:mt-0">
            <h1 className="section-head md:text-left text-center">
              Build powerful{" "}
              <span className="text-secondary">digital products</span> with the
              right tech partner
            </h1>

            <p className="section-head-desc text-left mt-4 md:mt-5">
              We help startups and enterprises design, develop, and scale
              world-class web, mobile, and AI solutions — faster and smarter.
            </p>
          </div>

          <ul className="com-text ">
            <li>• Product strategy, UI/UX, and full-stack development</li>
            <li>• High-performing distributed engineering team</li>
            <li>• Trusted by founders & global brands</li>
          </ul>

          <div className="mt-8 flex flex-col lg:flex-row gap-4">
            <a
              href="#"
              className="border border-border text-primary-text-dark px-6 py-3 rounded-lg font-medium  hover:text-primary-text-dark duration-200 bg-gradient text-center"
            >
              Start a Project
            </a>
            <a
              href="#"
              className="border border-border text-primary-text px-6 py-3 rounded-lg font-medium  hover:text-primary-text-dark duration-200  hover:bg-linear-to-b hover:from-secondary hover:to-primary text-center"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>

        <div className="flex justify-center order-1">
          <div className="w-[95%] h-[350px] bg-gradient rounded-xl flex items-center justify-center">
            <span className="text-primary-text-dark">
              Illustration goes here
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalProduct;
