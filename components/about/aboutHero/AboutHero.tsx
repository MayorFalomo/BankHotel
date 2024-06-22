import React from "react";

type Props = {};

const AboutHero = (props: Props) => {
  return (
    <div className=" bg-regal_green  border-0 border-transparent">
      <div className=" h-[50vh] flex justify-center  items-center">
        <h1
          className={`xl:text-[150px] text-center lg:text-[120px] sm:text-[100px] text-[70px] max-[480px]:text-[50px] font-miracle`}
        >
          <span className=" text-golden_yellow"> BANK </span>{" "}
          <span className=" text-white">HOTEL </span>
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;
