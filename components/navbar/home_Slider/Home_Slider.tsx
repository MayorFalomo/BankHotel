import React from "react";
import { TbNorthStar } from "react-icons/tb";

type Props = {};

function Home_Slider({}: Props) {
  return (
    <div className="bg-off-white border-2 border-transparent border-solid">
      <div className="h-full my-[100px]">
        <div className="flex justify-between items-start gap-[20px] mx-auto w-[95%]">
          <h1 className="text-start text-text_royal_green font-miracle scroll-m-20 text-4xl font-extrabold tracking-[.10em] lg:text-8xl">
            <span> ROOMS </span> <span className="block"> & APARTMENTS </span>
          </h1>
          <p className="font-helvetica text-text_royal_green w-[280px] text-#000 leading-7">
            ALL ROOM DECORATION WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE
            MATERIALS.{" "}
          </p>
        </div>
        <div className="w-[95%] mx-auto">
          <div className="flex items-end gap-[20px] h-[100vh]  justify-between">
            <div className="flex flex-col items-start justify-between gap-3 border-solid h-[70%]">
              <div>
                <img src="./mirror-image.png" alt="img" />
              </div>
              <div className="w-[100px]">
                <img src="./btn-wavy-black.png" alt="img" />
              </div>
            </div>
            <div className="flex flex-col justify-between items-start h-[70%] w-[30%]">
              <div className="flex items-center  gap-[20px] py-2 px-[35px] rounded-[20px] w-fit border-solid border-2 border-gray-400">
                <p className="text-[#FCD043] text-[25px] ">
                  {<TbNorthStar />}{" "}
                </p>
                <p>1973 </p>
              </div>
              <section className="flex flex-col items-start justify-evenly  gap-[25px]">
                <h1 className="text-start text-text_royal_green scroll-m-20 text-2xl font-semibold tracking-tight">
                  Superior Twin
                </h1>
                <p className="leading-7 text-text_royal_green  [&:not(:first-child)]:mt-2">
                  The Superior twin is perfect for those who plan to stay long.
                  The spacious and bright room is equipped with deluxe Italian
                  furniture and has a beautiful view to the historical part of
                  the city. Stylish interior design and comfortable beds will
                  make your stay cozy and pleasant.
                </p>
                <p>
                  <span>01 / 04</span>
                </p>
              </section>
            </div>
            <div className="w-[40%] max-w-[600px]">
              <img src="./room-image.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto opacity-10 h-[1px] bg-[#313F38] "></div>
    </div>
  );
}

export default Home_Slider;
