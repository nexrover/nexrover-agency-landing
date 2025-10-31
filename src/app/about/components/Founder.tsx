import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <section className="section-padding !pt-[50px]">
      <div className="container mx-auto">
        <div className="wrapper flex flex-row justify-between gap-16">
          {/* <!-- left-part description --> */}
          <div className="max-w-2xl">
            {/* <!-- title part --> */}
            <div>
              <h2 className="section-head">A note from our founder,</h2>
              <h2 className="section-head !-mt-3">Phil Alves</h2>
              <h4 className="section-head-desc pt-5">
                Providing Latin American developers with great income and
                opportunity.
              </h4>
            </div>
            {/* <!-- paragraph --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-12">
              <div>
                <p className="com-text">
                  In my late teens and early twenties I turned my SaaS product
                  into the widest used Direct Sales CRM software in the
                  Brazilian market and then sold it in 2010.{" "}
                </p>
                <p className="com-text pt-5">
                  {" "}
                  In 2011, I moved from Londrina, Brazil to the Salt Lake City
                  Area. For a short time, I served as a lead developer at a
                  great company, but I missed managing a comprehensive team and
                  making important product decisions. I started NexRover, so I
                  could bring the experience that I had managing a team and
                  building a successful SaaS business to other entrepreneurs
                  with business ideas that fill a market need.
                </p>
                <p className="com-text pt-5">
                  {" "}
                  Since then, we’ve grown substantially. We’ve helped launch
                  SaaS products for entrepreneurs that have gone on to make
                  successful exits, and we’ve
                </p>
              </div>
              <div>
                <p className="com-text">
                  built mission-critical products for enterprises and
                  organizations as well as our own use cases.{" "}
                </p>
                <p className="com-text pt-5">
                  Throughout it all, we’ve relied on top-notch talent in Brazil
                  and other parts of Latin America to work alongside our product
                  strategists in our US office.{" "}
                </p>
                <p className="com-text pt-5">
                  For me, it’s significant to bring opportunity back to my home
                  country. Our clients respect this as well. It’s really the
                  best of both worlds. You can come and visit us in Utah. And
                  you can rest assured that we’re finding the best talent in
                  Latin America. Every developer works on our own internal
                  projects for 1 – 3 months before they ever touch client work.
                  That’s the real-life vetting or testing process that we stand
                  by.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- right-part image --> */}
          <div>
            <div>
              <Image
                src="/image/phil-alves-2.webp"
                alt="image"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div>
              <p className="com-text pt-8">
                When you partner with NexRover, you help me bring more
                development work to Latin America, and you get Silicon
                Valley-style, customer-centric product management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
