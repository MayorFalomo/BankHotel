import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Gallery: React.FC = (props: Props) => {
  return (
    <div className="bg-regal_green  border-2 border-solid border-transparent ">
      <div className="relative  w-[95%] mx-auto my-[100px] flex flex-col items-center gap-[40px]  border-yellow-600 ">
        <div className="">
          <p className="absolute  left-2 top-0 flex flex-col gap-[5px] items-start justify-start font-helvetica text-white leading-4">
            <span> ART & CONGRESS</span> <span>HALL </span>{" "}
          </p>
          <div className="absolute top-1/3 left-2 transform  -translate-y-1/2 ">
            <img src="./mirror-iron-board.png" alt="img" />
          </div>

          <div className="absolute top-1/2 right-2 transform  -translate-y-1/2 ">
            <img src="./common-area.png" alt="img" />
          </div>
          <div className="flex flex-col gap-[10px]  items-center justify-center">
            <div className="w-[100px]">
              <img src="./label-logo.png" alt="img" />
            </div>
            <h1 className="text-golden_yellow text-8xl mt-[30px]">
              OUR GALLERY{" "}
            </h1>
            <p className="w-[370px] leading-7 [&:not(:first-child)]:mt-6 font-helvetica text-white text-center ">
              Explore our spacious rooms with the gorgeous view to the
              historical part of the city. Each room has an exclusive interior
              design decorated with modern art pieces that will make your stay
              unforgettable.{" "}
            </p>
          </div>
          <div className="max-w-[600px] w-[600px] mt-[30px]">
            <img src="./glass-fireplace.png" alt="img" />
          </div>
          <div className="mt-[50px]">
            <div className="flex items-center justify-start gap-[20px]">
              <div className="w-[40px]">
                <img src="./polygon.png" alt="alt" />
              </div>
              <p className="flex flex-col items-start gap-[5px] font-helvetica italic  text-white">
                <span>It is our pleasure to meet your most </span>{" "}
                <span>unrealistic expectations </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-2 bottom-[0px] w-[200px]">
          <img src="./cheng-chung.png" alt="img" />
        </div>
        <div className="absolute right-0 bottom-[-170px] z-[5] w-[300px]">
          <img src="./3mirrors.png" alt="img" />
        </div>
      </div>
      <div className="my-[100px] overflow-y-hidden">
        <MarqueeSlider />
        <MarqueeSlider />
      </div>
    </div>
  );
};

const MarqueeSlider = () => {
  return (
    <Marquee
      autoFill
      style={{ display: "flex", gap: "20px", overflow: "hidden" }}
    >
      <h1 className="font-miracle scroll-m-20 text-[#ffffff19]  font-light -tracking-[.050em] text-8xl text-#fff">
        Bank hotel{" "}
      </h1>
      <h1 className="font-miracle scroll-m-20 text-[#fff]  font-light -tracking-[.050em] text-8xl text-#fff">
        Bank__hotel{" "}
      </h1>
      <h1 className="font-miracle scroll-m-20  text-[#ffffff19] font-light -tracking-[.050em] text-8xl text-#fff">
        Bank hotel{" "}
      </h1>
      <h1 className="font-miracle scroll-m-20 text-[#fff]  font-light -tracking-[.050em] text-8xl text-#fff">
        Bank__hotel{" "}
      </h1>
      <h1 className="font-miracle scroll-m-20 text-[#fff]  font-light -tracking-[.050em] text-8xl text-#fff">
        Bank hotel{" "}
      </h1>
    </Marquee>
  );
};

export default Gallery;
