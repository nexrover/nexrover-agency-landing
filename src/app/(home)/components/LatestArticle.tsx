import Image from "next/image";
import React from "react";

const LatestArticle = () => {
  return (
    <section className="section-padding bg-dark-bg">
      <div className="container mx-auto">
        <div className="wrapper">
          <h2 className="section-head-dark">Latest Article</h2>
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
              <div className="pt-5">
                <h3 className="section-head-desc-dark">
                  10 Top AI App Development Companies in the USA (2025 Guide)
                </h3>
                <p className="com-text-dark text-sm">
                  Posted on October9, 2025
                </p>
                <p className="com-text-dark pt-3">
                  AI is a buzzword, but turning it into a working product is
                  hard. Many founders either hire the wrong developers or
                  overspend on agencies that don’t understand lean startup
                  execution. …
                </p>
              </div>
            </div>
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
              <div className="pt-5">
                <h3 className="section-head-desc-dark">
                  10 Top AI App Development Companies in the USA (2025 Guide)
                </h3>
                <p className="com-text-dark text-sm">
                  Posted on October9, 2025
                </p>
                <p className="com-text-dark pt-3">
                  AI is a buzzword, but turning it into a working product is
                  hard. Many founders either hire the wrong developers or
                  overspend on agencies that don’t understand lean startup
                  execution. …
                </p>
              </div>
            </div>
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
              <div className="pt-5">
                <h3 className="section-head-desc-dark">
                  10 Top AI App Development Companies in the USA (2025 Guide)
                </h3>
                <p className="com-text-dark text-sm">
                  Posted on October9, 2025
                </p>
                <p className="com-text-dark pt-3">
                  AI is a buzzword, but turning it into a working product is
                  hard. Many founders either hire the wrong developers or
                  overspend on agencies that don’t understand lean startup
                  execution. …
                </p>
              </div>
            </div>
          </div>
          <div className="text-center w-full mt-16">
            <button className=" text-primary-text font-medium leading-6 bg-secondary-bg p-4 hover:cursor-pointer active:scale-95 duration-200 rounded-lg">
              Read All Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticle;
