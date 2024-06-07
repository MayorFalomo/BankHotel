import React from "react";
import { TbAngle, TbArrowUp } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
type Props = {};

function HeroImage({}: Props) {
  return (
    <div className="bg-regal_green">
      <div className="w-[95%] relative mx-auto">
        {/* <div className="w-full h-full"> */}
        <img src="./heroImage.png" alt="img" />
        {/* </div> */}
        <div className="flex items-center absolute top-0 right-0 font-helvetica">
          <button className="flex items-center justify-around gap-[10px] w-[200px] h-[90px] text-white_text  bg-hero-btn backdrop-blur-[20px] opacity-[0.9]">
            CHECK IN <span>{<FaAngleDown />} </span>{" "}
          </button>
          <button className="flex justify-around items-center gap-[10px] w-[200px] h-[90px] text-white_text bg-hero-btn backdrop-blur-[20px] opacity-[0.9] border-gray-500 border-l-2">
            CHECK OUT <span>{<FaAngleDown />}</span>{" "}
          </button>
          <button className="flex items-center justify-around gap-[10px] w-[250px] h-[90px] bg-golden_yellow backdrop-blur-[20px] opacity-[0.9]">
            CHECK BOOK ROOM <span>{<FaAngleDown />} </span>{" "}
          </button>
        </div>
        <div className="flex items-center justify-between gap-3 mt-[20px] text-white_text font-helvetica ">
          <p className="leading-7 text-golden_yellow underline underline-offset-1">
            +234 781 52 952
          </p>
          <p className="leading-7 ">ART & CONGRESS </p>
        </div>
        <div className="flex items-center justify-between gap-3 text-white_text font-helvetica ">
          <p className="leading-7 underline underline-offset-1 ">
            6A - ANTHONY HOROWITZ WAY, LEKKI{" "}
          </p>
          <p className="leading-7">HALL</p>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
