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

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-[100%]">
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
    </div>
  );
}
