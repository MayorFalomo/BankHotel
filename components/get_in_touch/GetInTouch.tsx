import { usePathname } from "next/navigation";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

type Props = {};

const GetInTouch = (props: Props) => {
  const route = usePathname();

  return (
    <div
      className={`${route == "/facility" ? "bg-regal_green" : "bg-off-white"}
        ${route == "/facility" ? "text-white" : "#000"}
       relative border-[1px] border-transparent h-full`}
    >
      <div className="w-[95%] my-[100px] mx-auto">
        <div className="flex flex-col justify-between gap-[10px] w-[90%]">
          <h2
            className={`${
              route == "/facility" ? "text-white" : "text-text_royal_green"
            } leading-8 scroll-m-5 xl:text-4xl lg:text-[30px] md:text-[28px] sm:text-[24px] text-[20px] underline text-text_royal_green font-helvetica`}
          >
            {" "}
            +234 781 52 952{" "}
          </h2>
          <p className="flex flex-col relative z-10 items-end gap-[3px] lg:text-xl sm:text-[18px] text-[16px] font-helvetica">
            <span>8 VICTORIA ISLAND </span>
            <span>Lagos, Nigeria </span>
          </p>
        </div>
        <div className="relative h-[90vh] max-[780px]:h-[60vh]   ">
          <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:w-[950px] min-[780px]:w-[750px] max-[780px]:w-full ">
            <div className="relative flex items-center gap-[15px] ">
              <h1
                className={`${
                  route == "/facility" ? "text-white" : "text-text_royal_green"
                } xl:text-[150px] lg:text-[120px] sm:text-[100px] text-[80px] max-[480px]:text-[70px] font-miracle`}
              >
                GET IN{" "}
              </h1>
              <img
                className="md:w-[80px] sm:w-[70px] w-[40px] max-[480px]:w-[30px]"
                src="./Star.svg"
                alt="img"
              />
            </div>

            <h1 className="2xl:text-[150px] lg:text-[120px] sm:text-[100px] text-[80px] max-[480px]:text-[70px] relative z-[1] text-end text-golden_yellow font-miracle">
              TOUCH{" "}
            </h1>

            <div className="absolute min-[780px]:top-[50px] max-[780px]:bottom-[-180px] right-0  z-[-1px] max-sm:w-[200px]">
              <img src="./chair.webp" alt="img" />
            </div>
          </div>
        </div>
        <div className="mb-[70px] hidden md:block">
          <p className="leading-7 font-helvetica">FIND A ROOM </p>
          <div className="flex items-center mt-[25px] w-fit border-2 border-black-800  font-helvetica">
            <button
              className={`${
                route == "/facility" ? "bg-transparent" : "bg-transparent"
              } flex items-center justify-around gap-[10px] w-[150px] h-[70px] text-#000 `}
            >
              CHECK IN <span>{<FaAngleDown />} </span>{" "}
            </button>
            <span className="h-[25px] w-[1px] bg-gray-700 opacity-[0.4]"></span>
            <button className="flex justify-around items-center gap-[10px] w-[150px] h-[70px] text-#000">
              CHECK OUT <span>{<FaAngleDown />}</span>{" "}
            </button>
            <button
              className={`${
                route == "/facility" ? "text-black" : "text-white_text "
              }                
              ${route == "/facility" ? "bg-golden_yellow" : "bg-regal_green"}
 flex items-center justify-around gap-[10px] w-[200px] h-[70px]  backdrop-blur-[20px] opacity-[0.9]"`}
            >
              BOOK ROOM <span>{<FaAngleDown />} </span>{" "}
            </button>
          </div>
        </div>
        {/* <div className="h-[1px] w-full bg-gray-200 hidden md:block"> </div> */}
      </div>
      <img
        className="absolute z-5 min-[780px]:top-[37%] max-[780px]:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        src="./vector16.svg"
        alt="img"
      />
      <img
        className="flex md:hidden absolute z-5  max-[780px]:bottom-[50px] left-[10px] w-[80px] "
        src="./coloured_wavy_btn.webp"
        alt="img"
      />
    </div>
  );
};

export default GetInTouch;
