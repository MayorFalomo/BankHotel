import React from "react";

type Props = {};

const About_us = (props: Props) => {
  return (
    <div className="bg-regal_green w-full h-full border-2 border-transparent  border-solid ">
      <div className="w-[95%] my-[70px] mx-auto max-[750px]:my-[100px] ">
        <div className="relative h-[100%] flex flex-col justify-center items-center  ">
          <div className="relative flex justify-between h-[80%]">
            <div className="relative w-full h-full">
              <div className="flex h-full gap-[30px] items-end max-[750px]:flex-col max-[650px]:items-center">
                <div className="w-[100%] mt-[40px] h-full relative z-[1] max-[650px]:w-[100%]">
                  <img src="./bigger-copenhagen.png" alt="img" />
                </div>
                <div className="text-white_text">
                  <h2 className="font-miracle scroll-m-20 text-2xl font-semibold tracking-[.10em]">
                    High Quality{" "}
                  </h2>
                  <p className="w-[100%] md:[80%]  max-xl:w-[90%] leading-7 [&:not(:first-child)]: mt-3 lg:text-[17px] sm:text-[16px] max-sm:text-[14px] font-helvetica">
                    The five-star Bank Hotel was reopened to visitors in 2016.
                    The building was renovated and modernized to meet the
                    expectations of the most demanding guests. We offer
                    luxurious rooms, numerous facilities, and exceptional
                    service.{" "}
                  </p>
                </div>
              </div>
              <div className="absolute top-[-10px] xl:left-[250px] lg:left-[220px] w-[100%] z-[-1px] ">
                <img src="./grouped.png" alt="img" />
              </div>
              {/* <div className="absolute top-[-20px] left-[-20px] w-[90%] z-[-1px] ">
                <img src="./Ellipse.png" alt="img" />
              </div> */}
            </div>
            <div className="flex flex-col  font-miracle absolute z-10 top-1/3 max-[750px]:left-[50%]  md:left-[70%] lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-[750px]:flex max-[750px]:flex-row  max-[750px]:gap-[25px] max-[750px]:top-[-10px] ">
              <h1 className="min-[900px]:text-[80px] xl:text-[100px] sm:text-[70px] max-sm:text-[60px]  scroll-m-20  font-extrabold tracking-[.10em]  text-golden_yellow">
                ABOUT
              </h1>
              <h1 className="lg:text-[100px] sm:text-[70px] max-sm:text-[60px]  text-end text-white_text scroll-m-20 font-extrabold tracking-[.10em]">
                US
              </h1>
            </div>
            <div className="relative min-md:flex max-md:justify-end max-lg:hidden">
              <div className="mt-[40px] sm:w-[70%] lg:w-[100%]">
                <img src="./space-copenhagen.png" alt="img" />
              </div>
              {/* <div className="absolute h-[100%] w-[1px] bg-[#3F5148] top-0 left-[-150px]"></div> */}
              <div className="absolute w-[50px] top-[0px] left-[-45px]">
                <img src="./label.png" alt="img" />
              </div>
              <div className="absolute xl:w-[120px] max-sm:w-[80px] sm:w-[90px] xl:bottom-[80px] lg:bottom-[-40px] md:bottom-[-60px] left-[35px]">
                <img src="./button-default.png" alt="img" />
              </div>
            </div>
            {/* <div className="absolute w-[65%] top-[-20px] right-[0px]">
              <img src="./Vector_14.png" alt="img" />
            </div> */}
          </div>
          {/* <div className="absolute h-[100%] z-20 w-[1px] bg-[#3F5148] top-0 left-[-140px]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default About_us;
