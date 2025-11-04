import SectionHeading from "@/components/features/SectionHeading";
import Image from "next/image";
import React from "react";

const Talent = () => {
  const talentItem = [
    {
      id: 1,
      icon: "/icons/full-stack-developer.svg",
      altText: "full stack developer icon",
      title: "2-6 Full Stack Developers",
      desc: "Experienced engineers (4+ years) dedicated only to your product.",
    },
    {
      id: 2,
      icon: "/icons/product-manager.svg",
      altText: "product manager icon",
      title: "Product Manager",
      desc: "Makes sure the team ships on time and stays aligned with your vision.",
    },
    {
      id: 3,
      icon: "/icons/ux-ui-designer.svg",
      altText: "ux ui designer icon",
      title: "UX/UI Designer",
      desc: "Ensures your product looks great and is easy to use.",
    },
    {
      id: 4,
      icon: "/icons/vp-level-oversight.svg",
      altText: "vp level oversight icon",
      title: "VP-level Oversight",
      desc: "Senior leadership support so your PM and devs stay on track and perform at their best.",
    },
    {
      id: 5,
      icon: "/icons/qa-team.svg",
      altText: "qa team icon",
      title: "QA Team",
      desc: "Manual + automated testing to keep quality high at every release.",
    },
    {
      id: 6,
      icon: "/icons/devops-team.svg",
      altText: "devops team icon",
      title: "DevOps Team",
      desc: "Handles infrastructure, scaling, and security so everything runs smoothly.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-angle">
      <div className="container mx-auto">
        <div className="wrapper">
          {/* <!-- section-title --> */}
          <SectionHeading
            head="Behind every great product is an incredible team"
            desc="Get elite software developers on demand — plus every resource your
              squad needs to make your product successful."
            colorHead="primary-text"
            colorDesc="secondary-text"
            textAlign="center"
            contAlign="auto"
          />
          {/* <!-- telent-cards --> */}
          <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-items-center justify-content-center gap-x-6 gap-y-16 mt-16">
            {/* <!-- item --> */}

            {talentItem.map((item) => (
              <div
                key={item.id}
                className="max-w-[370px] flex flex-col items-start"
              >
                <div className="md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.altText}
                    width={60}
                    height={60}
                    className="w-3 h-3 md:w-8 md:h-8"
                  />
                </div>
                <h4 className="font-semibold text-2xl text-primary-text mt-8 mb-4">
                  {item.title}
                </h4>
                <p className="com-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talent;
