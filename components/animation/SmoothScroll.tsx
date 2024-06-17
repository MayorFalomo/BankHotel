import Lenis from "lenis";
import React, { useEffect } from "react";

type Props = {
  children: React.JSX.Element[] | JSX.Element;
};

const SmoothScroll = ({ children }: Props) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      // easing: (t) => {
      //   return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      // },
      // easing: function (t) {
      //   return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      // },
      touchMultiplier: 2,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
