"use client";
import FadeIn from "@/components/animation/FadeIn";
import BookingHeader from "@/components/booking/bookingHeader/BookingHeader";
import Dates from "@/components/booking/dates/Dates";
import PaymentOption from "@/components/booking/paymentOption/PaymentOption";
import RoomSpecs from "@/components/booking/roomSpecifications/RoomSpecs";
import UserInfo from "@/components/booking/userInfo/UserInfo";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [activeForm, setActiveForm] = useState(1);
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
          </div>
          <div className="w-[50vw] h-[90vh]  max-[750px]:w-full min-[750px]:flex max-[750px]:hidden">
            <div className="h-full w-full max-[750px]:hidden">
              <img
                className="h-full"
                src="./bigger-copenhagen.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default page;
