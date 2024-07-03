import React from "react";
import FadeInText from "@/components/animation/FadeInText";
import { useInView } from "react-intersection-observer";

type Props = {};

const OurService = (props: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  return (
    <div className=" relative z-[5] border-[1px] border-transparent bg-regal_green">
      <div className=" w-[95%] mx-auto">
        <div className="flex items-start justify-between gap-[20px]">
          <div className="max-[520px]:hidden">
            <img src="../nice-area.png" alt="img" />
          </div>
          <div className="">
            <img src="../lounge.png" alt="img" />
          </div>
        </div>
        <div ref={ref} className="flex flex-col gap-[40px] my-[50px]">
          <h2 className=" text-[28px] relative z-[2] font-miracle text-white_text">
            At Your Service{" "}
          </h2>
          <FadeInText
            inView={inView}
            style=" w-[400px] max-[520px]:w-full font-helvetica text-white_text leading-7"
          >
            The team of the Safe Restaurant aims to exceed all expectations of
            our guests. Our chef worked hard to develop a unique menu that
            features the best meals of the European cuisine that will match the
            tastes of the most demanding clients. Friendly and attentive waiters
            will ensure that you will enjoy your time in our restaurant.
          </FadeInText>
          {/* <p className=" w-[400px] max-[520px]:w-full font-helvetica text-white_text leading-7">
            The team of the Safe Restaurant aims to exceed all expectations of
            our guests. Our chef worked hard to develop a unique menu that
            features the best meals of the European cuisine that will match the
            tastes of the most demanding clients. Friendly and attentive waiters
            will ensure that you will enjoy your time in our restaurant.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default OurService;
