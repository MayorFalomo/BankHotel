"use client";
import React, { memo, useState } from "react";

import MobileNav from "../mobileNavbar/MobileNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <nav className="bg-[#313F38] max-[1200px]:sticky top-0 left-0 z-30 w-full pb-1 border-[1px] border-transparent text-white">
      <div className="flex items-center justify-between m-[auto] py-1 w-[95%]">
        <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-2">
          BankHotel
        </h2>
        <ul className="flex items-center justify-around gap-[15px] min-[1220px]-w-[50%] max-[1220px]-w-[62%]  font-helvetica my-6 ml-6 list-none [&>li]:mt-2 min-[1200px]:flex min-[100px]:hidden">
          {/* <li className="cursor-pointer hover:text-golden_yellow transition-all">
            <Link href="/"> HOME</Link>
          </li> */}
          <li className="cursor-pointer group relative inline-block">
            <Link
              href="/"
              className={`block relative py-2 px-4 transition-colors duration-500 ${
                pathname === "/"
                  ? "text-golden_yellow"
                  : "text-off-white hover:text-golden_yellow"
              }`}
            >
              HOME
              <span className="absolute bottom-[2px] left-0 w-full h-[2px] bg-golden_yellow scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
            </Link>
          </li>
          <li className="cursor-pointer group relative inline-block">
            <Link
              href="/about"
              className={`block relative py-2 px-4 transition-colors duration-500 ${
                pathname === "/about"
                  ? "text-golden_yellow"
                  : "text-off-white hover:text-golden_yellow"
              }`}
            >
              ABOUT
              <span className="absolute bottom-[2px] left-0 w-full h-[2px] bg-golden_yellow scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
            </Link>
          </li>
          <li className="cursor-pointer group relative inline-block">
            <Link
              href="/rooms"
              className={`block relative py-2 px-4 transition-colors duration-500 ${
                pathname === "/rooms"
                  ? "text-golden_yellow"
                  : "text-off-white hover:text-golden_yellow"
              }`}
            >
              ROOMS
              <span className="absolute bottom-[2px] left-0 w-full h-[2px] bg-golden_yellow scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
            </Link>
          </li>
          <li className="cursor-pointer group relative inline-block">
            <Link
              href="/facility"
              className={`block relative py-2 px-4 transition-colors duration-500 ${
                pathname === "/facility"
                  ? "text-golden_yellow"
                  : "text-off-white hover:text-golden_yellow"
              }`}
            >
              FACILITIES
              <span className="absolute bottom-[2px] left-0 w-full h-[2px] bg-golden_yellow scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
            </Link>
          </li>
          <li className="cursor-pointer group relative inline-block">
            <Link
              href="./booking"
              className={`block relative py-2 px-4 transition-colors duration-500 ${
                pathname === "/booking"
                  ? "text-golden_yellow"
                  : "text-off-white hover:text-golden_yellow"
              }`}
            >
              BOOK A ROOM
              <span className="absolute bottom-[2px] left-0 w-full h-[2px] bg-golden_yellow scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
            </Link>
          </li>
          <li className="cursor-pointer group relative inline-block">
            <Link
              href="./contacts"
              className={`block relative py-2 px-4 transition-colors duration-500 ${
                pathname === "/contacts"
                  ? "text-golden_yellow"
                  : "text-off-white hover:text-golden_yellow"
              }`}
            >
              CONTACTS
              <span className="absolute bottom-[2px] left-0 w-full h-[2px] bg-golden_yellow scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
            </Link>
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
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
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
