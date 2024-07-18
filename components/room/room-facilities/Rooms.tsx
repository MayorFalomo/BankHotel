import FadeInText from "@/components/animation/FadeInText";
import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

const RoomFacilities = (props: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const [ref1, inView1] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="bg-off-white border-2 border-transparent">
      <div className="max-[890px]:flex-col  flex items-start justify-between gap-[30px] w-[80%] max-[1100px]:w-[95%] mx-auto mt-[100px]">
        <div className="flex flex-col gap-[30px] 2xl:w-[500px] min-lg:w-full min-[890px]:w-[400px] max-[890px]:w-full">
          <div className="relative  w-full">
            <div className="w-full">
              <img src="../bathroom.png" alt="img" />
            </div>
            <img
              className="absolute right-[-80px] top-[-70px] w-[100px] max-[890px]:hidden"
              src="../label.png"
              alt="img"
            />
          </div>
          <h3 ref={ref} className="font-miracle leading-8 text-[30px]">
            Superior Twin{" "}
          </h3>
          <FadeInText
            inView={inView}
            style="max-[890px]:w-[80%] font-helvetica text-text_royal_green leading-8 scroll-m-20 text-[18px] font-normal tracking-tight[&:not(:first-child)]:mt-2"
          >
            All rooms in Bank Hotel have a special charm achieved through a
            combination of modern functional design and original 20th century
            layout.{" "}
          </FadeInText>
        </div>

        <div className="flex flex-col gap-[30px] 2xl:w-[500px] min-[890px]:w-[400px]">
          <div className="w-full">
            <img src="../3mirror-2.png" alt="img" />
          </div>
          <div ref={ref1} className="relative max-[890px]:w-[80%] mt-[20px]">
            <FadeInText
              inView={inView1}
              style=" font-helvetica text-text_royal_green leading-8 scroll-m-20 text-[18px] font-normal tracking-tight[&:not(:first-child)]:mt-2"
            >
              The Superior twin includes two functional zones: a living room
              with the best Italian furniture, and an isolated cozy bedroom with
              a large bed. Here, you will find space both for work and
              comfortable rest. Hotel offers supreme comfort and outstanding
              24-hour room service to make sure that the time you spend here is
              enjoyable and pleasant.{" "}
            </FadeInText>
            <img
              className="absolute right-[-50px] top-[-50px] w-[70px] min-[890px]:hidden"
              src="../label.png"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] max-[1100px]:w-[95%] mx-auto mt-[50px]">
        <div className="py-2 px-[35px] rounded-[20px] w-fit  border-solid border-[1px] border-gray-400">
          <p className="leading-2 font-helvetica">BOOK ROOM </p>
        </div>
      </div>
    </div>
  );
};

export default RoomFacilities;
