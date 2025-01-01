import React from "react";

const Cover = ({img, title}) => {
  return (
    <div
      className="hero md:h-[700px]"
      style={{
        backgroundImage:
          `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md inset-0 backdrop-blur-sm bg-black bg-opacity-40 items-center justify-center p-7">
          <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
          <p className="mb-5 text-xl uppercase">
            Would you like to try a dish?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
