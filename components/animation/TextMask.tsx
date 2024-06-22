import { AnimatePresence, motion, Variant } from "framer-motion";
import React, { memo } from "react";

interface IProps {
  children: React.ReactNode | JSX.Element[] | JSX.Element;
  customStyles?: string;
  inView?: boolean;
  inView2?: boolean;
}

interface IChild {
  child: React.ReactNode;
  customStyles?: string;
  inView?: boolean;
  viewed?: boolean;
}
interface IVariant {
  [key: string]: Variant;
}

const TextMask = memo((props: IProps) => {
  const propArray = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const containerVars: IVariant = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div>
      <AnimatePresence>
        {propArray.map((child: any, index: number) => (
          <motion.ul
            variants={containerVars}
            initial="initial"
            animate="open"
            key={index}
            className=" overflow-hidden"
          >
            <Staggered
              child={child}
              inView={props.inView}
              viewed={props.inView2}
              customStyles={props.customStyles}
            />
          </motion.ul>
        ))}
      </AnimatePresence>
    </div>
  );
});

const Staggered = memo(({ child, customStyles, inView }: IChild) => {
  const mobileLinkVars: IVariant = {
    initial: {
      opacity: 0,
      y: "30vh",
      transition: {
        duration: 0.5,
        // ease: [0.6, -0.05, 0.01, 0.99],
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <motion.li
      className={`${customStyles} overflow-hidden`}
      variants={mobileLinkVars}
      initial="initial"
      animate={inView ? "open" : "initial"}
    >
      {child}
    </motion.li>
  );
});

export default TextMask;
