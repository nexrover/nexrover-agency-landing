import SectionHeading from "@/components/features/SectionHeading";
import React from "react";

const FAQ = () => {
  const faqItems = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.",
    },
    {
      id: 2,
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.",
    },
    {
      id: 3,
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.",
    },
    {
      id: 4,
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.",
    },
    {
      id: 5,
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.",
    },
    {
      id: 6,
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.",
    },
  ];
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Section heading */}
        <SectionHeading
          head="Frequently Asked Questions"
          colorHead="primary-text"
          textAlign="center"
        />

        {/* FAQ wrapper */}
        <div className="accordian-wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {faqItems.map((item) => (
            <div key={item.id}>
              {/* Accordion Item 1 */}
              <div className="bg-secondary-bg rounded-md overflow-hidden border border-border ">
                <input
                  type="checkbox"
                  id={item.id.toString()}
                  className="peer hidden "
                />

                {/* Header */}
                <label
                  htmlFor={item.id.toString()}
                  className="flex justify-between items-center p-5 cursor-pointer select-none "
                >
                  <span className="com-text font-medium ">{item.question}</span>

                  {/* Icons */}
                  <div className="relative w-5 h-5">
                    {/* Plus Icon */}
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 peer-checked:rotate-90 opacity-100 peer-checked:opacity-0">
                      <div className="w-5 h-0.5 bg-secondary-text rounded-full"></div>
                      <div className="w-0.5 h-5 bg-secondary-text rounded-full absolute"></div>
                    </div>

                    {/* Minus Icon */}
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 peer-checked:opacity-100">
                      <div className="w-5 h-0.5 bg-secondary-text rounded-full"></div>
                    </div>
                  </div>
                </label>

                {/* Content */}
                <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-96">
                  <div className="p-5  text-secondary-text border-t border-border">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
