import Image from "next/image";
import React from "react";

const Talent = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="wrapper">
          {/* <!-- section-title --> */}
          <div className="section-title flex flex-col justify-center items-center">
            <h2 className="section-head !text-center max-w-[750px]">
              Talent is the difference between good and great products
            </h2>
            <p className="com-text pt-[20px] max-w-[750px] !text-center">
              Get elite software developers on demand — plus every resource your
              squad needs to make your product successful.
            </p>
          </div>
          {/* <!-- telent-cards --> */}
          <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-items-center justify-content-center gap-x-[14px] gap-y-[64px] mt-[64px]">
            {/* <!-- item --> */}
            <div className="max-w-[370px] flex flex-col items-start">
              <div>
                <Image
                  src="/icons/telent-1.svg"
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="font-second font-semibold text-[24px] text-[#1a1a1a] mt-[32px] mb-4">
                2-6 Full Stack Developers
              </h4>
              <p className="com-text">
                with 4+ years experience, working exclusively on your product.
              </p>
            </div>
            {/* <!-- item --> */}
            <div className="max-w-[370px] flex flex-col items-start">
              <div>
                <Image
                  src="/icons/telent-2.svg"
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="font-second font-semibold text-[24px] text-[#1a1a1a] mt-[32px] mb-4">
                A Product Manager
              </h4>
              <p className="com-text">
                who keeps development work on track with your vision and
                timeline.
              </p>
            </div>
            {/* <!-- item --> */}
            <div className="max-w-[370px] flex flex-col items-start">
              <div>
                <Image
                  src="/icons/telent-3.svg"
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="font-second font-semibold text-[24px] text-[#1a1a1a] mt-[32px] mb-4">
                A UX/UI Designer
              </h4>
              <p className="com-text">
                who keeps your product looking great and user-friendly.
              </p>
            </div>
            {/* <!-- item --> */}
            <div className="max-w-[370px] flex flex-col items-start">
              <div>
                <Image
                  src="/icons/telent-4.svg"
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="font-second font-semibold text-[24px] text-[#1a1a1a] mt-[32px] mb-4">
                A VP team
              </h4>
              <p className="com-text">
                so your PM and dedicated devs get the support they need.
              </p>
            </div>
            {/* <!-- item --> */}
            <div className="max-w-[370px] flex flex-col items-start">
              <div>
                <Image
                  src="/icons/telent-5.svg"
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="font-second font-semibold text-[24px] text-[#1a1a1a] mt-[32px] mb-4">
                A QA Team
              </h4>
              <p className="com-text">
                who does manual and automated testing for continuous quality.
              </p>
            </div>
            {/* <!-- item --> */}
            <div className="max-w-[370px] flex flex-col items-start">
              <div>
                <Image
                  src="/icons/telent-6.svg"
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>
              <h4 className="font-second font-semibold text-[24px] text-[#1a1a1a] mt-[32px] mb-4">
                A DevOps Team
              </h4>
              <p className="com-text">
                who manages infrastructure scalability and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talent;
