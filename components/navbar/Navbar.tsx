"use client";
import React, { memo, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "../mobileNavbar/MobileNav";
import Link from "next/link";

const Navbar = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  return (
    <nav className="bg-[#313F38] max-[1200px]:sticky top-0 left-0 z-30 w-full pb-1 border-[1px] border-transparent text-white">
      <div className="flex items-center justify-between m-[auto] py-1 w-[95%]">
        <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-2">
          BankHotel
        </h2>
        <ul className="flex items-center justify-around gap-[15px] w-[50%] font-helvetica my-6 ml-6 list-none [&>li]:mt-2 min-[1200px]:flex min-[100px]:hidden">
          <li className="cursor-pointer hover:text-golden_yellow transition-all">
            <Link href="/"> HOME</Link>
          </li>
          <li className="cursor-pointer hover:text-golden_yellow">
            <Link href="/about"> ABOUT </Link>
          </li>
          <li className="cursor-pointer hover:text-golden_yellow">
            <Link href="/rooms"> ROOMS </Link>{" "}
          </li>
          <li className="cursor-pointer hover:text-golden_yellow">
            <Link href="/facility"> FACILITIES </Link>
          </li>
          <li className="cursor-pointer hover:text-golden_yellow">
            <Link href="./booking"> BOOK A ROOM </Link>
          </li>
          <li className="cursor-pointer hover:text-golden_yellow">
            <Link href="./contacts">CONTACTS </Link>
          </li>
        </ul>
        <p className="font-helvetica [&:not(:first-child)]:mt-2 sm:hidden min-[1200px]:flex min-[100px]:hidden">
          {" "}
          +234 781 52 952{" "}
        </p>
        {menuState ? (
          <span
            onClick={() => setMenuState((prev) => !prev)}
            className="text-[25px] cursor-pointer min-[1200px]:hidden max-[1200px]:block"
          >
            <svg
              height="72"
              viewBox="0 0 21 21"
              width="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="white"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m7.5 7.5 6 6" />
                <path d="m13.5 7.5-6 6" />
              </g>
            </svg>
          </span>
        ) : (
          <span
            onClick={() => setMenuState((prev) => !prev)}
            className="mt-[24px] cursor-pointer min-[1200px]:hidden"
          >
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect className="fill-white" width="200" height="5"></rect>
              <rect className="fill-white" y="25" width="200" height="5"></rect>
            </svg>
          </span>
        )}
      </div>

      {menuState && (
        <MobileNav menuState={menuState} setMenuState={setMenuState} />
      )}
    </nav>
  );
};

export default memo(Navbar);
