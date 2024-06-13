import React from "react";
import { TbStar } from "react-icons/tb";

type Props = {};

function Facilities({}: Props) {
  return (
    <div className="bg-off-white w-[100%] border-2 border-transparent border-solid ">
      <div className="mt-[100px] ">
        <div className="flex justify-between items-start gap-[20px] mx-auto w-[95%] max-[850px]:flex-col ">
          <p className="flex flex-col font-helvetica gap-[5px] max-[850px]:w-full max-[850px]:text-end">
            <span>ART & CONGRESS</span> <span>HALL </span>{" "}
          </p>
          <div className="font-miracle w-[520px] max-w-[520px]  max-[850px]:w-[100%] max-[850px]:max-w-[100%]  gap-[5px] flex flex-col">
            <h1 className="scroll-m-10 max-[540px]:w-[60%]  max-sm:text-[70px] sm:text-[70px] lg:text-[100px] max-[850px]:text-center font-extrabold tracking-[.10em] text-text_royal_green">
              OUR{" "}
            </h1>
            <h1 className="max-sm:text-[70px] max-[540px]:w-[60%]  leading-[70px] sm:text-[70px] lg:text-[100px] scroll-m-10 max-[850px]:text-center  font-extrabold tracking-[.10em] text-text_royal_green">
              FACI{" "}
            </h1>
            <div className="flex items-center justify-end gap-2">
              <div className="w-[30px]">
                <img src="./Star.svg" alt="img" />
              </div>
              <h1 className="max-sm:text-[70px] sm:text-[70px] lg:text-[100px] scroll-m-20 font-extrabold tracking-[.10em]  text-text_royal_green">
                {" "}
                LITIES{" "}
              </h1>
            </div>
          </div>
          <div className="relative">
            <div className="max-[850px]:hidden">
              <img src="./barman.png" alt="img" />
            </div>
            <div className="absolute w-[80px] max-[850px]:hidden min-[850px]:block  top-[-40px] left-[-30px]">
              <img src="./label2.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="flex  items-end  mx-auto gap-[70px] w-[95%] mt-[40px] max-[600px]:flex-col  max-[600px]:gap-[50px]">
          <div className="relative w-[400px] max-[600px]:flex max-[600px]:items-start max-[600px]:w-[60%] min-w-[300px] max-[600px]:mx-auto">
            <img src="./kitchen.png" alt="img" />
            <div className="absolute w-[80px] top-[-40px] max-[850px]:block min-[850px]:hidden right-[-30px]">
              <img src="./label2.png" alt="img" />
            </div>
          </div>
          <p className="w-[300px] font-helvetica text-text_royal_green max-[600px]:w-[70%] max-[600px]:flex max-[600px]:justify-end ">
            Bank Hotel offers you a wide range of additional services and
            facilities. Visit our restaurant to try exclusive meals, book a
            conference hall to organize a business meeting, or relax in the
            art-bar.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
