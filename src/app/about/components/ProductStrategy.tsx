import Image from "next/image";
import React from "react";

const ProductStrategy = () => {
  return (
    <section className="section-padding relative ">
      <div className="container mx-auto grad-v1 rounded-[40px] w-[90%] lg:w-full">
        <div className="wrapper flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-6 lg:gap-[60px] px-4 py-8 md:px-6 lg:px-20 lg:py-20">
          {/* <!-- article part --> */}
          <div className="lg:max-w-[568px]">
            <h2 className="section-head-dark text-center lg:text-left">
              Where product strategy meets expert execution
            </h2>
            <p className="com-text-dark pt-3.5 md:pt-4 text-justify">
              NexRover&apos;s high performing product teams build business
              software, consumer apps, and government tools. We offer strategy
              that is always grounded in our experience of taking full ownership
              of every product we touch. You get smart of product planning,
              fully managed development, and proactive optimization.
            </p>
          </div>
          {/* <!-- figure --> */}
          <div>
            <Image
              src="/icons/product-strategy-execution.svg"
              alt="figure"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStrategy;
