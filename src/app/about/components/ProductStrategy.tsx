import Image from "next/image";
import React from "react";

const ProductStrategy = () => {
  return (
    <section className="section-padding relative ">
      <div className="container mx-auto bg-gradient-radial !px-[87px] !py-16 rounded-[40px]">
        <div className="wrapper flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:gap-[60px]">
          {/* <!-- article part --> */}
          <div className="lg:max-w-[568px]">
            <h2 className="section-head">
              Where product strategy meets expert execution
            </h2>
            <p className="com-text pt-3.5 md:pt-4">
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
