import Image from "next/image";
import React from "react";

const LatestArticle = () => {
  return (
    <section className="py-[60px] lg:py-[100px] bg-black">
      <div className="container mx-auto">
        <div className="wrapper">
          <h2 className="section-head-light">Latest Article</h2>
          <div className="card-wrapper grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-[30px]">
            {/* <!-- item --> */}
            <div className="max-w-[392px] pt-8">
              <div>
                <Image
                  src="/image/article-1.jpg"
                  alt="image"
                  width={392}
                  height={300}
                />
              </div>
              <div className="pt-[18px]">
                <h3 className="section-head-desc-light">
                  10 Top AI App Development Companies in the USA (2025 Guide)
                </h3>
                <p className="com-text-light !text-sm">
                  Posted on October9, 2025
                </p>
                <p className="com-text-light pt-[12px]">
                  AI is a buzzword, but turning it into a working product is
                  hard. Many founders either hire the wrong developers or
                  overspend on agencies that don’t understand lean startup
                  execution. …
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            <div className="max-w-[392px] pt-[32px]">
              <div>
                <Image
                  src="/image/article-1.jpg"
                  alt="image"
                  width={392}
                  height={300}
                />
              </div>
              <div className="pt-[18px]">
                <h3 className="section-head-desc-light">
                  10 Top AI App Development Companies in the USA (2025 Guide)
                </h3>
                <p className="com-text-light !text-sm">
                  Posted on October9, 2025
                </p>
                <p className="com-text-light pt-[12px]">
                  AI is a buzzword, but turning it into a working product is
                  hard. Many founders either hire the wrong developers or
                  overspend on agencies that don’t understand lean startup
                  execution. …
                </p>
              </div>
            </div>
            {/* <!-- item --> */}
            <div className="max-w-[392px] pt-[32px]">
              <div>
                <Image
                  src="/image/article-1.jpg"
                  alt="image"
                  width={392}
                  height={300}
                />
              </div>
              <div className="pt-[18px]">
                <h3 className="section-head-desc-light">
                  10 Top AI App Development Companies in the USA (2025 Guide)
                </h3>
                <p className="com-text-light !text-sm">
                  Posted on October9, 2025
                </p>
                <p className="com-text-light pt-[12px]">
                  AI is a buzzword, but turning it into a working product is
                  hard. Many founders either hire the wrong developers or
                  overspend on agencies that don’t understand lean startup
                  execution. …
                </p>
              </div>
            </div>
          </div>
          <div className="text-center w-full mt-[64px]">
            <button className="font-primary text-[16px] text-black leading-[24px] bg-white p-4 hover:cursor-pointer active:scale-95 duration-200">
              Read All Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticle;
