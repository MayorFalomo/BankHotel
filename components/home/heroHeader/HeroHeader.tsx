import SplitText from "@/components/animation/SplitText";
import Image from "next/image";
import React, { ReactNode, useRef } from "react";
import { GiGooeyEyedSun } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";
import { motion, Variant } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Variants {
  [key: string]: Variant;
}

const HeroHeader = () => {
  const translate: Variants = {
    initial: {
      y: "100%",
      opacity: 0,
      // transition: {
      //   duration: 0.5,
      //   ease: [0.76, 0, 0.24, 1],
      // },
    },
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: i[0],
      },
    }),
    exit: (i) => ({
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        delay: i[0],
      },
    }),
  };

  const heroHeader = ["Bank", "Hotel"];

  const getChars: (title: string) => ReactNode = (title: string) => {
    let chars: ReactNode[] = [];
    title.split("").forEach((char: string, index: number) => {
      chars.push(
        <motion.span
          key={index}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          custom={[index * 0.02, (title.length - index) * 0.01]}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className="font-helvetica w-full bg-[#313F38]">
      <div className="flex justify-between items-center gap-[30px] w-[95%] m-auto text-white max-[900px]:items-center max-[760px]:flex-col">
        <div className="flex flex-col gap-[20px] w-full ">
          <div className="flex items-start max-[760px]:justify-center gap-1 overflow-hidden">
            {heroHeader.map((bank: string, index) => {
              return (
                <h1
                  className={
                    `${bank}` == "Hotel"
                      ? "font-miracle flex items-center scroll-m-20 text-golden_yellow  font-light -tracking-tight  border-solid 2xl:text-[150px] lg:text-[120px] sm:text-[100px] max-[330px]:text-[50px] max-[760px]:justify-center text-[70px]"
                      : "font-miracle flex items-center scroll-m-20 text-[#fff]  font-light -tracking-tight  border-solid 2xl:text-[150px] lg:text-[120px] sm:text-[100px] max-[330px]:text-[50px] max-[760px]:justify-center text-[70px]"
                  }
                  key={index}
                >
                  {" "}
                  {getChars(bank)}{" "}
                </h1>
              );
            })}
          </div>
          {/* <h1 className="font-miracle flex items-center scroll-m-20 text-[#fff]  font-light -tracking-tight  border-solid 2xl:text-[150px] lg:text-[120px] sm:text-[100px] max-[330px]:text-[50px] max-[760px]:justify-center text-[70px] ">
            Bank <span className="font-miracle text-golden_yellow">Hotel </span>{" "}
          </h1> */}
          {/* <h1 className="font-miracle flex items-center scroll-m-20 text-[#fff]  font-light -tracking-tight  border-solid 2xl:text-[150px] lg:text-[120px] sm:text-[100px] max-[330px]:text-[50px] max-[760px]:justify-center text-[70px] ">
            Bank <span className="font-miracle text-golden_yellow">Hotel </span>{" "}
          </h1> */}
          <ul className="flex items-center text-white-100 gap-[7px] text-golden_yellow font-helvetica my-6 list-none [&>li]:mt-2 text-[17px] max-sm:text-[15px] md:text-[16px] max-[760px]:flex-wrap max-[760px]:justify-center">
            <li>ROOMS //</li>
            <li>RESTAURANT //</li>
            <li>CONGRESS HALL //</li>
            <li>WINE BAR //</li>
          </ul>
        </div>
        <div className="flex gap-[0px] w-full justify-between min-[900px]:flex-col min-[900px]:gap-2">
          <div className="flex items-center justify-between mb-[80px] w-full  max-[900px]:w-fit max-[800px]:flex-start ">
            <button className="flex items-center justify-around gap-[10px] rounded-[30px] py-2 xl:px-[35px] md:px-[30px] max-[900px]:hidden border-[1px] border-gray-400">
              <span className="text-[#FCD043] text-[25px] min-lg:text-[25px] min-[100px]:text-[18px] min-[650px]:text-[20px] ">
                {<TbNorthStar />}{" "}
              </span>
              <span className="">1973 </span>
            </button>
            <div className="cursor-pointer min-[100px]:w-[30px] min-[650px]:w-[40px] min-[1200px]:w-[50px] max-[800px]:hidden">
              <AnchorLink href="#things">
                <img src="/wavy.webp" alt="img" />
              </AnchorLink>
            </div>
          </div>
          {/* <SplitText
            text=" The luxurious hotel in the most beautiful European city with an
            exclusive restaurant, conference-hall, and art-bar."
          /> */}

          <p className="font-helvetica tracking-[.05em] xl:w-[50%] max-md:w-[100%] max-[800px]:w-[100%] max-[760px]:text-center max-[900px]:ml-[5px]">
            The luxurious hotel in the most beautiful European city with an
            exclusive restaurant, conference-hall, and art-bar.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
