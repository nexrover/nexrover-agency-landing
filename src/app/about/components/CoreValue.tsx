import Image from "next/image";
import React from "react";

const CoreValue = () => {
  const coreItems = [
    {
      id: 1,
      title: "Make it happen",
      desc: "Plan what works, be ready for anything.",
      icon: "/icons/pc.png",
    },
    {
      id: 2,
      title: "Make it happen",
      desc: "Plan what works, be ready for anything.",
      icon: "/icons/pc.png",
    },
    {
      id: 3,
      title: "Make it happen",
      desc: "Plan what works, be ready for anything.",
      icon: "/icons/pc.png",
    },
    {
      id: 4,
      title: "Make it happen",
      desc: "Plan what works, be ready for anything.",
      icon: "/icons/pc.png",
    },
    {
      id: 5,
      title: "Make it happen",
      desc: "Plan what works, be ready for anything.",
      icon: "/icons/pc.png",
    },
  ];
  return (
    <section className="section-padding ">
      <div className="container mx-auto">
        <div className="wrapper flex flex-col md:flex-row justify-center items-start gap-6 md:gap-11 lg:gap-15">
          {/* <!-- section-title --> */}
          <div className="max-w-3/12">
            <h2 className="section-head">Core values</h2>
            <p className="com-text pt-2 md:pt-4">
              We own every product we touch, from strategy to QA testing and
              roadmap updates. Our core values guide our approach.
            </p>
          </div>
          {/* <!-- core-value-cards --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-11 lg:gap-[60px]">
            {/* <!-- item --> */}
            {coreItems.map((item) => (
              <div className="item" key={item.id}>
                <div className="md:w-12 md:h-12 w-10 h-10 bg-primary rounded-full  mx-auto md:mx-0 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={60}
                    height={60}
                    className="object-contain w-4 h-4 md:w-10 md:h-10"
                  />
                </div>
                <div className="mt-2 lg:mt-7">
                  <h3 className="section-head !text-2xl">{item.title}</h3>
                  <p className="com-text ">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
