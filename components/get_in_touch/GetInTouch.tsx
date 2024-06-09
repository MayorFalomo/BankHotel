import React from "react";
import { FaAngleDown } from "react-icons/fa6";

type Props = {};

const GetInTouch = (props: Props) => {
  return (
    <div className="bg-off-white relative border-[1px] border-transparent h-full">
      <div className="w-[95%] my-[100px] mx-auto">
        <div className="flex flex-col justify-between gap-[10px] w-[90%]">
          <h2 className="leading-8 scroll-m-5 text-4xl underline text-text_royal_green font-helvetica">
            {" "}
            +234 781 52 952{" "}
          </h2>
          <p className="flex flex-col relative z-10 items-end gap-[5px] text-xl font-helvetica">
            <span>8 VICTORIA ISLAND </span>
            <span>Lagos, Nigeria </span>
          </p>
        </div>
        <div className="relative h-[90vh]   ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[950px] ">
            <div className="flex items-center gap-[15px] ">
              <h1 className="text-[150px] text-text_royal_green font-miracle">
                GET IN{" "}
              </h1>
              <img className="w-[80px]" src="./Star.svg" alt="img" />
            </div>

            <h1 className="text-[150px] leading-[1] relative z-[1] text-end text-golden_yellow font-miracle">
              TOUCH{" "}
            </h1>

            <div className="absolute top-[50px] right-0 z-[-1px]">
              <img src="./chair.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="mb-[70px]">
          <p className="leading-7 font-helvetica">FIND A ROOM </p>
          <div className="flex items-center mt-[25px] w-fit border-2 border-black-800  font-helvetica">
            <button className="flex items-center justify-around gap-[10px] w-[150px] h-[70px] text-#000 ">
              CHECK IN <span>{<FaAngleDown />} </span>{" "}
            </button>
            <span className="h-[25px] w-[1px] bg-gray-700 opacity-[0.4]"></span>
            <button className="flex justify-around items-center gap-[10px] w-[150px] h-[70px] text-#000">
              CHECK OUT <span>{<FaAngleDown />}</span>{" "}
            </button>
            <button className="flex items-center justify-around gap-[10px] w-[200px] h-[70px] bg-text_royal_green text-white_text backdrop-blur-[20px] opacity-[0.9]">
              BOOK ROOM <span>{<FaAngleDown />} </span>{" "}
            </button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-200"> </div>
      </div>
      <img
        className="absolute z-5 top-[37%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        src="./vector16.svg"
        alt="img"
      />
    </div>
  );
};

export default GetInTouch;
