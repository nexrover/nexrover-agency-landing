import Image from "next/image";
import React from "react";

const Approch = () => {
  const approchList = [
    {
      id: 1,
      text: "When we do our best work, we’ll always be able to grow our business",
    },
    {
      id: 2,
      text: "An ego-free environment means we can focus on the end-user, not ourselves",
    },
    {
      id: 3,
      text: "We don’t build things we don’t believe in or don’t see a need for just to make a buck",
    },
    {
      id: 4,
      text: "When we do our best work, we’ll always be able to grow our business",
    },
    {
      id: 5,
      text: "When we do our best work, we’ll always be able to grow our business",
    },
    {
      id: 6,
      text: "When we do our best work, we’ll always be able to grow our business",
    },
    {
      id: 7,
      text: "We do our best work, we’ll always be able to grow our business",
    },
  ];
  return (
    <section className="section-padding bg-bgSecond">
      <div className="container mx-auto">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          {/* <!-- title --> */}
          <h2 className="section-head text-center lg:text-left">
            In The Heart of <br /> Our Approch
          </h2>
          {/* <!-- Approach-list --> */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 lg:gap-x-12 lg:gap-y-6">
              {approchList.map((item) => (
                <div
                  className="flex justify-between items-start gap-5"
                  key={item.id}
                >
                  <div className="min-w-5 min-h-4 border border-primary rounded-sm flex items-center justify-center mt-1 p-1">
                    <Image
                      src="/icons/check-circle-solid-blue.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      className="w-3 h-3 object-contain"
                    />
                  </div>
                  <p className="com-text ">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approch;
