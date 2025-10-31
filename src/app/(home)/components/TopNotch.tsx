import SectionHeading from "@/components/features/SectionHeading";
import Image from "next/image";
import React from "react";

const TopNotch = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="wrapper bg-secondary rounded-[30px] p-10 lg:p-20 ">
          {/* <!-- section haeding --> */}
          <SectionHeading
            head={" Need top notch developers? You’re in the right place."}
            desc={
              "NexRover helps entrepreneurs build and launch new products and helps growing companies plug in a ready-to-go dev team and start building."
            }
            maxWidthHead="550px"
            maxWidthDecs="800px"
            colorHead="primary-text-dark"
            colorDesc={"secondary-text-dark"}
            contAlign="auto"
            textAlign={"center"}
          />
          {/* <!-- top-notch-list --> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-16 gap-y-8 lg:gap-10">
            {/* <!-- item-1 --> */}
            <div className="item">
              <div>
                <Image
                  src="/icons/product_and_design.svg"
                  alt="icon"
                  width={80}
                  height={80}
                  className="w-8 h-8 md:w-20 md:h-20 "
                />
              </div>
              <div className="text-left pt-6">
                <h3 className="text-primary-text-dark font-bold text-[28px] leading-[130%]">
                  Building a new product?
                </h3>
                <p className="text-secondary-text-dark pt-4">
                  We’ll help you release the smallest product with the biggest
                  value. We specialize in:
                </p>
                {/* <!-- lists --> */}
                <div className="flex items-center pt-6 flex-wrap gap-4">
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                      className="w-4 h-4 md:w-7 md:h-7"
                    />
                    <span className="text-secondary-text-dark">
                      MVP Development
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/saas-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                      className="w-4 h-4 md:w-7 md:h-7"
                    />
                    <span className="text-secondary-text-dark">
                      SaaS Development
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/web-app-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                      className="w-4 h-4 md:w-7 md:h-7"
                    />
                    <span className="text-secondary-text-dark">
                      Web App Development
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mobile-app-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                      className="w-4 h-4 md:w-7 md:h-7"
                    />
                    <span className="text-secondary-text-dark">
                      Mobile App Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- item-2 --> */}
            <div className="item">
              <div>
                <Image
                  src="/icons/engine_with_dash.svg"
                  alt="icon"
                  width={80}
                  height={80}
                  className="w-8 h-8 md:w-20 md:h-20 "
                />
              </div>
              <div className="text-left pt-6">
                <h3 className="text-primary-text-dark font-bold text-[28px] leading-[130%]">
                  Building a new product?
                </h3>
                <p className="text-secondary-text-dark pt-4">
                  We’ll help you release the smallest product with the biggest
                  value. We specialize in:
                </p>
                {/* <!-- lists --> */}
                <div className="flex items-center pt-6 flex-wrap gap-4">
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                      className="w-4 h-4 md:w-7 md:h-7"
                    />
                    <span className="text-secondary-text-dark">
                      MVP Development
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                      className="w-4 h-4 md:w-7 md:h-7"
                    />
                    <span className="text-secondary-text-dark">
                      MVP Development
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                      className="w-4 h-4 md:w-7 md:h-7"
                    />
                    <span className="text-secondary-text-dark">
                      MVP Development
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                      className="w-4 h-4 md:w-7 md:h-7"
                    />
                    <span className="text-secondary-text-dark">
                      MVP Development
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                      className="w-4 h-4 md:w-7 md:h-7"
                    />
                    <span className="text-secondary-text-dark">
                      MVP Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNotch;
