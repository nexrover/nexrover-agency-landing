"use client";

import GradBtn from "@/components/features/btn/GradBtn";

const Modal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      {/* MODAL */}
      <div className="modal_wrapper fixed inset-0 z-50 h-full  bg-black/60 ">
        <div>
          {/* <!-- Modal body --> */}
          <div className="absolute inset-0  overflow-y-auto">
            <div className=" my-10 mx-auto wrapper p-6 md:p-14 border border-border rounded-2xl bg-primary-bg max-w-[780px]">
              <div className="content">
                {/* <!-- head --> */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-4xl text-primary font-semibold leading-5">
                      Let&apos;s Talk
                    </h2>
                    <p className="text-lg text-secondary-text italic pt-2 pb-8">
                      Required fieled are marked
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="w-6 h-6 flex items-center justify-center rounded-xs text-lg text-primary-text hover:cursor-pointer hover:text-secondary-text hover:font-medium duration-200 hover:bg-secondary-bg "
                    >
                      &#10005;
                    </button>
                  </div>
                </div>

                <form>
                  {/* <!-- input part --> */}
                  <div className="flex flex-col gap-4">
                    {/* <!-- company name --> */}
                    <label
                      htmlFor="company_name"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span className=" relative">
                        Company name
                        <span className="absolute top-0 -right-2.5 text-red-600 ">
                          *
                        </span>
                      </span>

                      <input
                        type="text"
                        className="w-full h-10 bg-secondary-bg mt-1.5 border border-border outline-0 p-2 text-sm focus:border focus:border-primary required"
                      />
                    </label>
                    {/* <!-- First name --> */}
                    <label
                      htmlFor="first_name"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span className=" relative">
                        First Name
                        <span className="absolute top-0 -right-2.5 text-red-600 ">
                          *
                        </span>
                      </span>

                      <input
                        type="text"
                        className="w-full h-10 bg-secondary-bg mt-1.5 border border-border outline-0 p-2 text-sm focus:border focus:border-primary required"
                      />
                    </label>
                    {/* <!-- last name --> */}
                    <label
                      htmlFor="last_name"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span className=" relative">Last Name</span>

                      <input
                        type="text"
                        className="w-full h-10 bg-secondary-bg mt-1.5 border border-border outline-0 p-2 text-sm focus:border focus:border-primary"
                      />
                    </label>
                    {/* <!-- email address --> */}
                    <label
                      htmlFor="email"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span className=" relative">
                        Email Address
                        <span className="absolute top-0 -right-2.5 text-red-600 ">
                          *
                        </span>
                      </span>

                      <input
                        type="email"
                        className="w-full h-10 bg-secondary-bg mt-1.5 border border-border outline-0 p-2 text-sm focus:border focus:border-primary"
                      />
                    </label>
                    {/* <!-- Phone number --> */}
                    <label
                      htmlFor="phone_number"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span className=" relative">
                        Phone Number
                        <span className="absolute top-0 -right-2.5 text-red-600 ">
                          *
                        </span>
                      </span>

                      <input
                        type="number"
                        className="w-full h-10 bg-secondary-bg mt-1.5 border border-border outline-0 p-2 text-sm focus:border focus:border-primary"
                      />
                    </label>
                  </div>

                  <div className="py-5">
                    <h5 className="">What can NexRover do for you?*</h5>
                    {/* <!-- radio items --> */}
                    <div className="flex flex-col gap-3 mt-1">
                      <label
                        htmlFor="item4"
                        className="flex justify-start items-center gap-1"
                      >
                        <input type="radio" className="w-4 h-4" id="item4" />
                        <span className="text-gray-700">
                          Create an Amazing New Product
                        </span>
                      </label>
                      <label
                        htmlFor="item1"
                        className="flex justify-start items-center gap-1"
                      >
                        <input type="radio" className="w-4 h-4" id="item1" />
                        <span className="text-gray-700">
                          Make my great product even greater
                        </span>
                      </label>
                      <label
                        htmlFor="item2"
                        className="flex justify-start items-center gap-1"
                      >
                        <input type="radio" className="w-4 h-4" id="item2" />
                        <span className="text-gray-700">
                          Automate my QA and testing{" "}
                        </span>
                      </label>
                      <label
                        htmlFor="item3"
                        className="flex justify-start items-center gap-1"
                      >
                        <input type="radio" className="w-4 h-4" id="item3" />
                        <span className="text-gray-700">Something else </span>
                      </label>
                    </div>
                  </div>
                  {/* text area 1*/}
                  <div>
                    <h4 className="text-sm md:text-[16px] leading-5">
                      Can you tell us a little more about that?
                    </h4>
                    <textarea
                      name="more_info"
                      id="more_info"
                      className="w-full bg-secondary-bg mt-1.5 border border-border outline-0 p-2 text-sm focus:border focus:border-primary h-25 resize-none"
                    ></textarea>
                  </div>
                  {/* radio opiton 2 */}
                  <div className="py-5">
                    <h5>What is your budget?*</h5>
                    {/* <!-- radio items --> */}
                    <div className="flex flex-col gap-3 mt-1">
                      <label
                        htmlFor="item5"
                        className="flex justify-start items-center gap-1"
                      >
                        <input type="radio" className="w-4 h-4" id="item5" />
                        <span className="text-gray-700">
                          Less than $50,000{" "}
                        </span>
                      </label>
                      <label
                        htmlFor="item6"
                        className="flex justify-start items-center gap-1"
                      >
                        <input type="radio" className="w-4 h-4" id="item6" />
                        <span className="text-gray-700">
                          $50,000 - $150,000{" "}
                        </span>
                      </label>
                      <label
                        htmlFor="item7"
                        className="flex justify-start items-center gap-1"
                      >
                        <input type="radio" className="w-4 h-4" id="item7" />
                        <span className="text-gray-700">
                          $150,000 - $350,000{" "}
                        </span>
                      </label>
                      <label
                        htmlFor="item8"
                        className="flex justify-start items-center gap-1"
                      >
                        <input type="radio" className="w-4 h-4" id="item8" />
                        <span className="text-gray-700">
                          $350,000 - $500,000{" "}
                        </span>
                      </label>
                      <label
                        htmlFor="item9"
                        className="flex justify-start items-center gap-1"
                      >
                        <input type="radio" className="w-4 h-4" id="item9" />
                        <span className="text-gray-700">$500,000 or more </span>
                      </label>
                    </div>
                  </div>

                  {/* text area 2*/}
                  <div>
                    <h4 className="text-sm md:text-[16px] leading-5">
                      How did you hear about NexRover?
                    </h4>
                    <textarea
                      name="more_info"
                      id="more_info"
                      className="w-full bg-secondary-bg mt-1.5 border border-border outline-0 p-2 text-sm focus:border focus:border-primary h-10 resize-none"
                    ></textarea>
                  </div>
                  {/* <!-- button --> */}
                  <div className="mt-10 text-center">
                    <GradBtn btnType="submit" btnText="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
