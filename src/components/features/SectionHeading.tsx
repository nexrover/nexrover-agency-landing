import React from "react";

interface SectionHeading {
  head: string;
  desc: string;
  maxWidthHead?: string;
  maxWidthDecs?: string;
  colorHead?: string;
  colorDesc?: string;
  contAlign?: string;
  textAlign?: string;
}

const SectionHeading: React.FC<SectionHeading> = ({
  head,
  desc,
  maxWidthHead,
  maxWidthDecs,
  colorHead,
  colorDesc,
  contAlign,
  textAlign,
}) => {
  return (
    <div>
      <h2
        className={`max-w-[${maxWidthHead}] mx-${contAlign} text-${colorHead} text-${textAlign} font-bold text-2xl md:text-3xl lg:text-4xl leading-[140%] mt-0 md:mb-4`}
      >
        {head}
      </h2>
      <p
        className={`max-w-[${maxWidthDecs}] mx-${contAlign} text-${colorDesc} text-${textAlign} md:text-lg mb-4`}
      >
        {desc}
      </p>
    </div>
  );
};

export default SectionHeading;
