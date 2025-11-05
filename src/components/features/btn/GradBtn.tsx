import React from "react";

interface GradBtnProps {
  btnText: string;
  btnType?: "button" | "submit" | "reset";
}

const GradBtn: React.FC<GradBtnProps> = ({ btnText, btnType = "button" }) => {
  return (
    <button
      type={btnType}
      className="font-primary font-medium md:text-[16px] text-sm text-primary-text-dark bg-gradient md:px-8 px-2 md:py-3 py-1 rounded-lg duration-200 hover:cursor-pointer hover:shadow-xl hover:scale-105 active:scale-95 "
    >
      {btnText}
    </button>
  );
};

export default GradBtn;
