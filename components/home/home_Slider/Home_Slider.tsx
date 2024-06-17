import React, { useState } from "react";
import { TbNorthStar } from "react-icons/tb";
import Image1 from "../../../public/mirror-image.png";
import Image2 from "../../../public/bigger-copenhagen.png";
import Image3 from "../../../public/space-copenhagen.png";
import Image4 from "../../../public/cheng-chung.png";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import { wrap } from "@popmotion/popcorn";
import { StaticImageData } from "next/image";

type Props = {};

interface ISlider {
  id: number;
  img: string;
  img2: string;
  title: string;
  text: string;
}

const sliderVariants: any = {
  incoming: (direction: any) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),

  active: { x: 0, scale: 1, opacity: 1 },

  exit: (direction: any) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

function Home_Slider(props: any) {
  const [sliderContent, setSliderContent] = useState<ISlider[]>([
    {
      id: 1,
      img: "./mirror-image.png",
      img2: "./room-image.png",
      title: "Superior Twin",
      text:
        "The Superior twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city. Stylish interior design and comfortable beds will make your stay cozy and pleasant.",
    },
    {
      id: 2,
      img: "./bigger-copenhagen.png",
      img2: "./kitchen.png",
      title: "Luxury Rooms",
      text:
        "The lesser twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city. Stylish interior design and comfortable beds will make your stay cozy and pleasant.",
    },
    {
      id: 3,
      img: "./cheng-chung.png",
      img2: "./bigger-copenhagen.png",

      title: "Fancy Rooms",
      text:
        "The bigger twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city. Stylish interior design and comfortable beds will make your stay cozy and pleasant.",
    },
    {
      id: 4,
      img: "./space-copenhagen.png",
      img2: "./small_apart.png",
      title: "Luxury Rooms",
      text:
        "The Superior twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city. Stylish interior design and comfortable beds will make your stay cozy and pleasant.",
    },
  ]);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const index = wrap(0, sliderContent.length, imageCount);

  const dragEndHandler = (dragInfo: any) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  return (
    <AnimatePresence>
      <div className="bg-off-white h-full relative border-[1px] border-transparent border-solid">
        <div className="h-full lg:my-[100px] max-md:my-[50px] ">
          <div className="flex justify-between items-start gap-[20px]  mx-auto mt-[50px] w-[95%] max-[760px]:flex-wrap max-[650px]:justify-center">
            <h1 className="text-start leading-[65px] flex flex-col gap-[10px] text-text_royal_green font-miracle scroll-m-10 text-[40px] font-medium tracking-[.10em] lg:text-[80px] xl:text-[80px]  max-xl:text-[50px]  max-[500px]:text-[30px]  max-[500px]:leading-[35px] max-[760px]:text-center max-[760px]:w-full ">
              <span className="max-[760px]:w-[50%] max-[760px]:text-end ">
                {" "}
                ROOMS{" "}
              </span>{" "}
              <span className="max-[760px]:text-end"> & APARTMENTS </span>
            </h1>
            <p className=" w-[280px]  max-[760px]:w-[95%] font-helvetica text-text_royal_green text-#000 leading-7">
              ALL ROOM DECORATION WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE
              MATERIALS.{" "}
            </p>
          </div>
          <div className="w-[95%] mx-auto mt-[30px] lg:h-[100vh]  ">
            <div className="relative  flex items-end gap-[20px] h-full  justify-between  max-[750px]:flex-col-reverse">
              <div className="relative flex w-[350px] max-w-[400px]   flex-col items-start justify-between gap-3 max-lg:justify-end  h-[80%]">
                <div className="absolute top-0 left-0 w-[340px] max-[1200px]:max-w-[100%] max-lg:hidden">
                  <motion.img
                    key={imageCount}
                    src={sliderContent[index].img}
                    className="w-full h-full"
                    initial={{
                      clipPath: "inset(0 0 0 100%)",
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                      clipPath: "inset(0 0 0 0%)",
                    }}
                    exit={{
                      opacity: 0,
                      clipPath: "inset(0 0 0 0%)",
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.56, 0.03, 0.12, 1.04],
                    }}
                  />
                </div>
                <div
                  onClick={() => swipeToImage(1)}
                  className="absolute bottom-0 left-0 xl:w-[80px] md:w-[60px] w-[40px] cursor-pointer max-[750px]:hidden flex"
                >
                  <img src="./btn-wavy-black.png" alt="img" />
                </div>
              </div>
              <div className=" flex flex-col justify-between items-start gap-[30px] h-[70%] w-[30%] max-lg:justify-center  max-[750px]:w-full">
                <div className="flex items-center  gap-[20px] py-2 px-[35px] rounded-[20px] w-fit max-lg:hidden border-solid border-2 border-gray-400">
                  <p className="text-[#FCD043] text-[25px] ">
                    {<TbNorthStar />}{" "}
                  </p>
                  <p>1973 </p>
                </div>
                <section className="flex flex-col h-full w-full items-start overflow-hidden  justify-end gap-[25px] max-[750px]:flex  max-[750px]:flex-column-reverse max-[750px]:items-center">
                  <div className="w-full h-[220px] overflow-hidden relative  max-[750px]:flex max-[750px]:flex-row-reverse  justify-between items-center">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={imageCount}
                        custom={direction}
                        variants={sliderVariants}
                        initial="incoming"
                        animate="active"
                        exit="exit"
                        transition={sliderTransition}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={dragEndHandler}
                        className="absolute flex flex-col gap-[20px] w-full h-full"
                      >
                        <h1 className="text-start max-[750px]:flex text-text_royal_green scroll-m-20 text-2xl font-semibold tracking-tight">
                          {sliderContent[index].title}
                        </h1>
                        <p className="leading-7 text-text_royal_green font-helvetica  [&:not(:first-child)]:mt-2">
                          {sliderContent[index].text}
                        </p>
                        <div className="">
                          <p className="max-[750px]:hidden flex">
                            <span>
                              0{sliderContent[index].id} / 0
                              {sliderContent.length}
                            </span>
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* <div>
                      <p className="max-[750px]:hidden flex">
                        <span>
                          0{sliderContent[slideIndex].id} / 0
                          {sliderContent.length}
                        </span>
                      </p>
                    </div> */}

                    <div className=" hidden xl:w-[80px] max-xl:w-[60px] cursor-pointer max-[750px]:flex">
                      <img
                        className="w-full"
                        src="./btn-wavy-black.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </section>
              </div>
              <p className="hidden max-[750px]:flex items-center gap-[20px]">
                <span>01</span>
                <span>/</span>
                <span>04</span>
              </p>
              <div className="relative w-[500px] h-full ">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2  w-[50%] min-w-[400px] max-w-[550px] max-[750px]:max-w-[100%]  max-[750px]:min-w-[100%] ">
                  <motion.img
                    key={imageCount}
                    src={sliderContent[index].img2}
                    initial={{
                      clipPath: "inset(0 0 0 100%)",
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                      clipPath: "inset(0 0 0 0%)",
                    }}
                    exit={{
                      opacity: 0,
                      clipPath: "inset(0% 0 0 0)",
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.56, 0.03, 0.12, 1.04],
                    }}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%] mx-auto opacity-10 h-[1px] bg-[#313F38] "></div>
      </div>
    </AnimatePresence>
  );
}

// const Slider = ({ text }: any) =>
//   // text: string,
//   // img: StaticImageData,
//   // title: string,
//   // id: number
//   {
//     console.log(text, "This is content");
//     // console.log(text.title, "title");

//     return (
//       <motion.div>
//         <h1>{text} </h1>
//       </motion.div>
//     );
//   };

export default Home_Slider;
