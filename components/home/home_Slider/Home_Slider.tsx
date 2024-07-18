import React, { useState } from "react";
import { TbNorthStar } from "react-icons/tb";
import { AnimatePresence, PanInfo, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { wrap } from "@popmotion/popcorn";
import FadeInText from "@/components/animation/FadeInText";
import FadeInTextHeader from "@/components/animation/FadeInTextHeader";

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
      img: "./mirror-image.webp",
      img2: "./room-image.webp",
      title: "Superior Twin",
      text:
        "The Superior twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city. Stylish interior design and comfortable beds will make your stay cozy and pleasant.",
    },
    {
      id: 2,
      img: "./bigger-copenhagen.webp",
      img2: "./common-area.webp",
      title: "Luxury Rooms",
      text:
        "The lesser twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city. Stylish interior design and comfortable beds will make your stay cozy and pleasant.",
    },
    {
      id: 3,
      img: "./cheng-chung.webp",
      img2: "./bigger-copenhagen.webp",

      title: "Fancy Rooms",
      text:
        "The bigger twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city. Stylish interior design and comfortable beds will make your stay cozy and pleasant.",
    },
    {
      id: 4,
      img: "./space-copenhagen.webp",
      img2: "./small_apart.webp",
      title: "Luxury Rooms",
      text:
        "The Superior twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city. Stylish interior design and comfortable beds will make your stay cozy and pleasant.",
    },
  ]);

  const [[imageCount, direction], setImageCount] = useState<[number, number]>([
    0,
    0,
  ]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX !== null) {
      const touchEndX = event.changedTouches[0].clientX;
      const swipeThreshold = 50;
      if (touchEndX - touchStartX > swipeThreshold) {
        swipeToImage(-1);
      } else if (touchEndX - touchStartX < -swipeThreshold) {
        swipeToImage(1);
      }
      setTouchStartX(null);
    }
  };

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const index = wrap(0, sliderContent.length, imageCount);

  const dragEndHandler = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const draggedDistance = info.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  // const dragEndHandler = (dragInfo: any) => {
  //   const draggedDistance = dragInfo.offset.x;
  //   const swipeThreshold = 50;
  //   if (draggedDistance > swipeThreshold) {
  //     swipeToImage(-1);
  //   } else if (draggedDistance < -swipeThreshold) {
  //     swipeToImage(1);
  //   }
  // };

  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.3,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.4,
  });

  return (
    <AnimatePresence>
      <div className="bg-off-white h-full relative border-[1px] border-transparent border-solid">
        <div className="h-full lg:my-[100px] max-md:my-[50px] ">
          <div
            ref={ref}
            className="flex justify-between items-start gap-[20px]  mx-auto mt-[50px] w-[95%] max-[760px]:flex-wrap max-[650px]:justify-center"
          >
            <FadeInTextHeader
              inView={inView}
              style="text-start leading-[65px] flex flex-col gap-[10px] text-text_royal_green font-miracle scroll-m-10 text-[40px] font-medium tracking-[.10em] lg:text-[80px] xl:text-[80px]  max-xl:text-[50px]  max-[500px]:text-[30px]  max-[500px]:leading-[35px] max-[760px]:text-center max-[760px]:w-full "
            >
              <span className="max-[760px]:w-[50%] max-[760px]:text-end ">
                {" "}
                ROOMS{" "}
              </span>{" "}
              <span className="max-[760px]:text-end"> & APARTMENTS </span>
            </FadeInTextHeader>
            <FadeInText
              inView={inView}
              style="w-[280px]  max-[760px]:w-[95%] font-helvetica text-text_royal_green text-#000 leading-7"
            >
              ALL ROOM DECORATION WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE
              MATERIALS.
            </FadeInText>
            {/* <p className="w-[280px]  max-[760px]:w-[95%] font-helvetica text-text_royal_green text-#000 leading-7 ">
              ALL ROOM DECORATION WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE
            </p> */}
          </div>
          <div className="w-[95%] mx-auto mt-[30px]  lg:h-[100vh] max-lg:h-[100vh]  max-[600px]:h-[110vh]  ">
            <div className="relative   flex items-end gap-[20px] h-full  justify-between  max-[800px]:flex-col-reverse">
              <div className="relative  flex lg:w-[350px] max-xl:w-[90px] min-[800px]:max-w-[400px]  flex-col items-start justify-between gap-3 max-lg:justify-end  min-[800px]:h-[80%]">
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
                    alt="img"
                  />
                </div>
                <div
                  ref={ref2}
                  onClick={() => swipeToImage(1)}
                  className="max-[800px]:hidden flex absolute bottom-0 left-0 xl:w-[80px] md:w-[60px] w-[40px] cursor-pointer "
                >
                  <motion.img
                    initial={{
                      rotate: -180,
                    }}
                    animate={{
                      rotate: inView2 ? 0 : -180,
                      transition: {
                        type: "spring",
                        // ease: [0.56, 0.03, 0.12, 1.04],
                        // duration: 1,
                      },
                    }}
                    src="./btn-wavy-black.webp"
                    alt="img"
                  />
                </div>
                <div
                  ref={ref3}
                  onClick={() => swipeToImage(1)}
                  className=" hidden max-[800px]:flex xl:w-[80px] max-xl:w-[60px] cursor-pointer "
                >
                  <motion.img
                    initial={{
                      rotate: -180,
                    }}
                    animate={{
                      rotate: inView3 ? 0 : -180,
                      transition: {
                        type: "spring",
                      },
                    }}
                    className="w-full"
                    src="./btn-wavy-black.webp"
                    alt="img"
                  />
                </div>
              </div>
              <div className=" flex flex-col justify-between items-start gap-[30px] min-[800px]:h-[75%] max-[800px]:h-[70%]  max-[800px]:w-[100%] w-[30%] max-lg:justify-center  max-[750px]:w-full">
                <div className="flex items-center  gap-[20px] py-2 px-[35px] rounded-[20px] w-fit max-lg:hidden border-solid border-2 border-gray-400">
                  <p className="text-[#FCD043] text-[25px] ">
                    {<TbNorthStar />}{" "}
                  </p>
                  <p>1973 </p>
                </div>
                <section className="flex flex-col h-full w-full  items-start overflow-hidden  justify-end gap-[25px] max-[750px]:flex  max-[750px]:flex-column-reverse max-[750px]:items-center">
                  <div className="w-full min-h-[300px]  max-[800px]:min-h-full max-[1200px]:min-h-[400px] overflow-hidden relative  max-[750px]:flex max-[750px]:flex-row-reverse  justify-between items-center">
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
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
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
                  </div>
                </section>
              </div>

              <p className="hidden max-[750px]:flex items-center gap-[20px]">
                <span>0{sliderContent[index].id}</span>
                <span>/</span>
                <span>0{sliderContent.length}</span>
              </p>
              <div className="relative min-[800px]:w-[500px] h-full max-lg:h-[100%]  max-[800px]:w-full max-[800px]:h-full  ">
                <div className="absolute right-0 w-full h-full     max-[750px]:max-w-[100%]  max-[750px]:min-w-[100%] ">
                  <motion.img
                    key={imageCount}
                    className="h-full object-cover"
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

export default Home_Slider;
