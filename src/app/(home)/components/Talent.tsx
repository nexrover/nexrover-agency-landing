import SectionHeading from "@/components/features/SectionHeading";
import Image from "next/image";
import React from "react";

const Talent = () => {
  const talentItem = [
    {
      id: 1,
      icon: "/icons/business.blue.svg",
      title: "2-6 Full Stack Developers",
      desc: "with 4+ years experience, working exclusively on your product.",
    },
    {
      id: 2,
      icon: "/icons/business.blue.svg",
      title: "2-6 Full Stack Developers",
      desc: "with 4+ years experience, working exclusively on your product.",
    },
    {
      id: 3,
      icon: "/icons/business.blue.svg",
      title: "2-6 Full Stack Developers",
      desc: "with 4+ years experience, working exclusively on your product.",
    },
    {
      id: 4,
      icon: "/icons/business.blue.svg",
      title: "2-6 Full Stack Developers",
      desc: "with 4+ years experience, working exclusively on your product.",
    },
    {
      id: 5,
      icon: "/icons/business.blue.svg",
      title: "2-6 Full Stack Developers",
      desc: "with 4+ years experience, working exclusively on your product.",
    },
    {
      id: 6,
      icon: "/icons/business.blue.svg",
      title: "2-6 Full Stack Developers",
      desc: "with 4+ years experience, working exclusively on your product.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-angle">
      <div className="container mx-auto">
        <div className="wrapper">
          {/* <!-- section-title --> */}
          <SectionHeading
            head="Talent is the difference between good and great products"
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
                <div>
                  <Image src={item.icon} alt="icon" width={60} height={60} />
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
