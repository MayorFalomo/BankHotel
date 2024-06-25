"use client";
import React from "react";
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
import FadeIn from "@/components/animation/FadeIn";
import SmoothScroll from "@/components/animation/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
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
    </SmoothScroll>
  );
}
