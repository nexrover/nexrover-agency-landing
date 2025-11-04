import React from "react";

interface GradBtnProps {
  btnText: string;
}

const GradBtn: React.FC<GradBtnProps> = ({ btnText }) => {
  return (
    <button className="font-primary font-medium  md:text-[16px] text-sm text-primary-text-dark bg-gradient md:px-8 px-1 md:py-3 py-1 rounded-lg duration-200 hover:cursor-pointer hover:shadow-xl hover:scale-101 active:scale-95">
      {btnText}
    </button>
  );
};

export default GradBtn;
