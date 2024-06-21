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
          transition: { duration: 0.5 },
        }}
        exit={{ opacity: 0 }}
        className="w-[100%] relative overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] "
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeIn;
