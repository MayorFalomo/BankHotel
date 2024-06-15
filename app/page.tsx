"use client";
import React, { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/home/gallery/Gallery";
import GetInTouch from "@/components/get_in_touch/GetInTouch";
import Navbar from "@/components/navbar/Navbar";
import BestApartments from "@/components/home/bestApartments/BestApartments";
import Faq from "@/components/home/faq/Faq";
import HeroHeader from "@/components/home/heroHeader/HeroHeader";
import HeroImage from "@/components/home/heroImage/HeroImage";
import Facilities from "@/components/home/homeFacilities/Facilities";
import Home_Slider from "@/components/home/home_Slider/Home_Slider";
import About_us from "@/components/home/home_about_us/About_us";
import Image from "next/image";
import Lenis from "lenis";
import FadeIn from "@/components/animation/FadeIn";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      },
      // easing: function (t) {
      //   return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      // },

      // direction: "vertical",
      // gestureDirection: "vertical",
      // smooth: true,
      // smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <FadeIn>
      <Navbar />
      <HeroHeader />
      <HeroImage />
      <About_us />
      <Home_Slider />
      <Facilities />
      <Faq />
      <BestApartments />
      <Gallery />
      <GetInTouch />
      <Footer />
    </FadeIn>
  );
}
