import GradBtn from "@/components/features/btn/GradBtn";
import SectionHeading from "@/components/features/SectionHeading";
import Image from "next/image";
import React from "react";

const WorkWithUs = () => {
  const productDesignFeatures = [
    {
      id: 1,
      title: "Product Strategist",
      desc: "Your product strategist guides workshops and helps run the discovery process",
      icon: "/icons/pc.png",
    },
    {
      id: 2,
      title: "Product Strategist",
      desc: "Your product strategist guides workshops and helps run the discovery process",
      icon: "/icons/pc.png",
    },
    {
      id: 3,
      title: "Product Strategist",
      desc: "Your product strategist guides workshops and helps run the discovery process",
      icon: "/icons/pc.png",
    },
    {
      id: 4,
      title: "Product Strategist",
      desc: "Your product strategist guides workshops and helps run the discovery process",
      icon: "/icons/pc.png",
    },
    {
      id: 5,
      title: "Product Strategist",
      desc: "Your product strategist guides workshops and helps run the discovery process",
      icon: "/icons/pc.png",
    },
  ];

  const productDevelopmentFeatures = [
    {
      id: 1,
      title: "Product Strategist",
      desc: "Your product strategist guides workshops and helps run the discovery process",
      icon: "/icons/pc.png",
    },
    {
      id: 2,
      title: "Product Strategist",
      desc: "Your product strategist guides workshops and helps run the discovery process",
      icon: "/icons/pc.png",
    },
    {
      id: 3,
      title: "Product Strategist",
      desc: "Your product strategist guides workshops and helps run the discovery process",
      icon: "/icons/pc.png",
    },
    {
      id: 4,
      title: "Product Strategist",
      desc: "Your product strategist guides workshops and helps run the discovery process",
      icon: "/icons/pc.png",
    },
    {
      id: 5,
      title: "Product Strategist",
      desc: "Your product strategist guides workshops and helps run the discovery process",
      icon: "/icons/pc.png",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="pb-8">
          {/* section heading */}
          <SectionHeading
            head="There are two ways to work with us"
            desc="Either way, you get a fully-managed team of experts working together
            with optimized processes."
            colorHead="primary-text"
            colorDesc="secondary-text"
            textAlign="center"
          />
        </div>
        <div className="wrapper flex justify-between items-start gap-8 pt-8">
          {/* <!-- left card --> */}
          <div className="bg-secondary/10 rounded-[40px] px-12 pt-10 pb-12 border-t-4 border-primary max-w-1/2">
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
              <h3 className="section-head text-3xl!">Product Design</h3>
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
              {productDesignFeatures.map((item) => (
                <div
                  className="grid grid-cols-[20%_1fr] items-start gap-3"
                  key={item.id}
                >
                  <div className="w-[60px] h-[60px] bg-primary rounded-full flex items-center justify-center ">
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
              <GradBtn btnText="Learn More" />
            </div>
          </div>
          {/* <!-- right card --> */}
          <div className="bg-secondary/10 rounded-[40px] px-12 pt-10 pb-12 border-t-4 border-primary max-w-1/2">
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
                  className="grid grid-cols-[20%_1fr] items-start gap-3"
                  key={item.id}
                >
                  <div className="w-[60px] h-[60px] bg-primary rounded-full flex items-center justify-center ">
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
              <GradBtn btnText="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
