import React from "react";
import { motion, Variant } from "framer-motion";

interface Props {
  text: string;
  //   children: JSX.Element[] | JSX.Element;
}

interface Variants {
  [key: string]: Variant;
}

const SplitText = ({ text }: Props) => {
  //   console.log(text);

  const heading = text;
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
    <div>
      <motion.div
        className="overflow-hidden text-white font-helvetica tracking-[.05em] xl:w-[50%] max-md:w-[100%] max-[800px]:w-[100%] max-[760px]:text-center max-[900px]:ml-[5px]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span className="inline-block" key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default SplitText;
