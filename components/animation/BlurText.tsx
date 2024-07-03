import React from "react";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
  styling?: string;
  inview?: boolean;
}

const BlurText = ({ children, styling, inview }: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.p
        initial={{ filter: "blur(5px)" }}
        animate={{
          filter: inview ? "blur(0px)" : "blur(15px)",

          transition: { duration: 0.5, ease: "easeIn" },
        }}
        exit={{ filter: "blur(15px)" }}
        className={`${styling}`}
      >
        {children}
      </motion.p>
    </AnimatePresence>
  );
};

export default BlurText;
