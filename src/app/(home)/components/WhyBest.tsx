import Image from "next/image";
import React from "react";

const WhyBest = () => {
  return (
    <section className="py-[60px] lg:py-[100px]">
      <div className="container mx-auto">
        <div className="wrapper bg-bgPrimary rounded-6 p-[70px] lg:p-[87px] px-5">
          {/* <!-- lists --> */}
          <div className="items-wrapper grid grid-cols-1 lg:grid-cols-3">
            <div className="items">
              <div>
                <Image
                  src="/icons/telent-1.svg"
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="text-white text-left pt-6">
                <h3 className="font-second font-bold text-[24px] leading-[130%]">
                  Building a new product?
                </h3>
                <p className="dark-screen-pera pt-4">
                  We’ll help you release the smallest product with the biggest
                  value. We specialize in:
                </p>
              </div>
            </div>
            <div className="items">
              <div>
                <Image
                  src="/icons/telent-2.svg"
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="text-white text-left pt-[24px]">
                <h3 className="font-second font-bold text-[24px] leading-[130%]">
                  Building a new product?
                </h3>
                <p className="dark-screen-pera pt-[16px]">
                  We’ll help you release the smallest product with the biggest
                  value. We specialize in:
                </p>
              </div>
            </div>
            <div className="items">
              <div>
                <Image
                  src="/icons/telent-3.svg"
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="text-white text-left pt-[24px]">
                <h3 className="font-second font-bold text-[24px] leading-[130%]">
                  Building a new product?
                </h3>
                <p className="dark-screen-pera pt-[16px]">
                  We’ll help you release the smallest product with the biggest
                  value. We specialize in:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBest;
