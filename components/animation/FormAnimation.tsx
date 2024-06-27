import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  children: JSX.Element | React.ReactNode | JSX.Element[];
};

const FormAnimation = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: -300 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FormAnimation;
