import TextMask from "@/components/animation/TextMask";
import React from "react";
import { TbHexagon3D, TbNorthStar } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

type Props = {};

const RoomSection = (props: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const [ref1, inView2] = useInView({
    threshold: 0.3,
  });
  return (
    <div className="w-full h-full bg-regal_green border-[1px] border-transparent">
      <div className="min-[745px]:w-[80%] max-[745px]:w-[95%] mx-auto">
        <div className="w-full my-[100px] max-[500px]:my-[50px]">
          <div className="flex flex-col items-start gap-[50px]">
            <div
              ref={ref1}
              className="max-[500px]:hidden flex items-center  gap-[20px] py-2 px-[35px] rounded-[20px] w-fit  border-solid border-[1px] border-gray-400"
            >
              <p className="text-[#FCD043] text-[25px] ">{<TbNorthStar />} </p>
              <p className="text-white font-helvetica">1973 </p>
            </div>

            <div
              ref={ref}
              className="max-[800px]:flex-col  max-[800px]:flex min-[800px]:flex items-start  gap-[20px] justify-between w-full mt-[40px]"
            >
              <TextMask
                inView={inView}
                customStyles="min-[450px]:w-[400px] text-[28px] font-miracle  text-white "
              >
                {[
                  "All suites have a unique design",
                  "because we want our every quest",
                  "to feel special",
                ]}
              </TextMask>
              {/* <h3 className="min-[450px]:w-[400px] text-[28px] font-miracle leading-8 text-white [&:not(:first-child)]:mt-2">
                All suites have a unique design because we want our every quest
                to feel special{" "}
              </h3> */}
              <div className="min-[500px]:hidden flex items-center  gap-[20px] py-2 px-[35px] rounded-[20px] w-fit  border-solid border-[1px] border-gray-400">
                <p className="text-[#FCD043] text-[25px] ">
                  {<TbNorthStar />}{" "}
                </p>
                <p className="text-white font-helvetica">1973 </p>
              </div>
              <TextMask
                inView={inView}
                customStyles="min-[1100px]:w-[400px] max-[1100px]:w-[300px] max-[800px]:flex max-[800px]:justify-end max-[800px]:items-end max-[800px]:w-[50%] max-[800px]:ml-auto max-[500px]:w-[100%]  font-helvetica leading-8 scroll-m-20 text-[18px] font-normal tracking-tight text-white [&:not(:first-child)]:mt-2"
              >
                {[
                  " The Superior twin would perfectly match the needs of",
                  "those who plan to stay long. The bright and airy room",
                  "is equipped with superior soft Italian furniture. Large",
                  "windows open a beautiful view to the historical part of",
                  " the city. Contemporary interior design and comfortable",
                  "beds will make your stay cozy and delightful.",
                ]}
                {/* The Superior twin would perfectly match the needs of those who
                plan to stay long. The bright and airy room is equipped with
                superior soft Italian furniture. Large windows open a beautiful
                view to the historical part of the city. Contemporary interior
                design and comfortable beds will make your stay cozy and
                delightful. */}
              </TextMask>
            </div>
          </div>
        </div>

        <div className=" relative flex flex-col gap-[30px] w-full h-full items-start mt-[100px]">
          <p className="text-[26px] relative z-[5] leading-7 font-helvetica text-golden_yellow">
            Premier Standard{" "}
          </p>
          <div className="w-[100%] relative z-[5]  h-auto ">
            <img src="../comfort.png" alt="img" />
          </div>
          <img
            className="max-[450px]:flex min-[500px]:hidden absolute top-[-50px] left-0 z-[1] "
            src="../premierVector.svg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
