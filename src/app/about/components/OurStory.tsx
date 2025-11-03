import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="wrapper flex flex-col-reverse justify-center items-center gap-8 lg:flex-row lg:justify-between gap-x-11">
          {/* <!-- article side --> */}
          <div className="flex flex-col gap-[50px] w-full lg:max-w-1/2">
            <div>
              <h2 className="section-head">Our story</h2>
              <p className="com-text pt-4">
                After exiting our own SaaS, we built what was supposed to be a
                small dev shop serving the local Chattogram market.
              </p>
              <p className="com-text pt-2">
                But after hearing tons of product development horror stories and
                having to rescue or speed up the work of other consulting firms,
                we decided to scale NexRover from one to many squads. We began
                serving more business leaders and entrepreneurs - always keeping
                our high-performing team structure and our commitment to fast
                technology.
              </p>
            </div>
            <div>
              <h2 className="section-head">About us</h2>
              <p className="com-text pt-4">
                With office in the Chattogram, Bangladesh, we&apos;ve grown
                to over 10 people working together on cross-functional teams of
                managers, UX designers, developers, DevOps, engineers and QA
                engineers. We&apos;ve continued to win better and better talent
                and refine our expertise.
              </p>
            </div>
          </div>
          {/* <!-- figure --> */}
          <div className="w-full lg:max-w-1/2">
            <Image
              src="/icons/planet_clock_lamp.svg"
              alt="figure"
              width={800}
              height={800}
              className="w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
