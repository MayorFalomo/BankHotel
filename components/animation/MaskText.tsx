import React from "react";
import { AnimatePresence, motion, Variant, Variants } from "framer-motion";

interface IProps {
  children: React.ReactNode;
  customStyles?: string;
  inview?: boolean;
}

interface IHead {
  text: string;
  inview?: boolean;
  i: number;
  customStyles?: string;
}

interface IVariant {
  [key: string]: Variant;
}

const MaskText = (props: IProps) => {
  const textProps = Array.isArray(props.children)
    ? props.children
    : [props.children];

  return (
    <AnimatePresence mode="wait">
      <motion.div className="w-[100%]">
        {textProps.map((text, i) => (
          <TextMask
            key={i}
            text={text}
            i={i}
            inview={props.inview}
            customStyles={props.customStyles}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const textVars: IVariant = {
  initial: {
    y: "50vh",
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

const TextMask = ({ text, inview, customStyles }: IHead) => {
  return (
    <motion.p
      variants={textVars}
      initial="initial"
      animate={inview ? "open" : "initial"}
      exit="exit"
      className={`${
        customStyles || ""
      } overflow-hidden inline-block text-white`}
    >
      {text}
    </motion.p>
  );
};

export default MaskText;
