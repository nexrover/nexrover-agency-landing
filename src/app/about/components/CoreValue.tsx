import React from "react";

const CoreValue = () => {
  return (
    <section className="section-padding !pb-0">
      <div className="container mx-auto">
        <div className="wrapper flex flex-col md:flex-row justify-center items-start gap-[24px] md:gap-[44px] lg:gap-[60px]">
          {/* <!-- section-title --> */}
          <div className="max-w-3/12">
            <h2 className="section-head">Core values</h2>
            <p className="com-text pt-[14px] md:pt-[18px]">
              We own every product we touch, from strategy to QA testing and
              roadmap updates. Our core values guide our approach.
            </p>
          </div>
          {/* <!-- core-value-cards --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[44px] lg:gap-[60px]">
            {/* <!-- item --> */}
            <div className="item">
              <div>
                <img
                  src="/icons/make-it-happen-2.svg"
                  alt="icon"
                  className="w-[60px] h-[60px] mx-auto md:mx-0"
                />
              </div>
              <div className="mt-[30px] lg:mt-[40px]">
                <h3 className="section-head !text-[24px]">Make it happen</h3>
                <p className="com-text mt-[10px] md:mt-[14px]">
                  Plan what works, be ready for anything.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            <div className="item">
              <div>
                <img
                  src="/icons/make-it-happen-2.svg"
                  alt="icon"
                  className="w-[60px] h-[60px] mx-auto md:mx-0"
                />
              </div>
              <div className="mt-[30px] lg:mt-[40px]">
                <h3 className="section-head !text-[24px]">Make it happen</h3>
                <p className="com-text mt-[10px] md:mt-[14px]">
                  Plan what works, be ready for anything.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            <div className="item">
              <div>
                <img
                  src="/icons/make-it-happen-2.svg"
                  alt="icon"
                  className="w-[60px] h-[60px] mx-auto md:mx-0"
                />
              </div>
              <div className="mt-[30px] lg:mt-[40px]">
                <h3 className="section-head !text-[24px]">Make it happen</h3>
                <p className="com-text mt-[10px] md:mt-[14px]">
                  Plan what works, be ready for anything.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            <div className="item">
              <div>
                <img
                  src="/icons/make-it-happen-2.svg"
                  alt="icon"
                  className="w-[60px] h-[60px] mx-auto md:mx-0"
                />
              </div>
              <div className="mt-[30px] lg:mt-[40px]">
                <h3 className="section-head !text-[24px]">Make it happen</h3>
                <p className="com-text mt-[10px] md:mt-[14px]">
                  Plan what works, be ready for anything.
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            <div className="item">
              <div>
                <img
                  src="/icons/make-it-happen-2.svg"
                  alt="icon"
                  className="w-[60px] h-[60px] mx-auto md:mx-0"
                />
              </div>
              <div className="mt-[30px] lg:mt-[40px]">
                <h3 className="section-head !text-[24px]">Make it happen</h3>
                <p className="com-text mt-[10px] md:mt-[14px]">
                  Plan what works, be ready for anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
