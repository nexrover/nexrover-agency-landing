import GradBtn from "@/components/features/btn/GradBtn";
import SectionHeading from "@/components/features/SectionHeading";
import Image from "next/image";
import React from "react";

const WorkWithUs = () => {
  const productDesignFeatures = [
    {
      id: 1,
      title: "Product Strategist",
      desc: "Guides discovery workshops and refines your product goals.",
      icon: "/icons/pc.png",
    },
    {
      id: 2,
      title: "Technical Product Manager",
      desc: "Keeps strategy and tech aligned while driving rapid progress.",
      icon: "/icons/pc.png",
    },
    {
      id: 3,
      title: "UX/UI Designers",
      desc: "Create beautiful, testable prototypes that feel like the real thing.",
      icon: "/icons/pc.png",
    },
    {
      id: 4,
      title: "Tech Lead",
      desc: "Ensures every idea is technically sound and ready to scale.",
      icon: "/icons/pc.png",
    },
  ];

  const productDevelopmentFeatures = [
    {
      id: 1,
      title: "Product Strategist",
      desc: "Asks the right questions and keeps the vision sharp.",
      icon: "/icons/pc.png",
    },
    {
      id: 2,
      title: "Technical Product Manager",
      desc: "Former developers who manage builds with precision.",
      icon: "/icons/pc.png",
    },
    {
      id: 3,
      title: "UX/UI Designers",
      desc: "Obsessed with clarity, usability, and experience.",
      icon: "/icons/pc.png",
    },
    {
      id: 4,
      title: "Developers",
      desc: "Skilled engineers who bring creativity and care to every feature.",
      icon: "/icons/pc.png",
    },
    {
      id: 5,
      title: "Tech Leads & DevOps",
      desc: "Speed, stability, and smooth releases.",
      icon: "/icons/pc.png",
    },
    {
      id: 6,
      title: "QA Analysts",
      desc: "Rigorous testers ensuring a seamless user experience.",
      icon: "/icons/pc.png",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="pb-8">
          {/* section heading */}
          <SectionHeading
            head="Two ways to work with Nexrover"
            desc="Either way, you get a fully-managed squad of experts — strategists, designers, and developers working together with a proven process."
            colorHead="primary-text"
            colorDesc="secondary-text"
            textAlign="center"
          />
        </div>
        <div className="wrapper flex justify-between items-start gap-8 pt-8">
          {/* <!-- left card --> */}
          <div className="bg-red-bg/10 rounded-[40px] px-12 pt-10 pb-12 border-t-4 border-red-bg max-w-1/2">
            {/* <!-- top icon --> */}
            <div className="flex justify-between items-end mb-6">
              <Image
                src="/icons/block.svg"
                alt="icon"
                width={80}
                height={80}
                className="w-[60px] h-[60px] object-cover"
              />
              <Image
                src="/icons/waves-blue.svg"
                alt="icon"
                width={80}
                height={80}
                className="w-20 h-auto object-cover"
              />
            </div>
            {/* <!-- cart title --> */}
            <div>
              <h3 className="section-head text-3xl!">Product Design Sprint</h3>
              <p className="section-head-desc pt-6 pb-4">
                Validate your vision before you build.
              </p>
              <p className="com-text">
                Turn your idea into a high-fidelity prototype and test it with
                real users — all in just 30 days. Our Design Sprint helps you
                shape your concept, de-risk development, and gain clarity before
                writing a single line of code. Your squad includes:
              </p>
            </div>
            {/* <!-- cart list --> */}
            <div className="lists flex flex-col gap-8 pt-8">
              {productDesignFeatures.map((item) => (
                <div
                  className="grid grid-cols-[15%_1fr] items-start gap-3"
                  key={item.id}
                >
                  <div className="w-[60px] h-[60px] bg-red-bg/80 rounded-full flex items-center justify-center ">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={60}
                      height={60}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="section-head text-xl!">{item.title}</h4>
                    <p className="com-text pt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <!-- btn --> */}
            <div className="mt-12">
              <button
                type="button"
                className="text-red-bg font-medium leading-2.5 md:leading-6 bg-secondary-bg rounded-md md:rounded-lg px-4 md:px-8 py-2 md:py-3 border-2 border-red-bg hover:border-2 hover:border-red-bg/50  hover:cursor-pointer active:scale-95 duration-200 "
              >
                Learn More
              </button>
            </div>
          </div>
          {/* <!-- right card --> */}
          <div className="bg-yellow-bg/30 rounded-[40px] px-12 pt-10 pb-12 border-t-4 border-yellow-bg max-w-1/2">
            {/* <!-- top icon --> */}
            <div className="flex justify-between items-end mb-6">
              <Image
                src="/icons/productDev.svg"
                alt="icon"
                width={80}
                height={80}
                className="w-[60px] h-[60px] object-cover"
              />
              <Image
                src="/icons/circles-yellow.svg"
                alt="icon"
                width={80}
                height={80}
                className="w-20 h-auto object-cover"
              />
            </div>
            {/* <!-- cart title --> */}
            <div>
              <h3 className="section-head text-3xl!">Product Development</h3>
              <p className="section-head-desc pt-6 pb-4">
                Validate a prototype before you go all i
              </p>
              <p className="com-text">
                Turn your vision into a high-fidelity prototype and learn how to
                validate it with target users so you can master user testing
                while deepening those connections. For most products, this
                process takes just 30 days. Your squad includes:
              </p>
            </div>
            {/* <!-- cart list --> */}
            <div className="lists flex flex-col gap-8 pt-8">
              {productDevelopmentFeatures.map((item) => (
                <div
                  className="grid grid-cols-[15%_1fr] items-start gap-3"
                  key={item.id}
                >
                  <div className="w-[60px] h-[60px] bg-yellow-bg/80 rounded-full flex items-center justify-center ">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={60}
                      height={60}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="section-head text-xl!">{item.title}</h4>
                    <p className="com-text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <!-- btn --> */}
            <div className="mt-12">
              <button
                type="button"
                className="text-yellow-bg font-medium leading-2.5 md:leading-6 bg-secondary-bg rounded-md md:rounded-lg px-4 md:px-8 py-2 md:py-3 border-2 border-yellow-bg hover:border-2 hover:border-yellow-bg/50  hover:cursor-pointer active:scale-95 duration-200 "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
