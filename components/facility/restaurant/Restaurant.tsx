import BlurText from "@/components/animation/BlurText";
import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

const Restaurant = (props: Props) => {
  const [ref, inView] = useInView();

  return (
    <div className=" bg-regal_green border-[1px] border-transparent">
      <div className="w-[95%] my-[80px] mx-auto">
        <div className="flex items-start justify-between gap-[50px] max-[700px]:flex-col-reverse">
          <div className="flex flex-col gap-[30px] w-[400px] max-[700px]:w-[60%]">
            <div ref={ref}>
              <img src="../atrium.png" alt="img" />
            </div>
            <BlurText
              inview={inView}
              styling=" w-[60%] text-golden_yellow capitalize max-[700px]:w-full"
            >
              All room decoration was made with ecological certified and safe
              materials.{" "}
            </BlurText>
          </div>
          <div className=" flex flex-col gap-[70px] w-[60%]  max-[700px]:w-full ">
            <h2 className=" w-[500px] max-[900px]:w-full text-[28px] relative z-[2] font-miracle text-white_text  max-[700px]:w-[400px] max-[700px]:ml-auto">
              Once you try our cuisine and service, you shall never want to
              visit another restaurant.{" "}
            </h2>
            <div className="w-full max-[700px]:w-[90%]">
              <img src="../comfy-area.png" alt="img" />
            </div>
            <div className="flex flex-col gap-[10px] items-start max-[700px]:w-[400px]  max-[500px]:w-[95%] min-[700px]:ml-auto">
              <h2 className=" font-miracle capitalize text-white_text text-[32px]">
                {" "}
                Spend your time with us
              </h2>
              <p className="min-[600px]:w-[400px] max-[600px]:w-[95%] text-white_text leading-7 font-helvetica">
                If you are looking for an exclusive place to have a romantic
                dinner, organize a business meeting, or spend an enjoyable
                evening with friends, visit Safe Restaurant in Bank Hotel. With
                our delicious meals, unique interior design, and atmosphere of
                comfort and exquisiteness you shall never want to go to a
                different restaurant.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
