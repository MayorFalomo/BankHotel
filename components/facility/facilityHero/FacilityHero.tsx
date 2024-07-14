import TextMask from "@/components/animation/TextMask";
import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

const FacilityHero = (props: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  return (
    <div className=" bg-regal_green">
      <div className=" py-[50px] relative">
        <div className="flex flex-col w-[95%]  mx-auto gap-[50px]">
          <h1 className="leading-[70px] relative z-[2]  2xl:text-[100px] lg:text-[80px] sm:text-[80px] text-[80px] max-[480px]:text-[70px] font-miracle text-golden_yellow">
            &ldquo;Safe&rdquo; restaurant{" "}
          </h1>
          <div
            ref={ref}
            className="flex items-start justify-between gap-[50px] my-[40px] max-[690px]:block"
          >
            <h2 className=" text-[28px] relative z-[2] font-miracle text-white_text">
              One Of A Kind{" "}
            </h2>
            <div className="relative  z-[2]  max-[690px]:flex max-[690px]:justify-end max-[690px]:items-end max-[690px]:w-[300px] max-[690px]:ml-auto  max-[690px]:mt-[50px]">
              <TextMask
                inView={inView}
                customStyles="w-[400px] max-[450px]:w-full leading-7 text-white_text font-helvetica"
              >
                Bank Hotel proudly welcomes you to the Safe Restaurant, a place
                where you will wish you could dine every day. The restaurant
                offers a unique menu developed by the team of professionals led
                by chef Mary-Ann Jones, the wine list with more than 250 items,
                the outstanding service, and the unforgettable atmosphere.
              </TextMask>
              {/* <p className="w-[400px] leading-7 text-white_text font-helvetica">
                Bank Hotel proudly welcomes you to the Safe Restaurant, a place
                where you will wish you could dine every day. The restaurant
                offers a unique menu developed by the team of professionals led
                by chef Mary-Ann Jones, the wine list with more than 250 items,
                the outstanding service, and the unforgettable atmosphere.
              </p> */}
              <img
                className="w-[70px] absolute top-[-60px] left-[-70px]  max-[690px]:hidden"
                src="../label.webp"
                alt="img"
              />
              <img
                className="w-[70px] absolute top-[-60px] right-0 hidden max-[690px]:flex "
                src="../label-logo.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] z-[1]"
          src="../grouped2.svg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default FacilityHero;
