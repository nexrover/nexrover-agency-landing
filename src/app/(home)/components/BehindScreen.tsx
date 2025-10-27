import React from "react";

const BehindScreen = () => {
  return (
    <section className="py-[60px] lg:py-[100px] bg-[#eaf0f7]">
      <div className="container mx-auto">
        <div className="wrapper flex flex-col lg:flex-row lg:justify-between lg:gap-8">
          {/* <!-- left content-figure --> */}
          <div className="max-w-[470px]">
            <img src="/image/user-setup.png" alt="figure" />
          </div>
          {/* <!-- right content-article --> */}
          <div className="max-w-[594px] pt-8 lg:pt-0">
            <h2 className="section-head">You’re going to love your NexRover</h2>
            <p className="section-head-desc pt-4">
              Including the people behind the scenes.
            </p>
            <ul className="flex flex-col gap-4 pt-4 md:gap-8 md:pt-8">
              <li className="flex items-center gap-2">
                <div className="w-[18px] h-[18px] bg-yellow-400 rounded-full p-2"></div>
                <p className="com-text">Tell us about your product</p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-[18px] h-[18px] bg-yellow-400 rounded-full p-2"></div>
                <p className="com-text">Kick things off with a prototype</p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-[18px] h-[18px] bg-yellow-400 rounded-full p-2"></div>
                <p className="com-text">Make changes before we build</p>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-[18px] h-[18px] bg-yellow-400 rounded-full p-2"></div>
                <p className="com-text">
                  Get the exact product your users need
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindScreen;
