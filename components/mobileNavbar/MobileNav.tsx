import React, { useState } from "react";
import { AnimatePresence, motion, Variant } from "framer-motion";
import Link from "next/link";
interface Props {}

interface Nav {
  name: string;
  link: string;
}

interface MenuState {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Variants {
  [key: string]: Variant;
}

const MobileNav = (props: MenuState) => {
  const [navLinks, setNavLinks] = useState<Nav[]>([
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Rooms",
      link: "#",
    },
    {
      name: "Restaurant",
      link: "#",
    },
    {
      name: "Conference Hall",
      link: "#",
    },
    {
      name: "Contacts",
      link: "#",
    },
  ]);

  const menuLinks: Variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.2,
        // ease: [0.76, 0, 0.24, 1],
        ease: [0.6, -0.05, 0.01, 0.99],
        // ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.7,
        delay: 0.5,
        // ease: [0.6, -0.05, 0.01, 0.99],
        // ease: [0.22, 1, 0.36, 1],
        // duration: 1,
        // ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const containerVars: Variants = {
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
    <AnimatePresence mode="wait">
      <motion.div
        variants={menuLinks}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed top-[0px] left-0 z-20 h-full w-full origin-top bg-regal_green min-[1200px]:hidden max-[1200px]:block"
      >
        <div className="flex flex-col items-start justify-between h-full gap-[20px] pb-3 ">
          <div className="flex items-center justify-between  w-[95%] mx-auto ">
            <p className="text-[28px] w-full font-semibold tracking-tight first:mt-2">
              BankHotel
            </p>
            <p
              onClick={() => props.setMenuState((prev) => !prev)}
              className="text-[25px] cursor-pointer min-[1200px]:hidden max-[1200px]:block "
            >
              <svg
                height="72"
                viewBox="0 0 21 21"
                width="60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="white"
                  fill-rule="evenodd"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m7.5 7.5 6 6" />
                  <path d="m13.5 7.5-6 6" />
                </g>
              </svg>
            </p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-start w-[95%] mx-auto  justify-around gap-[15px] list-none [&>li]:mt-2"
            >
              {navLinks.map((nav: any, i: number) => {
                return (
                  <div className="overflow-hidden" key={i}>
                    <MobileLinks nav={nav} />
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col  w-full items-center gap-[20px]">
            <p className="font-helvetica text-center [&:not(:first-child)]:mt-2 min-[1200px]:text-[30px] min-[800px]:text-[27px] min-[500px]:text-[24px] max-[500px]:text-[20px] ">
              {" "}
              +234 781 52 952{" "}
            </p>
            <p className="leading-7 text-center underline underline-offset-1 font-helvetica ">
              6A - ANTHONY HOROWITZ WAY, LEKKI{" "}
            </p>
            <ul className="flex items-center justify-center gap-[20px] font-helvetica ">
              <li>FACEBOOK</li>
              <li>INSTAGRAM</li>
              <li>TWITTER</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
      //   ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileLinks = ({ nav }: { nav: Nav }) => {
  return (
    <motion.ul className="flex items-center gap-[20px] mx-auto min-[1200px]:text-[30px] min-[800px]:text-[27px] min-[500px]:text-[24px] max-[500px]:text-[27px] font-helvetica ">
      <motion.li
        variants={mobileLinkVars}
        initial="initial"
        animate="open"
        exit="exit"
        className="cursor-pointer"
      >
        <Link href={`${nav.link}`}>{nav.name}</Link>
      </motion.li>
      {nav.name == "Home" ? (
        <img className="w-[30px]" src="./Star.svg" alt="img" />
      ) : (
        ""
      )}
    </motion.ul>
  );
};
export default MobileNav;
