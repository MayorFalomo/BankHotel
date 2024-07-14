"use client";
import FadeIn from "@/components/animation/FadeIn";
import BookingHeader from "@/components/booking/bookingHeader/BookingHeader";
import Dates from "@/components/booking/dates/Dates";
import PaymentOption from "@/components/booking/paymentOption/PaymentOption";
import RoomSpecs from "@/components/booking/roomSpecifications/RoomSpecs";
import UserInfo from "@/components/booking/userInfo/UserInfo";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
type Props = {};

const PDFGenerator = dynamic(
  () => import("../../components/booking/pdfHandler/PDFGenerator"),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-full w-full">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("animate-spin")}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
    ),
  }
);

const page = (props: Props) => {
  const [activeForm, setActiveForm] = useState<number>(1);
  const [carousel, setCarousel] = useState<AliceCarousel | null>(null);
  const handleDragStart = (e: React.DragEvent) => e.preventDefault();
  const items = [
    <img
      className="h-full object-cover object-bottom w-full"
      src="./bigger-copenhagen.webp"
      alt="img"
    />,
    <img
      className="h-full  object-bottom w-full"
      src="./space-copenhagen.webp"
      onDragStart={handleDragStart}
      role="presentation"
      alt="img"
    />,
    <img
      className="h-full object-cover object-bottom w-full"
      src="./room-image.webp"
      onDragStart={handleDragStart}
      role="presentation"
      alt="img"
    />,
    <img
      className="h-full object-cover object-bottom w-full"
      src="./3mirror-2.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt="img"
    />,
  ];

  return (
    <FadeIn>
      <div className=" max-h-[100vh] overflow-hidden">
        <Navbar />
        <div className="flex h-full w-full ">
          <div className=" flex flex-col gap-4 h-[90vh] max-h-[100vh]: w-full overflow-auto  min-[750px]:w-[50vw]  max-[750px]:w-[100%]">
            <BookingHeader />
            {activeForm == 1 && <UserInfo setActiveForm={setActiveForm} />}
            {activeForm == 2 && <RoomSpecs setActiveForm={setActiveForm} />}
            {activeForm == 3 && <Dates setActiveForm={setActiveForm} />}
            {activeForm == 4 && <PaymentOption setActiveForm={setActiveForm} />}
            {activeForm == 5 && <PDFGenerator setActiveForm={setActiveForm} />}
          </div>
          <div className=" min-[750px]:w-[50vw] w-[100%] h-[90vh] max-[750px]:w-full min-[750px]:flex max-[750px]:hidden">
            <AliceCarousel
              mouseTracking
              animationType="fadeout"
              autoPlay={true}
              autoPlayInterval={3000}
              infinite={true}
              items={items}
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default page;
