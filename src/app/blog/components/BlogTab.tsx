import Image from "next/image";
import React from "react";

const BlogTab = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="wrapper">
          {/* <!-- Tabs Container --> */}
          <div className="p-8 mb-8">
            <div className="relative">
              {/* <!-- Left Arrow --> */}
              <button
                id="leftArrow"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300 opacity-0 pointer-events-none"
              >
                <Image
                  src="/icons/left-chevron.png"
                  alt="icon"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>

              {/* <!-- Right Arrow --> */}
              <button
                id="rightArrow"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300"
              >
                <Image
                  src="/icons/right-arrow.png"
                  alt="icon"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>

              {/* <!-- Tabs Container --> */}
              <div
                id="tabsContainer"
                className="flex space-x-1 overflow-x-auto pb-2 hide-scrollbar mx-10"
              >
                <button
                  className="tab-button flex-shrink-0 px-4 py-2 font-medium rounded-lg bg-secondary text-white transition-all duration-300"
                  data-tab="tab1"
                >
                  All Blogs
                </button>
                <button
                  className="tab-button flex-shrink-0 px-4 py-2 font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300"
                  data-tab="tab2"
                >
                  Comparison
                </button>
                <button
                  className="tab-button flex-shrink-0 px-4 py-2 font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300"
                  data-tab="tab3"
                >
                  Community
                </button>
                <button
                  className="tab-button flex-shrink-0 px-4 py-2 font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300"
                  data-tab="tab4"
                >
                  Team
                </button>
                <button
                  className="tab-button flex-shrink-0 px-4 py-2 font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300"
                  data-tab="tab5"
                >
                  Creator Stories
                </button>
                <button
                  className="tab-button flex-shrink-0 px-4 py-2 font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300"
                  data-tab="tab6"
                >
                  Tutorial
                </button>
                <button
                  className="tab-button flex-shrink-0 px-4 py-2 font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300"
                  data-tab="tab7"
                >
                  Analytics
                </button>
                <button
                  className="tab-button flex-shrink-0 px-4 py-2 font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300"
                  data-tab="tab8"
                >
                  Solutions
                </button>
                <button
                  className="tab-button flex-shrink-0 px-4 py-2 font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300"
                  data-tab="tab9"
                >
                  History
                </button>
                <button
                  className="tab-button flex-shrink-0 px-4 py-2 font-medium rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300"
                  data-tab="tab10"
                >
                  Membership
                </button>
              </div>
            </div>

            {/* <!-- Tab Contents --> */}
            <div className="mt-6">
              {/* <!-- Tab 1 Content --> */}
              <div id="tab1" className="tab-content">
                <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                  {/* <!-- card --> */}
                  <div className="card flex flex-col gap-3 border-0 rounded-t-xl overflow-hidden">
                    <div>
                      <Image
                        src="/image/blog-card-1.png"
                        alt="card-image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="px-2 py-1 bg-primary rounded-full font-light text-sm text-primary-text font-medium">
                        Comparison
                      </p>
                      <div className="w-0.5 h-full bg-secondary-bg"></div>
                      <p className="text-sm text-primary font-medium">
                        9 Oct 2025
                      </p>
                    </div>
                    <h4 className="section-head-desc">
                      Retargeting vs Remarketing: What’s the Real Difference in
                      2025?
                    </h4>
                    <p className="com-text">
                      Discover the key differences between retargeting and
                      remarketing in 2025 and learn how to use
                    </p>
                    <div>
                      <a
                        href="#"
                        className="font-primary font-extralight text-secondary hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div className="card flex flex-col gap-3 border-0 rounded-t-xl overflow-hidden">
                    <div>
                      <Image
                        src="/image/blog-card-1.png"
                        alt="card-image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="px-2 py-1 bg-primary rounded-full font-light text-sm text-primary-text font-medium">
                        Comparison
                      </p>
                      <div className="w-0.5 h-full bg-secondary-bg"></div>
                      <p className="text-sm text-primary font-medium">
                        9 Oct 2025
                      </p>
                    </div>
                    <h4 className="section-head-desc">
                      Retargeting vs Remarketing: What’s the Real Difference in
                      2025?
                    </h4>
                    <p className="com-text">
                      Discover the key differences between retargeting and
                      remarketing in 2025 and learn how to use
                    </p>
                    <div>
                      <a
                        href="#"
                        className="font-primary font-extralight text-secondary hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div className="card flex flex-col gap-3 border-0 rounded-t-xl overflow-hidden">
                    <div>
                      <Image
                        src="/image/blog-card-1.png"
                        alt="card-image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="px-2 py-1 bg-primary rounded-full font-light text-sm text-primary-text font-medium">
                        Comparison
                      </p>
                      <div className="w-0.5 h-full bg-secondary-bg"></div>
                      <p className="text-sm text-primary font-medium">
                        9 Oct 2025
                      </p>
                    </div>
                    <h4 className="section-head-desc">
                      Retargeting vs Remarketing: What’s the Real Difference in
                      2025?
                    </h4>
                    <p className="com-text">
                      Discover the key differences between retargeting and
                      remarketing in 2025 and learn how to use
                    </p>
                    <div>
                      <a
                        href="#"
                        className="font-primary font-extralight text-secondary hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div className="card flex flex-col gap-3 border-0 rounded-t-xl overflow-hidden">
                    <div>
                      <Image
                        src="/image/blog-card-1.png"
                        alt="card-image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="px-2 py-1 bg-primary rounded-full font-light text-sm text-primary-text font-medium">
                        Comparison
                      </p>
                      <div className="w-0.5 h-full bg-secondary-bg"></div>
                      <p className="text-sm text-primary font-medium">
                        9 Oct 2025
                      </p>
                    </div>
                    <h4 className="section-head-desc">
                      Retargeting vs Remarketing: What’s the Real Difference in
                      2025?
                    </h4>
                    <p className="com-text">
                      Discover the key differences between retargeting and
                      remarketing in 2025 and learn how to use
                    </p>
                    <div>
                      <a
                        href="#"
                        className="font-primary font-extralight text-secondary hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div className="card flex flex-col gap-3 border-0 rounded-t-xl overflow-hidden">
                    <div>
                      <Image
                        src="/image/blog-card-1.png"
                        alt="card-image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="px-2 py-1 bg-primary rounded-full font-light text-sm text-primary-text font-medium">
                        Comparison
                      </p>
                      <div className="w-0.5 h-full bg-secondary-bg"></div>
                      <p className="text-sm text-primary font-medium">
                        9 Oct 2025
                      </p>
                    </div>
                    <h4 className="section-head-desc">
                      Retargeting vs Remarketing: What’s the Real Difference in
                      2025?
                    </h4>
                    <p className="com-text">
                      Discover the key differences between retargeting and
                      remarketing in 2025 and learn how to use
                    </p>
                    <div>
                      <a
                        href="#"
                        className="font-primary font-extralight text-secondary hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div className="card flex flex-col gap-3 border-0 rounded-t-xl overflow-hidden">
                    <div>
                      <Image
                        src="/image/blog-card-1.png"
                        alt="card-image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="px-2 py-1 bg-primary rounded-full font-light text-sm text-primary-text font-medium">
                        Comparison
                      </p>
                      <div className="w-0.5 h-full bg-secondary-bg"></div>
                      <p className="text-sm text-primary font-medium">
                        9 Oct 2025
                      </p>
                    </div>
                    <h4 className="section-head-desc">
                      Retargeting vs Remarketing: What’s the Real Difference in
                      2025?
                    </h4>
                    <p className="com-text">
                      Discover the key differences between retargeting and
                      remarketing in 2025 and learn how to use
                    </p>
                    <div>
                      <a
                        href="#"
                        className="font-primary font-extralight text-secondary hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div className="card flex flex-col gap-3 border-0 rounded-t-xl overflow-hidden">
                    <div>
                      <Image
                        src="/image/blog-card-1.png"
                        alt="card-image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="px-2 py-1 bg-primary rounded-full font-light text-sm text-primary-text font-medium">
                        Comparison
                      </p>
                      <div className="w-0.5 h-full bg-secondary-bg"></div>
                      <p className="text-sm text-primary font-medium">
                        9 Oct 2025
                      </p>
                    </div>
                    <h4 className="section-head-desc">
                      Retargeting vs Remarketing: What’s the Real Difference in
                      2025?
                    </h4>
                    <p className="com-text">
                      Discover the key differences between retargeting and
                      remarketing in 2025 and learn how to use
                    </p>
                    <div>
                      <a
                        href="#"
                        className="font-primary font-extralight text-secondary hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div className="card flex flex-col gap-3 border-0 rounded-t-xl overflow-hidden">
                    <div>
                      <Image
                        src="/image/blog-card-1.png"
                        alt="card-image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="px-2 py-1 bg-primary rounded-full font-light text-sm text-primary-text font-medium">
                        Comparison
                      </p>
                      <div className="w-0.5 h-full bg-secondary-bg"></div>
                      <p className="text-sm text-primary font-medium">
                        9 Oct 2025
                      </p>
                    </div>
                    <h4 className="section-head-desc">
                      Retargeting vs Remarketing: What’s the Real Difference in
                      2025?
                    </h4>
                    <p className="com-text">
                      Discover the key differences between retargeting and
                      remarketing in 2025 and learn how to use
                    </p>
                    <div>
                      <a
                        href="#"
                        className="font-primary font-extralight text-secondary hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div className="card flex flex-col gap-3 border-0 rounded-t-xl overflow-hidden">
                    <div>
                      <Image
                        src="/image/blog-card-1.png"
                        alt="card-image"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="px-2 py-1 bg-primary rounded-full font-light text-sm text-primary-text font-medium">
                        Comparison
                      </p>
                      <div className="w-0.5 h-full bg-secondary-bg"></div>
                      <p className="text-sm text-primary font-medium">
                        9 Oct 2025
                      </p>
                    </div>
                    <h4 className="section-head-desc">
                      Retargeting vs Remarketing: What’s the Real Difference in
                      2025?
                    </h4>
                    <p className="com-text">
                      Discover the key differences between retargeting and
                      remarketing in 2025 and learn how to use
                    </p>
                    <div>
                      <a
                        href="#"
                        className="font-primary font-extralight text-secondary hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- button --> */}
                <div className="mt-16 text-center">
                  <a
                    href="#"
                    className="font-primary font-medium  md:text-[16px] text-sm text-primary-text-dark bg-gradient md:px-8 px-1 md:py-3 py-1 rounded-lg duration-200 hover:cursor-pointer hover:shadow-xl hover:scale-101 active:scale-95"
                  >
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTab;
