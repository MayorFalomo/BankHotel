import React from "react";
import { TbAngle, TbArrowUp } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
type Props = {};

function HeroImage({}: Props) {
  return (
    <div className="bg-regal_green">
      <div className="w-[95%] relative mx-auto">
        <div className="relative w-full h-full">
          <img src="./heroImage.png" alt="img" />
          <div className="flex items-center absolute max-[900px]:bottom-0 min-[900px]:top-0 right-0 font-helvetica">
            <button className="sm:flex items-center justify-around gap-[10px] hidden sm:w-[180px] lg:w-[200px] sm:h-[70px] max-lg:h-[80px] xl:h-[90px] text-white_text  bg-hero-btn backdrop-blur-[20px] opacity-[0.9]">
              CHECK IN <span>{<FaAngleDown />} </span>{" "}
            </button>
            <span className="h-[30px] w-[1px] bg-white opacity-[0.4]"></span>

            <button className="sm:flex items-center justify-around gap-[10px] hidden sm:w-[180px] lg:w-[200px] sm:h-[70px] max-lg:h-[80px] xl:h-[90px] text-white_text  bg-hero-btn backdrop-blur-[20px] opacity-[0.9]">
              CHECK OUT <span>{<FaAngleDown />}</span>{" "}
            </button>
            <button className="sm:flex items-center justify-around gap-[10px] hidden sm:w-[190px] lg:w-[200px] sm:h-[70px] max-lg:h-[80px] xl:h-[90px]  max-sm:text-[15px] md:text-[16px] bg-golden_yellow backdrop-blur-[20px] opacity-[0.9]">
              CHECK BOOK ROOM <span>{<FaAngleDown />} </span>{" "}
            </button>
          </div>
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
