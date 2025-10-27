import Image from "next/image";
import React from "react";

const TopNotch = () => {
  return (
    <section className="py-[60px] lg:py-[100px]">
      <div className="container mx-auto">
        <div className="wrapper bg-[#071546] rounded-[24px] p-[70px] lg:p-[87px] px-5">
          {/* <!-- section headling --> */}
          <div className="max-w-[750px] text-center text-white mx-auto">
            <h2 className="text-[32px] lg:text-[45px] font-second font-bold leading-[120%] tracking-wide">
              Need top notch developers? You’re in the right place.
            </h2>
            <p className="font-primary text-[16px] font-light pt-[24px]">
              NexRover helps entrepreneurs build and launch new products and
              helps growing companies plug in a ready-to-go dev team and start
              building.
            </p>
          </div>
          {/* <!-- top-notch-list --> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-[64px] gap-y-[32px] lg:gap-3">
            {/* <!-- item-1 --> */}
            <div className="item">
              <div>
                <Image
                  src="/icons/product_and_design.png"
                  alt="icon"
                  width={106}
                  height={98}
                />
              </div>
              <div className="text-white text-left pt-[24px]">
                <h3 className="font-second font-bold text-[28px] leading-[130%]">
                  Building a new product?
                </h3>
                <p className="dark-screen-pera pt-[16px]">
                  We’ll help you release the smallest product with the biggest
                  value. We specialize in:
                </p>
                {/* <!-- lists --> */}
                <div className="flex items-center pt-[24px] flex-wrap gap-3">
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                    />
                    <span className="dark-screen-pera">MVP Development</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                    />
                    <span className="dark-screen-pera">MVP Development</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                    />
                    <span className="dark-screen-pera">MVP Development</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                    />
                    <span className="dark-screen-pera">MVP Development</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                    />
                    <span className="dark-screen-pera">MVP Development</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- item-2 --> */}
            <div className="item">
              <div>
                <Image
                  src="/icons/engine_with_dash.png"
                  alt="icon"
                  width={106}
                  height={98}
                />
              </div>
              <div className="text-white text-left pt-[24px]">
                <h3 className="font-second font-bold text-[28px] leading-[130%]">
                  Behind on hiring?
                </h3>
                <p className="dark-screen-pera pt-[16px]">
                  We’ll help you release the smallest product with the biggest
                  value. We specialize in:
                </p>
                {/* <!-- lists --> */}
                <div className="flex items-center pt-[24px] flex-wrap gap-3">
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                    />
                    <span className="dark-screen-pera">MVP Development</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                    />
                    <span className="dark-screen-pera">MVP Development</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                    />
                    <span className="dark-screen-pera">MVP Development</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                    />
                    <span className="dark-screen-pera">MVP Development</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src="/icons/mvp-development.svg"
                      alt="icon"
                      width={29}
                      height={29}
                    />
                    <span className="dark-screen-pera">MVP Development</span>
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
