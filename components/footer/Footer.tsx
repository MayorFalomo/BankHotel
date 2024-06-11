import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type Props = {};

const Footer: React.FC = (props: Props) => {
  return (
    <footer className="bg-off-white border-[1px] border-transparent  font-helvetica">
      <div className="w-[65%]  pb-[50px] flex items-start justify-around flex-wrap">
        <div className="flex flex-col items-start gap-[10px]">
          <h3 className="text-xl">ABOUT US</h3>
          <p className="leading-6 w-[280px]">
            The five-star hotel in a beautiful European city with a modern
            restaurant, conference-hall, and art-bar.{" "}
          </p>
          <p className="opacity-[0.4] mt-6">
            {" "}
            ©2021 All rights reserved. BankHotel{" "}
          </p>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <h3 className="text-xl">NEWS</h3>
          <p className="leading-6 w-[270px]">
            Sign up to our newsletter not to miss exclusive offers and
            information about the upcoming events.{" "}
          </p>
          <div className="flex item-center px-2 bg-off-white border-[1px] border-gray-300">
            <input
              className="p-2 bg-transparent  outline-none"
              placeholder="EMAIL"
            />
            <span className="flex items-center cursor-pointer opacity-[0.4]">
              {" "}
              {<FaArrowRight />}{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="text-xl">SOCIAL</h3>

          <ul className="flex items-center gap-[30px]">
            <li className="cursor-pointer">FACEBOOK </li>
            <li className="cursor-pointer">INSTAGRAM </li>
            <li className="cursor-pointer">TWITTER </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
