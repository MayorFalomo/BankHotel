import ImageReveal from "@/components/animation/ImageReveal";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import MaskText from "@/components/animation/MaskText";
import TextMask from "@/components/animation/TextMask";

type Props = {};

const About_us = (props: Props) => {
  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setTrigger(true);
    }
  }, []);

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  // console.log(trigger, "trigger");

  // const {  inView, entry } = useInView({
  //   threshold: 0,
  //   triggerOnce: trigger ? false : true,
  // });

  return (
    <AnimatePresence>
      <div className="bg-regal_green w-full  h-full border-[1px] border-transparent  border-solid ">
        <div
          id="anchor"
          className="w-[95%] my-[70px] mx-auto max-[750px]:my-[100px]  border-solid  "
        >
          <div className="relative h-[100%] flex flex-col justify-center items-center  ">
            <div className="relative flex justify-between h-[80%]">
              <div className="relative w-full h-full">
                <div
                  ref={ref}
                  className={`flex  h-[100vh] ${
                    inView ? "max-[780px]:h-auto" : "max-[780px]:h-full"
                  }  gap-[30px] ${
                    inView ? "items-end" : "items-end"
                  } max-[750px]:flex-col max-[650px]:items-center`}
                >
                  <div className=" w-[500px] min-w-[500px] max-[1300px]:w-[400px] max-[1300px]:min-w-[400px] max-[450px]:min-w-full object-contain mt-[40px] h-[100vh]  relative z-[1] max-[750px]:h-[70vh] max-[750px]:w-[100%]">
                    {inView && (
                      // <ImageReveal>
                      <motion.img
                        className="w-full h-full object-fill"
                        initial={{
                          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                        exit={{
                          opacity: 0,
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="./bigger-copenhagen.webp"
                        alt="img"
                      />
                      // </ImageReveal>
                    )}
                  </div>
                  <div ref={ref2} className="text-white_text">
                    <p className="font-miracle scroll-m-20 text-2xl font-semibold tracking-[.10em]">
                      High Quality{" "}
                    </p>
                    {/* <TextMask
                      inview={inView2}
                      text=""
                      customStyles="w-[100%]  md:w-[80%] max-sm:w-[100%]  max-xl:w-[90%] leading-7 [&:not(:first-child)]: mt-3 lg:text-[17px] sm:text-[16px] max-sm:text-[14px] font-helvetica"
                    >
                      The five-star Bank Hotel was reopened to visitors in 2016.
                      The building was renovated and modernized to meet the
                      expectations of the most demanding guests. We offer
                      luxurious rooms, numerous facilities, and exceptional
                      service.
                    </TextMask> */}
                    <MaskText
                      inview={inView2}
                      customStyles="w-[100%]  md:w-[80%] max-sm:w-[100%]  max-xl:w-[90%] leading-7 [&:not(:first-child)]: mt-3 lg:text-[17px] sm:text-[16px] max-sm:text-[14px] font-helvetica"
                    >
                      The five-star Bank Hotel was reopened to visitors in 2016.
                      The building was renovated and modernized to meet the
                      expectations of the most demanding guests. We offer
                      luxurious rooms, numerous facilities, and exceptional
                      service.
                    </MaskText>
                    {/* <p className="w-[100%]  md:w-[80%] max-sm:w-[100%]   max-xl:w-[90%] leading-7 [&:not(:first-child)]: mt-3 lg:text-[17px] sm:text-[16px] max-sm:text-[14px] font-helvetica">
                      The five-star Bank Hotel was reopened to visitors in 2016.
                      The building was renovated and modernized to meet the
                      expectations of the most demanding guests. We offer
                      luxurious rooms, numerous facilities, and exceptional
                      service.{" "}
                    </p> */}
                  </div>
                </div>
                <div className="absolute top-[-10px] xl:left-[250px] lg:left-[220px] w-[100%] z-[-1px] ">
                  <img src="./grouped.webp" alt="img" />
                </div>
                {/* <div className="absolute top-[-20px] left-[-20px] w-[90%] z-[-1px] ">
                <img src="./Ellipse.webp" alt="img" />
              </div> */}
              </div>
              <div
                id="things"
                className="flex flex-col  font-miracle absolute z-10 top-1/3 max-[770px]:left-[50%]  md:left-[70%] lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-[750px]:flex max-[750px]:flex-row  max-[750px]:gap-[25px] max-[750px]:top-[-10px] "
              >
                <h1 className="min-[900px]:text-[80px] xl:text-[100px] sm:text-[70px] max-sm:text-[60px] max-[330px]:text-[50px]  scroll-m-20  font-extrabold tracking-[.10em]  text-golden_yellow">
                  ABOUT
                </h1>
                <h1 className="lg:text-[100px] sm:text-[70px] max-sm:text-[60px]  text-end text-white_text scroll-m-20 font-extrabold tracking-[.10em]">
                  US
                </h1>
              </div>
              <div className="relative w-[300px] min-w-[300px]  min-md:flex max-md:justify-end max-lg:hidden">
                <div className="mt-[40px] sm:w-[70%] lg:w-[100%]">
                  {inView && (
                    <ImageReveal>
                      <div className="w-[280px] max-[1300px]:w-[200px] mx-auto h-[40vh]">
                        <img src="./space-copenhagen.webp" alt="img" />
                      </div>
                    </ImageReveal>
                  )}
                </div>
                {/* <div className="absolute h-[100%] w-[1px] bg-[#3F5148] top-0 left-[-150px]"></div> */}
                <div className="absolute w-[50px] top-[0px] left-[-45px]">
                  <img src="./label.webp" alt="img" />
                </div>
                <div className="absolute xl:w-[120px] max-sm:w-[80px] sm:w-[90px] xl:bottom-[80px] lg:bottom-[-40px] md:bottom-[-60px] left-[35px]">
                  <img src="./button-default.webp" alt="img" />
                </div>
              </div>
              {/* <div className="absolute w-[65%] top-[-20px] right-[0px]">
              <img src="./Vector_14.webp" alt="img" />
            </div> */}
            </div>
            {/* <div className="absolute h-[100%] z-20 w-[1px] bg-[#3F5148] top-0 left-[-140px]"></div> */}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About_us;
