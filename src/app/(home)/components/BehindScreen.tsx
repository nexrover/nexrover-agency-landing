import SectionHeading from "@/components/features/SectionHeading";
import Image from "next/image";
import React from "react";

const BehindScreen = () => {
  return (
    <section className="section-padding bg-gradient-radial">
      <div className="container mx-auto">
        <div className="wrapper flex flex-col lg:flex-row lg:justify-between items-center lg:gap-8">
          {/* <!-- left content-figure --> */}
          <div className="max-w-[470px]">
            <Image
              src="/image/behind.svg"
              alt="figure"
              width={500}
              height={500}
              className="w-[350px] lg:w-[470px] h-auto  object-cover "
            />
          </div>
          {/* <!-- right content-article --> */}
          <div className="max-w-[590px] pt-8 lg:pt-0">
            {/* section heading */}
            <SectionHeading
              head="You’ll love working with NexRover"
              desc="…and the talented team making it happen behind the scenes."
              colorHead="primary-text"
              colorDesc="seconday-text"
            />
            <ul className="flex flex-col gap-4 pt-4 md:gap-8 md:pt-8">
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-full p-2"></div>
                <p className="com-text">Share your product idea with us</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-full p-2"></div>
                <p className="com-text">Launch with a prototype first</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-full p-2"></div>
                <p className="com-text">Make adjustments before we build</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-full p-2"></div>
                <p className="com-text">
                  Deliver the product your users actually want
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindScreen;
