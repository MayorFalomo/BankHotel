import { AnimatePresence, motion, Variant } from "framer-motion";
import React from "react";

interface IProps {
  children: React.ReactNode | JSX.Element[] | JSX.Element;
  text: string;
  customStyles?: string;
  inview?: boolean;
}

interface IChild {
  child: React.ReactNode;
}
interface IVariant {
  [key: string]: Variant;
}

const TextMask = (props: IProps) => {
  const propArray = Array.isArray(props.children)
    ? props.children
    : [props.children];
  console.log(propArray, "propArray");

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
          >
            <Staggered child={child} />
          </motion.ul>
        ))}
      </AnimatePresence>
    </div>
  );
};

const Staggered = ({ child }: IChild) => {
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
    <motion.li variants={mobileLinkVars} initial="initial" animate="open">
      {child}
    </motion.li>
  );
};

export default TextMask;
