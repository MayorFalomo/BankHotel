import React from "react";

type Props = {};

const About_us = (props: Props) => {
  return (
    <div className="bg-regal_green w-full h-full border-2 border-transparent  border-solid ">
      <div className="w-[95%] my-[70px] mx-auto ">
        <div className="relative h-[100%] flex flex-col justify-center items-center">
          <div className="relative flex justify-between h-[80%]">
            <div className="relative w-full h-full">
              <div className="flex h-full gap-[30px] items-end">
                <img
                  className="w-[40%] mt-[40px] h-full relative z-[1]"
                  src="./bigger-copenhagen.png"
                  alt="img"
                />
                <div className="text-white_text">
                  <h2 className="font-miracle scroll-m-20 text-2xl font-semibold tracking-[.10em]">
                    High Quality{" "}
                  </h2>
                  <p className=" w-[60%] leading-7 [&:not(:first-child)]: mt-3 font-helvetica">
                    The five-star Bank Hotel was reopened to visitors in 2016.
                    The building was renovated and modernized to meet the
                    expectations of the most demanding guests. We offer
                    luxurious rooms, numerous facilities, and exceptional
                    service.{" "}
                  </p>
                </div>
              </div>
              <div className="absolute top-[-20px] left-[-20px] w-[90%] z-[-1px] ">
                <img src="./Ellipse.png" alt="img" />
              </div>
            </div>
            <div className="flex flex-col gap-[10px] font-miracle absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-[.10em] lg:text-8xl text-golden_yellow">
                ABOUT
              </h1>
              <h1 className="text-end text-white_text scroll-m-20 text-4xl font-extrabold tracking-[.10em] lg:text-8xl">
                US
              </h1>
            </div>
            <div className="relative">
              <img
                className="mt-[40px]"
                src="./space-copenhagen.png"
                alt="img"
              />
              <div className="absolute h-[100%] w-[1px] bg-[#3F5148] top-0 left-[-150px]"></div>
              <div className="absolute w-[50px] top-[0px] left-[-45px]">
                <img src="./label.png" alt="img" />
              </div>
              <div className="absolute w-[120px] bottom-[20px] left-[35px]">
                <img src="./button-default.png" alt="img" />
              </div>
            </div>
            <div className="absolute w-[65%] top-[-20px] right-[0px]">
              <img src="./Vector_14.png" alt="img" />
            </div>
          </div>
          <div className="absolute h-[100%] z-20 w-[1px] bg-[#3F5148] top-0 left-[-140px]"></div>
        </div>
      </div>
    </div>
  );
};

export default About_us;
