"use client";
const Modal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      {/* MODAL */}
      <div className="modal_wrapper fixed inset-0 z-50 h-full  bg-black/5  backdrop-blur-sm ">
        <div className="">
          {/* <!-- Modal body --> */}
          <div className="absolute inset-0  overflow-y-auto">
            <div className=" my-10 mx-auto wrapper p-6 md:p-12 border border-gray-200 rounded-md bg-white max-w-[672px]">
              <div className="content">
                {/* <!-- head --> */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-4xl text-blue-400 font-medium leading-5">
                      Let&apos;s Talk
                    </h2>
                    <p className="text-lg text-gray-800 italic pt-2 pb-4">
                      Required fieled are marked
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-lg text-gray-800 hover:cursor-pointer hover:text-gray-600"
                    >
                      X
                    </button>
                  </div>
                </div>

                <form action="">
                  {/* <!-- input part --> */}
                  <div className="flex flex-col gap-4">
                    {/* <!-- item --> */}
                    <label
                      htmlFor="company_name"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span>Company name </span>
                      <input
                        type="text"
                        className="w-full h-10 bg-gray-100 mt-1 border border-gray-200 outline-0 p-2 text-sm focus:border focus:border-blue-300"
                      />
                    </label>
                    {/* <!-- item --> */}
                    <label
                      htmlFor="First Name"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span>First Name</span>
                      <input
                        type="text"
                        className="w-full h-10 bg-gray-100 mt-1 border border-gray-200 outline-0 p-2 text-sm focus:border focus:border-blue-300"
                      />
                    </label>
                    {/* <!-- item --> */}
                    <label
                      htmlFor="company_name"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span>Last name </span>
                      <input
                        type="text"
                        className="w-full h-10 bg-gray-100 mt-1 border border-gray-200 outline-0 p-2 text-sm focus:border focus:border-blue-300"
                      />
                    </label>
                    {/* <!-- item --> */}
                    <label
                      htmlFor="company_name"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span>Email </span>
                      <input
                        type="email"
                        className="w-full h-10 bg-gray-100 mt-1 border border-gray-200 outline-0 p-2 text-sm focus:border focus:border-blue-300"
                      />
                    </label>
                    {/* <!-- item --> */}
                    <label
                      htmlFor="company_name"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span>Phone number</span>
                      <input
                        type="number"
                        className="w-full h-10 bg-gray-100 mt-1 border border-gray-200 outline-0 p-2 text-sm focus:border focus:border-blue-300"
                      />
                    </label>
                  </div>

                  <div className="py-5">
                    <h5>What can DevSquad do for you?*</h5>
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
                  <div>
                    <label
                      htmlFor="company_name"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span>Can you tell us a little more about that?* </span>
                      <input
                        type="text"
                        className="w-full h-20 bg-gray-100 mt-1 border border-gray-200 outline-0 p-2 text-sm focus:border focus:border-blue-300"
                      />
                    </label>
                  </div>
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
                  <div>
                    <label
                      htmlFor="company_name"
                      className="text-sm md:text-[16px] leading-5"
                    >
                      <span> How did you hear about DevSquad? </span>
                      <input
                        type="text"
                        className="w-full h-10 bg-gray-100 mt-1 border border-gray-200 outline-0 p-2 text-sm focus:border focus:border-blue-300"
                      />
                    </label>
                  </div>
                  {/* <!-- button --> */}
                  <button
                    className="w-[150px] h-[50px] bg-green-400 text-white font-bold text-xl flex items-center justify-center hover:bg-green-500 duration-200 hover:cursor-pointer mt-10"
                    type="submit"
                  >
                    Submit
                  </button>
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
