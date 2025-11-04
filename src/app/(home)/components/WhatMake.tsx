import SectionHeading from "@/components/features/SectionHeading";
import React from "react";

const WhatMake = () => {
  return (
    <section className="py-[60px] lg:py-[100px]">
      <div className="container mx-auto">
        <div className="wrapper lg:max-h-[600px] grid grid-cols-1 lg:grid-cols-2 gap-y-[37px] lg:gap-y-[74px] lg:gap-x-[28px] lg:justify-between lg:items-start">
          {/* section heading */}
          <SectionHeading
            head="What makes NexRover different?"
            desc="Fully-managed high-performing dev teams. Simple monthly subscription. Top-tier talent. Real integrity."
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
              We follow a proven product-building framework inspired by the
              world’s best tech teams. Our process removes the stress of
              managing developers and keeps your project moving fast — which
              means <b>better results, lower costs, and faster launch time</b> than
              traditional agencies or freelancers. You get a smooth, structured
              experience — while we handle everything.
            </p>
          </div>
          {/* <!-- item --> */}
          <div className="lg:order-1">
            <div className="flex items-center gap-3">
              <p className="w-8 h-8 bg-primary rounded-md font-light text-primary-text flex items-center justify-center">
                2
              </p>
              <h3 className="font-bold text-primary-text text-2xl">
                We focus on your goals
              </h3>
            </div>
            <p className="com-text pt-4">
              Whether it’s a SaaS product, mobile app, web platform, or internal
              tool — our top priority is helping you achieve your business goals
              and delight your users. We know great products need more than just
              developers — they need strategy, clarity, and strong project
              leadership. We align your vision with our execution so your
              product succeeds and keeps growing. When you win, we win — and
              that’s why our clients stay with us and recommend us.
            </p>
          </div>
          {/* <!-- item --> */}
          <div className="lg:order-3">
            <div className="flex items-center gap-3">
              <p className="w-8 h-8 bg-primary rounded-md font-light text-primary-text flex items-center justify-center">
                3
              </p>
              <h3 className="font-bold text-primary-text text-2xl">
                Proven experience
              </h3>
            </div>
            <p className="com-text pt-4">
              We’ve been building products since 2014, and most of our work
              today comes from returning clients and referrals. Our philosophy
              is simple: <b>build only what matters — build it well — and deliver
              with professionalism</b>. That focus on real value, efficiency, and
              quality is the reason our clients trust us long-term.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMake;
