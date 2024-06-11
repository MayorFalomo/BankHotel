"use client";
import React, { memo, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuState, setMenuState] = useState<Boolean>(false);

  return (
    <nav className="bg-[#313F38] pb-1 text-white">
      <div className="flex items-center justify-between m-[auto] py-1 w-[95%]">
        <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-2">
          BankHotel
        </h2>
        <ul className="flex items-center justify-around gap-[15px] w-[50%] font-helvetica my-6 ml-6 list-none [&>li]:mt-2 min-[1200px]:flex min-[100px]:hidden">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">ABOUT</li>
          <li className="cursor-pointer">ROOMS</li>
          <li className="cursor-pointer">RESTAURANT</li>
          <li className="cursor-pointer">CONFERENCE HALL</li>
          <li className="cursor-pointer">CONTACTS</li>
        </ul>
        <p className="font-helvetica [&:not(:first-child)]:mt-2 sm:hidden min-[1200px]:flex min-[100px]:hidden">
          {" "}
          +234 781 52 952{" "}
        </p>
        {menuState ? (
          <span className="text-[25px] cursor-pointer"> {<FaXmark />} </span>
        ) : (
          <span className="text-[25px] cursor-pointer min-[1200px]:hidden">
            {<GiHamburgerMenu />}
          </span>
        )}
      </div>
    </nav>
  );
};

export default memo(Navbar);
