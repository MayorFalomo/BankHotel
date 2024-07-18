import { usePathname } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type Props = {};

const Footer: React.FC = (props: Props) => {
  const route = usePathname();

  return (
    <footer
      className={`${route == "/facility" ? "bg-regal_green" : "bg-off-white"} ${
        route == "/facility" ? "text-white" : "#000"
      }  border-[1px] border-transparent  font-helvetica`}
    >
      <div className="min-[680px]:w-[95%] w-[95%] mx-auto mt-[50px] pb-[50px] flex items-start justify-start gap-[50px] flex-wrap ">
        <div className="flex flex-col items-start gap-[10px] max-[480px]:hidden">
          <p className="text-xl">ABOUT US</p>
          <p className="leading-6 font-helvetica w-[280px]">
            The five-star hotel in a beautiful European city with a modern
            restaurant, conference-hall, and art-bar.{" "}
          </p>
          <p className="opacity-[0.4] mt-6">
            {" "}
            ©2021 All rights reserved. BankHotel{" "}
          </p>
        </div>
        <div className="flex flex-col items-start gap-[10px] max-[480px]:hidden">
          <p className="text-xl">NEWS</p>
          <p className="leading-6 w-[270px] font-helvetica">
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
        <div className="flex flex-col gap-[40px] max-[480px]:hidden">
          <div className="flex flex-col gap-[20px] max-[480px]:hidden">
            <p className="text-xl">SOCIAL</p>

            <ul className="flex items-center gap-[30px]">
              <li className="cursor-pointer">FACEBOOK </li>
              <li className="cursor-pointer">INSTAGRAM </li>
              <li className="cursor-pointer">TWITTER </li>
            </ul>
          </div>
          <p className="opacity-[0.4]  mt-6 font-helvetica">
            Designed by <a>Andrew Vynarchyk</a>{" "}
          </p>
        </div>
        <div className="w-full max-[480px]:block hidden">
          <div className="h-[1px] w-full bg-gray-200 hidden "> </div>
          <p className="opacity-[0.4]  text-center mt-6">
            {" "}
            © 2021 All rights reserved. BankHotel{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
