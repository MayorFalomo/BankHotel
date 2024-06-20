"use client";
import FadeIn from "@/components/animation/FadeIn";
import SmoothScroll from "@/components/animation/SmoothScroll";
import FacilityHero from "@/components/facility/facilityHero/FacilityHero";
import OurService from "@/components/facility/ourService/OurService";
import Footer from "@/components/footer/Footer";
import GetInTouch from "@/components/get_in_touch/GetInTouch";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {};

export default function FacilityPage(props: Props) {
  return (
    <div>
      <SmoothScroll>
        <FadeIn>
          <Navbar />
          <FacilityHero />
          <OurService />
          <GetInTouch />
          <Footer />
        </FadeIn>
      </SmoothScroll>
    </div>
  );
}
