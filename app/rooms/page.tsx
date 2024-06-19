"use client";
import Footer from "@/components/footer/Footer";
import GetInTouch from "@/components/get_in_touch/GetInTouch";
import Navbar from "@/components/navbar/Navbar";
import RoomSection from "@/components/room/Rooms/RoomSection";
import RoomHero from "@/components/room/heroRoom/RoomHero";
import RoomFacilities from "@/components/room/room-facilities/Rooms";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SmoothScroll from "@/components/animation/SmoothScroll";
// import SmoothScroll from "@/components/animation/SmoothScroll";
type Props = {};

export default function Rooms(props: Props) {
  return (
    <SmoothScroll>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full overflow-hidden"
        >
          <Navbar />
          <RoomHero />
          <RoomSection />
          <RoomFacilities />
          <GetInTouch />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </SmoothScroll>
  );
}
