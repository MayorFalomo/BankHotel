import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
}

const ImageReveal = ({ children }: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <motion.div
      className="w-[100%]"
      initial={{
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      }}
      animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ImageReveal;
