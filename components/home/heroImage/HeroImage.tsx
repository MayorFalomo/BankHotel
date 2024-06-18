import React from "react";
import { TbAngle, TbArrowUp } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { motion, Variant } from "framer-motion";
type Props = {};

type Variants = {
  [key: string]: Variant;
};

function HeroImage({}: Props) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const heading = "Full Stack Web Dev";
  const letters = Array.from(heading);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.025 * i,
      },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="bg-regal_green">
      <div className="w-[95%] relative mx-auto">
        <div className="relative w-full overflow-hidden h-full ">
          <img
            className={
              inView ? `transform transition duration-1000 scale-105` : ""
            }
            src="./heroImage.webp"
            alt="img"
          />
          <div className="flex items-center absolute max-[900px]:bottom-0 min-[900px]:top-0 right-0 font-helvetica">
            <button className="sm:flex items-center justify-around gap-[10px] hidden sm:w-[180px] lg:w-[200px] sm:h-[70px] max-lg:h-[80px] xl:h-[90px] text-white_text  bg-hero-btn hover:bg-hover-hero-btn transition ease delay-450 backdrop-blur-[20px] opacity-[0.9]">
              CHECK IN{" "}
              <span className="text-golden_yellow">{<FaAngleDown />} </span>{" "}
            </button>
            <span className="h-[30px] w-[1px] bg-white opacity-[0.4]"></span>

            <button className="sm:flex items-center justify-around gap-[10px] hidden sm:w-[180px] lg:w-[200px] sm:h-[70px] max-lg:h-[80px] xl:h-[90px] text-white_text  bg-hero-btn hover:bg-hover-hero-btn transition ease delay-450 backdrop-blur-[20px] opacity-[0.9]">
              CHECK OUT{" "}
              <span className="text-golden_yellow">{<FaAngleDown />}</span>{" "}
            </button>
            <button className="sm:flex items-center justify-around gap-[10px] hidden sm:w-[190px] lg:w-[200px] sm:h-[70px] max-lg:h-[80px] xl:h-[90px]  max-sm:text-[15px] md:text-[16px] bg-golden_yellow hover:bg-hover_golden_yellow hover:text-white backdrop-blur-[20px] transition ease delay-450 opacity-[0.9]">
              BOOK ROOM
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="flex items-center justify-between gap-3 mt-[20px] text-white_text font-helvetica "
        >
          <p className="leading-7 text-golden_yellow underline underline-offset-1">
            +234 781 52 952
          </p>
          <p className="leading-7 ">ART & CONGRESS </p>
        </div>
        <div className="flex items-center justify-between gap-3 text-white_text font-helvetica ">
          <p className="leading-7 underline underline-offset-1 ">
            6A - ANTHONY HOROWITZ WAY, LEKKI{" "}
          </p>
          <p className="leading-7">HALL</p>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
