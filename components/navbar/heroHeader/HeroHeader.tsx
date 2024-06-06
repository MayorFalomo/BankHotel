import Image from "next/image";
import React from "react";
import { GiGooeyEyedSun } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";

const HeroHeader = () => {
  return (
    <div className="font-helvetica bg-[#313F38]">
      <div className="flex justify-between items-center gap-[30px] w-[95%] m-auto text-white">
        <div className="flex flex-col w-full ">
          <h1 className="font-miracle scroll-m-20 text-[#fff]  font-light -tracking-tight  border-solid lg:text-[120px]">
            Bank <span className="font-miracle text-[#FCD043]">Hotel </span>{" "}
          </h1>
          <ul className="flex  gap-[10px] font-helvetica my-6 list-none [&>li]:mt-2">
            <li>ROOMS //</li>
            <li>RESTAURANT //</li>
            <li>CONGRESS HALL //</li>
            <li>WINE BAR //</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px] w-full justify-between">
          <div className="flex justify-between mb-[80px] h-full w-full ">
            <div className="flex items-center gap-3 p-2 px-[35px] rounded-[20px] w-fit border-solid border-2 border-gray-400">
              <span className="text-[#FCD043] text-[25px] ">
                {<TbNorthStar />}{" "}
              </span>
              <span>1973 </span>
            </div>
            <div className="cursor-pointer">
              <Image src="/wavy.png" width={40} height={40} alt="img" />
            </div>
          </div>
          <p className="w-[50%] font-helvetica tracking-[.05em] ">
            The luxurious hotel in the most beautiful European city with an
            exclusive restaurant, conference-hall, and art-bar.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
