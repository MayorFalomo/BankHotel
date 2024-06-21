"use client";
import AboutHero from "@/components/about/aboutHero/AboutHero";
import FadeIn from "@/components/animation/FadeIn";
import SmoothScroll from "@/components/animation/SmoothScroll";
import Footer from "@/components/footer/Footer";
import GetInTouch from "@/components/get_in_touch/GetInTouch";
import About_us from "@/components/home/home_about_us/About_us";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <SmoothScroll>
      <FadeIn>
        <Navbar />
        <AboutHero />
        <About_us />
        <GetInTouch />
        <Footer />
      </FadeIn>
    </SmoothScroll>
  );
};

export default page;
