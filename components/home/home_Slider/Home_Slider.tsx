import React from "react";
import { TbNorthStar } from "react-icons/tb";

type Props = {};

function Home_Slider({}: Props) {
  return (
    <div className="bg-off-white border-2 border-transparent border-solid">
      <div className="h-full lg:my-[100px] max-md:my-[50px] ">
        <div className="flex justify-between items-start gap-[20px] mx-auto w-[95%] max-[760px]:flex-wrap max-[650px]:justify-center">
          <h1 className="text-start leading-[65px] flex flex-col gap-[10px] text-text_royal_green font-miracle scroll-m-10 text-[40px] font-medium tracking-[.10em] lg:text-[80px] xl:text-[80px]  max-xl:text-[50px] max-[760px]:text-center max-[760px]:w-full ">
            <span className="max-[760px]:w-[50%] max-[760px]:text-end ">
              {" "}
              ROOMS{" "}
            </span>{" "}
            <span className="max-[760px]:text-end"> & APARTMENTS </span>
          </h1>
          <p className=" w-[280px]  max-[760px]:w-[40%] font-helvetica text-text_royal_green text-#000 leading-7">
            ALL ROOM DECORATION WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE
            MATERIALS.{" "}
          </p>
        </div>
        <div className="w-[95%] mx-auto mt-[30px] lg:h-[100vh] border-2 border-red-600">
          <div className="flex items-end gap-[20px] h-full  justify-between  max-[750px]:flex-col-reverse border-2 border-yellow-600">
            <div className="flex flex-col items-start justify-between gap-3 max-lg:justify-end border-2 border-green-600 border-solid h-[70%]">
              <div className="w-full max-[1200px]:max-w-[100%] max-lg:hidden">
                <img src="./mirror-image.png" alt="img" />
              </div>
              <div className="xl:w-[80px] md:w-[60px] w-[40px] cursor-pointer">
                <img src="./btn-wavy-black.png" alt="img" />
              </div>
            </div>
            <div className="flex flex-col justify-between items-start gap-[30px] h-[70%] w-[30%] max-lg:justify-center border-2 border-blue-600">
              <div className="flex items-center  gap-[20px] py-2 px-[35px] rounded-[20px] w-fit max-lg:hidden border-solid border-2 border-gray-400">
                <p className="text-[#FCD043] text-[25px] ">
                  {<TbNorthStar />}{" "}
                </p>
                <p>1973 </p>
              </div>
              <section className="flex flex-col items-start justify-evenly  gap-[25px]">
                <h1 className="text-start text-text_royal_green scroll-m-20 text-2xl font-semibold tracking-tight">
                  Superior Twin
                </h1>
                <p className="leading-7 text-text_royal_green font-helvetica  [&:not(:first-child)]:mt-2">
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
            <p className="hidden max-[750px]:flex items-center gap-[20px]">
              <span>01</span>
              <span>/</span>
              <span>04</span>
            </p>
            <div className="w-[50%] min-w-[400px] max-w-[550px] max-[750px]:max-w-[100%]  max-[750px]:w-[100%] border-2 border-red-500">
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
