import SectionHeading from "@/components/features/SectionHeading";
import Image from "next/image";
import React from "react";

const BehindScreen = () => {
  const lists = [
    {
      id: 1,
      text: "Share your product idea with us",
    },
    {
      id: 2,
      text: "Launch with a prototype first",
    },
    {
      id: 3,
      text: "Make adjustments before we build",
    },
    {
      id: 4,
      text: " Deliver the product your users actually want",
    },
  ];
  return (
    <section className="section-padding bg-gradient-radial">
      <div className="container mx-auto">
        <div className="wrapper flex flex-col lg:flex-row lg:justify-between items-center lg:gap-8">
          {/* <!-- left content-figure --> */}
          <div className="max-w-[570px]">
            <Image
              src="/image/loveWorking.png"
              alt="figure"
              width={600}
              height={600}
              className="w-[450px] lg:w-[570px] h-auto  object-cover "
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
            <ul className="flex flex-col gap-2 pt-2 md:gap-3 md:pt-7">
              {lists.map((item) => (
                <li className="flex items-start gap-3" key={item.id}>
                  <div className="w-4 h-4 bg-primary rounded-full p-2 mt-1.5"></div>
                  <p className="com-text">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindScreen;
