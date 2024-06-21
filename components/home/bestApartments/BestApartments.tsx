import { AnimatePresence, motion, Variant } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
interface IVariant {
  [key: string]: Variant;
}

type Props = {};

const BestApartments: React.FC = (props: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

  return (
    <div className="">
      <div className="h-[90vh]">
        <div ref={ref} className="h-[100%] w-full relative ">
          <img
            className="w-full mx-auto h-full object-cover object-left"
            src="./best-room.webp"
            alt="img"
          />
          <h1 className="absolute left-[30px] top-[50px] scroll-m-20 xl:text-7xl text-[60px] max-[500px]:text-[50px] font-normal tracking-tight first:mt-0 text-golden_yellow">
            BEST APARTMENTS{" "}
          </h1>
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            src="./Vector16.svg"
            alt="img"
          />
          <p className="absolute min-[500px]:top-1/2 min-[500px]:left-[30px] transform -translate-y-1/2  max-[500px]:bottom-[10px]  max-[500px]:right-[10px] text-golden_yellow font-helvetica text-[20px] w-[300px] ">
            All room decoration was made with ecological certified and safe
            materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestApartments;
