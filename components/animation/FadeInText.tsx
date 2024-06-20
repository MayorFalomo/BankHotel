import React from "react";
import { AnimatePresence, inView, motion } from "framer-motion";

interface Props {
  children: string;
  style?: string;
  inView?: boolean;
}

const FadeInText = ({ children, style, inView }: Props) => {
  return (
    <AnimatePresence>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={`${style}`}
      >
        {children}
      </motion.p>
    </AnimatePresence>
  );
};

export default FadeInText;
