import React from "react";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  children: JSX.Element[] | JSX.Element;
}

const FadeIn = ({ children }: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        exit={{ opacity: 0 }}
        className="w-[100%] overflow-x-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeIn;
