import SectionHeading from "@/components/features/SectionHeading";
import Image from "next/image";
import React from "react";

const TopNotch = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* gradient card wrapper */}
        <div className="wrapper rounded-[30px] p-10 lg:p-20 grad-v6">
          {/* <!-- section haeding --> */}
          <SectionHeading
            head={"Need world-class developers? You’re in the right place."}
            desc={
              "NexRover helps entrepreneurs build products from scratch and support growing companies with a ready-to-go dev team that can jump in right away."
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
                  We'll help you launch fast with the most valuable features
                  first. We’re experts in:
                </p>
                {/* <!-- lists --> */}
                <div className="flex items-center pt-6 flex-wrap gap-4">
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-2 bg-white rounded-full">
                      <Image
                        src="/icons/mvp-development.svg"
                        alt="icon"
                        width={29}
                        height={29}
                        className="w-3 h-3 md:w-5 md:h-5 "
                      />
                    </div>
                    <span className="text-secondary-text-dark">
                      MVP Development
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-2 bg-white rounded-full">
                      <Image
                        src="/icons/saas-development.svg"
                        alt="icon"
                        width={29}
                        height={29}
                        className="w-3 h-3 md:w-5 md:h-5 "
                      />
                    </div>
                    <span className="text-secondary-text-dark">
                      SaaS Development
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-2 bg-white rounded-full">
                      <Image
                        src="/icons/web-app-development.svg"
                        alt="icon"
                        width={29}
                        height={29}
                        className="w-3 h-3 md:w-5 md:h-5 "
                      />
                    </div>
                    <span className="text-secondary-text-dark">
                      Web App Development
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-2 bg-white rounded-full">
                      <Image
                        src="/icons/mobile-app-development.svg"
                        alt="icon"
                        width={29}
                        height={29}
                        className="w-3 h-3 md:w-5 md:h-5 "
                      />
                    </div>
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
                  Short on developers?
                </h3>
                <p className="text-secondary-text-dark pt-4">
                  We’ll boost your team so you can keep moving and hitting your
                  goals. We specialize in:
                </p>
                {/* <!-- lists --> */}
                <div className="flex items-center pt-6 flex-wrap gap-4">
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-2 bg-white rounded-full">
                      <Image
                        src="/icons/nodejs-logo.svg"
                        alt="icon"
                        width={29}
                        height={29}
                        className="w-4 h-4 md:w-7 md:h-7"
                      />
                    </div>
                    <span className="text-secondary-text-dark">Node.js</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-2 bg-white rounded-full">
                      <Image
                        src="/icons/laravel-logo.svg"
                        alt="icon"
                        width={29}
                        height={29}
                        className="w-4 h-4 md:w-7 md:h-7"
                      />
                    </div>
                    <span className="text-secondary-text-dark">Laravel</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-2 bg-white rounded-full">
                      <Image
                        src="/icons/react-logo.svg"
                        alt="icon"
                        width={29}
                        height={29}
                        className="w-4 h-4 md:w-7 md:h-7"
                      />
                    </div>
                    <span className="text-secondary-text-dark">React</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-2 bg-white rounded-full">
                      <Image
                        src="/icons/flutter-logo.svg"
                        alt="icon"
                        width={29}
                        height={29}
                        className="w-4 h-4 md:w-7 md:h-7"
                      />
                    </div>
                    <span className="text-secondary-text-dark">Flutter</span>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-2 bg-white rounded-full">
                      <Image
                        src="/icons/react-native-logo.svg"
                        alt="icon"
                        width={29}
                        height={29}
                        className="w-4 h-4 md:w-7 md:h-7"
                      />
                    </div>
                    <span className="text-secondary-text-dark">
                      React Native
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
