import React from "react";
import { TbStar } from "react-icons/tb";

type Props = {};

function Facilities({}: Props) {
  return (
    <div className="bg-off-white w-[100%] border-2 border-transparent border-solid ">
      <div className="mt-[100px] ">
        <div className="flex justify-between items-start gap-[20px] mx-auto w-[95%] ">
          <p className="flex flex-col gap-[5px]">
            <span>ART & CONGRESS</span> <span>HALL </span>{" "}
          </p>
          <div className="font-miracle w-[520px] max-w-[520px]">
            <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-[.10em] lg:text-8xl text-text_royal_green">
              OUR{" "}
            </h1>
            <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-[.10em] lg:text-8xl  text-text_royal_green">
              FACI{" "}
            </h1>
            <div className="flex items-center justify-end gap-2">
              <div className="w-[30px]">
                <img src="./Star.svg" alt="img" />
              </div>
              <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-[.10em] lg:text-8xl  text-text_royal_green">
                {" "}
                LITIES{" "}
              </h1>
            </div>
          </div>
          <div className="relative">
            <div className="">
              <img src="./barman.png" alt="img" />
            </div>
            <div className="absolute w-[80px] top-[-40px] left-[-30px]">
              <img src="./label2.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="flex items-end mx-auto gap-[50px] w-[95%] mt-[40px]">
          <div className="w-[400px]">
            <img src="./kitchen.png" alt="img" />
          </div>
          <p className="w-[300px] text-text_royal_green">
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
