import SectionHeading from "@/components/features/SectionHeading";
import React from "react";

const WhatMake = () => {
  return (
    <section className="py-[60px] lg:py-[100px]">
      <div className="container mx-auto">
        <div className="wrapper lg:max-h-[600px] grid grid-cols-1 lg:grid-cols-2 gap-y-[37px] lg:gap-y-[74px] lg:gap-x-[28px] lg:justify-between lg:items-start">
          {/* section heading */}
          <SectionHeading
            head="What makes NexRover so different?"
            desc=" Fully-managed high-performing dev teams. Monthly subscription. Top
              talent. Integrity."
            colorHead="primary-text"
            colorDesc="secondary-text"
          />
          {/* <!-- item --> */}
          <div className="lg:order-2">
            <div className="flex items-center gap-3">
              <p className="w-8 h-8 bg-primary rounded-md font-light text-primary-text flex items-center justify-center">
                1
              </p>
              <h3 className="font-bold text-primary-text text-2xl">
                Our winning process
              </h3>
            </div>
            <p className="com-text pt-4">
              We have a winning process based on how the world’s smartest
              product teams are run. This takes the hassle of management off
              your shoulders while simultaneously making us faster (and
              therefore more affordable) than any other software development
              shop you’ve encountered.
            </p>
          </div>
          {/* <!-- item --> */}
          <div className="lg:order-1">
            <div className="flex items-center gap-3">
              <p className="w-8 h-8 bg-primary rounded-md font-light text-primary-text flex items-center justify-center">
                2
              </p>
              <h3 className="font-bold text-primary-text text-2xl">
                We meet client goals
              </h3>
            </div>
            <p className="com-text pt-4">
              We build SaaS products, mobile apps, web apps, internal-use
              platforms and more. With any product, our number one goal is to
              help our clients meet their own business goals and to satisfy
              their customer’s demands. We know that when we do our best work,
              we’re rewarded with repeat business and referrals. We understand
              that without management and aligned business strategy, developers
              can’t meet goals or demands. We know how to manage high performing
              dev teams and we do it
            </p>
          </div>
          {/* <!-- item --> */}
          <div className="lg:order-3">
            <div className="flex items-center gap-3">
              <p className="w-8 h-8 bg-primary rounded-md font-light text-primary-text flex items-center justify-center">
                3
              </p>
              <h3 className="font-bold text-primary-text text-2xl">
                Our experience
              </h3>
            </div>
            <p className="com-text pt-4">
              We’ve been in business since 2014. The majority of our business
              today comes from repeat clients building new products, and from
              referrals. Our commitment to building only what needs to be built
              — and doing so with complete skill and professionalism — keeps our
              clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMake;
