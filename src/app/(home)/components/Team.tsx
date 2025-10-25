import React from "react";

const Team = () => {
  return (
    <section className="bg-[#2ab398] py-[60px] lg:py-[100px]">
      <div className="w-full h-20 bg-[#2ab398] -skew-y-3"></div>
      <div className="container mx-auto">
        <div className="wrapper max-w-[580px] mx-auto">
          <h2 className="section-head-light !text-center">
            Work with the customer-centric team that delivers
          </h2>
          <p className="section-head-desc-light pt-8 !text-center">
            Invaluable agile team management experience. Simplified monthly
            cost.
          </p>
          <div className="text-center w-full mt-16">
            <button className="font-primary text-[16px] text-[#2ab398] leading-6 bg-white p-4 hover:cursor-pointer active:scale-95 duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
