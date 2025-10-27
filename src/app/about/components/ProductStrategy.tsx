import React from "react";

const ProductStrategy = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto bg-bgPrimary !px-[87px] py-[64px] rounded-[40px]">
        <div className="wrapper flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:gap-[60px]">
          {/* <!-- article part --> */}
          <div className="lg:max-w-[568px]">
            <h2 className="section-head-light">
              Where product strategy meets expert execution
            </h2>
            <p className="com-text-light pt-[14px] md:pt-[20px]">
              NexRover's high performing product teams build business software,
              consumer apps, and government tools. We offer strategy that is
              always grounded in our experience of taking full ownership of
              every product we touch. You get smart of product planning, fully
              managed development, and proactive optimization.
            </p>
          </div>
          {/* <!-- figure --> */}
          <div>
            <img
              src="/icons/product-strategy-execution.svg"
              alt="figure"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-bgSecond absolute top-1/2 left-0 w-full h-1/2 -z-10"></div>
    </section>
  );
};

export default ProductStrategy;
