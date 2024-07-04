import React from "react";
import Marquee from "react-fast-marquee";
import { AnimatePresence, motion, Variant } from "framer-motion";
import { useInView } from "react-intersection-observer";
type Props = {};

interface IHead {
  text: string;
  inview: boolean;
  i: number;
}

interface Variants {
  [key: string]: Variant;
}

const Gallery: React.FC = (props: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const heading = ["OUR GALLERY"];
  const subText = [
    " Explore our spacious rooms with the gorgeous view to the historical part of the city. Each room has an exclusive interior design decorated with modern art pieces that will make your stay unforgettable.",
  ];

  return (
    <AnimatePresence>
      <div className="bg-regal_green  border-2 border-solid border-transparent ">
        <div className="relative  w-[95%] mx-auto my-[100px] flex flex-col items-center gap-[40px]">
          <div className="max-[630px]:w-full">
            <p className="absolute  left-2 top-0 flex flex-col gap-[5px] items-start justify-start font-helvetica text-white leading-4 max-[850px]:hidden">
              <span> ART & CONGRESS</span> <span>HALL </span>{" "}
            </p>
            <div className="max-[480px]:hidden flex absolute min-[630px]:top-1/3 left-[-40px] transform -translate-y-1/2 max-[630px]:bottom-[200px] xl:w-[300px] md:w-[200px] sm:w-[150px] w-[150px] ">
              <img src="./mirror-iron-board.webp" alt="img" />
            </div>
            <div className="max-[480px]:flex  hidden absolute min-[630px]:top-1/3 left-[-40px] max-[480px]:left-[-10px] transform -translate-y-1/2 max-[630px]:bottom-[170px] xl:w-[300px] md:w-[200px] sm:w-[150px] w-[150px] ">
              <img src="./kitch.webp" alt="img" />
            </div>

            <div className="absolute min-[630px]:top-1/2 right-[-40px] transform  -translate-y-1/2 max-[630px]:bottom-[160px] xl:w-[300px] md:w-[200px] sm:w-[150px] w-[150px] ">
              {/* <Parallax speed={5}> */}
              <img src="./common-area.webp" alt="img" />
              {/* </Parallax> */}
            </div>
            <div className="flex flex-col gap-[10px]  items-center justify-center">
              <div ref={ref} className="w-[100px]">
                <img src="./label-logo.webp" alt="img" />
              </div>
              {
                <motion.div className="w-[100%]">
                  {heading.map((text: any, i: number) => {
                    return (
                      <div className="overflow-hidden" key={i}>
                        <TextMask text={text} inview={inView} i={i} />
                      </div>
                    );
                  })}
                </motion.div>
              }

              <p className="w-[370px] leading-7 [&:not(:first-child)]:mt-6 font-helvetica text-white text-center ">
                Explore our spacious rooms with the gorgeous view to the
                historical part of the city. Each room has an exclusive interior
                design decorated with modern art pieces that will make your stay
                unforgettable.{" "}
              </p>
            </div>

            <div className="mx-auto relative z-10 max-[480px]:hidden flex max-[630px]:my-[100px] xl:w-[600px] md:w-[500px] sm:w-[400px] w-[300px] mt-[30px]">
              <img src="./glass-fireplace.webp" alt="img" />
            </div>
            <div className="mx-auto max-[480px]:flex hidden relative z-10 max-[630px]:my-[100px] xl:w-[600px] md:w-[500px] sm:w-[400px] w-[180px] mt-[30px]">
              {/* <Parallax speed={5}> */}
              <img
                className="w-full h-full"
                src="./small_apart.webp"
                alt="img"
              />
              {/* </Parallax> */}
            </div>

            <div className="mt-[50px]">
              <div className="flex items-center justify-start gap-[20px] w-[85%] max-[480px]:w-[100%] mx-auto ">
                <div className="w-[40px]">
                  <img src="./polygon.webp" alt="alt" />
                </div>
                <p className="flex flex-col items-start gap-[5px] font-helvetica italic  text-white">
                  <span>It is our pleasure to meet your most </span>{" "}
                  <span>unrealistic expectations </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="max-[480px]:hidden flex absolute  left-[-40px] bottom-[0px] xl:w-[200px] md:w-[150px] sm:w-[120px] w-[100px] max-[630px]:bottom-[80px] max-[630px]:opacity-[0.4]">
            <img src="./cheng-chung.webp" alt="img" />
          </div>
          <div className="max-[480px]:flex hidden absolute left-[-40px] bottom-[0px] xl:w-[200px] md:w-[150px] sm:w-[120px] w-[150px] max-[630px]:bottom-[80px]">
            <img src="./bath_tub.webp" alt="img" />
          </div>

          <div className="absolute right-[-40px] bottom-[-170px] max-[630px]:bottom-[100px] max-[630px]:opacity-[0.4] z-[5] xl:w-[300px] md:w-[200px] sm:w-[200px] w-[150px]">
            {/* <Parallax speed={-5}> */}
            <img src="./3mirrors.webp" alt="img" />
            {/* </Parallax> */}
          </div>
        </div>
        <div className="my-[100px] overflow-y-hidden">
          <MarqueeSlider />
          <MarqueeSlider />
        </div>
      </div>
    </AnimatePresence>
  );
};

const MarqueeSlider = () => {
  return (
    <Marquee
      autoFill
      style={{ display: "flex", gap: "20px", overflow: "hidden" }}
    >
      <h1 className="font-miracle scroll-m-20 text-[#ffffff19]  font-light -tracking-[.050em] xl:text-8xl md:text-[70px] sm:text-[70px] max-sm:text-[70px]  text-#fff">
        Bank hotel{" "}
      </h1>
      <h1 className="font-miracle scroll-m-20 text-[#fff]  font-light -tracking-[.050em] xl:text-8xl md:text-[70px] sm:text-[70px] max-sm:text-[70px] text-#fff">
        Bank__hotel{" "}
      </h1>
      <h1 className="font-miracle scroll-m-20  text-[#ffffff19] font-light -tracking-[.050em] text-8xl text-#fff">
        Bank hotel{" "}
      </h1>
      <h1 className="font-miracle scroll-m-20 text-[#fff]  font-light -tracking-[.050em] text-8xl text-#fff">
        Bank__hotel{" "}
      </h1>
      <h1 className="font-miracle scroll-m-20 text-[#fff]  font-light -tracking-[.050em] text-8xl text-#fff">
        Bank hotel{" "}
      </h1>
    </Marquee>
  );
};

const textVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
      // ease: [0.6, -0.05, 0.01, 0.99],
      //   ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      // ease: [0, 0.55, 0.45, 1],
      ease: [0.76, 0, 0.24, 1],
      duration: 0.7,
    },
  },
};

const TextMask = ({ text, inview }: IHead) => {
  return (
    <motion.h1
      variants={textVars}
      initial="initial"
      animate={inview ? "open" : "initial"}
      exit="exit"
      className="text-golden_yellow text-center xl:text-8xl md:text-[70px] sm:text-[60px] text-[45px] mt-[30px]"
    >
      {text}
    </motion.h1>
  );
};

// const TextSubMask = ({ text, inview, i }: IHead) => {

//   return (
//     <motion.p
//       initial="hidden"
//       animate={inview ? "visible" : "hidden"}
//       exit="exit"
//       className="w-[370px] leading-7 [&:not(:first-child)]:mt-6 font-helvetica text-white text-center "
//     >
//       {text}
//     </motion.p>
//   );
// };
export default Gallery;
