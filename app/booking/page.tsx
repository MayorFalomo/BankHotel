"use client";
import BookingHeader from "@/components/booking/bookingHeader/BookingHeader";
import UserInfo from "@/components/booking/userInfo/UserInfo";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [activeForm, setActiveForm] = useState(0);
  return (
    <div className=" max-h-[100vh] overflow-hidden">
      <Navbar />
      <div className="flex h-full w-full ">
        <div className=" flex flex-col h-[80vh] w-[50vw] max-[750px]:w-[100vw]">
          <BookingHeader />
          <UserInfo activeForm={activeForm} />
        </div>
        <div className="w-[50vw] h-[90vh]  max-[750px]:w-full">
          <div className="h-full w-full max-[750px]:hidden min-[750px]:flex">
            <img className="h-full" src="./bigger-copenhagen.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
