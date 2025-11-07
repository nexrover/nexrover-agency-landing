import React from "react";

const Test = () => {
  return (
    <div>
      {/* <!-- right card --> */}
      <div className="bg-yellow-bg/30 border-yellow-bg work-card">
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
          <h3 className="section-head text-3xl!"></h3>
          <p className="section-head-desc pt-6 pb-4"></p>
          <p className="com-text"></p>
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
  );
};

export default Test;
