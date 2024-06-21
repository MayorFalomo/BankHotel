"use client";
import FadeIn from "@/components/animation/FadeIn";
import SmoothScroll from "@/components/animation/SmoothScroll";
import Contact from "@/components/contacts/Contact";
import Footer from "@/components/footer/Footer";
import GetInTouch from "@/components/get_in_touch/GetInTouch";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <SmoothScroll>
      <FadeIn>
        <Navbar />
        <Contact />
        <GetInTouch />
        <Footer />
      </FadeIn>
    </SmoothScroll>
  );
};

export default page;
