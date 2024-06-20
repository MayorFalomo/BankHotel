import React from "react";
import { AnimatePresence, inView, motion } from "framer-motion";

interface Props {
  children: JSX.Element[] | string | React.ReactNode;
  style?: JSX.Element | string;
  inView?: boolean;
}

const FadeInTextHeader = ({ children, style, inView }: Props) => {
  return (
    <AnimatePresence>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={`${style}`}
      >
        {children}
      </motion.h1>
    </AnimatePresence>
  );
};

export default FadeInTextHeader;
