import React, { memo } from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#313F38] text-white">
      <div className="flex items-center justify-between m-[auto] w-[95%]">
        <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">
          BankHotel
        </h2>
        <ul className="flex items-center justify-around gap-[7px] w-[50%] font-helvetica my-6 ml-6 list-none [&>li]:mt-2">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>ROOMS</li>
          <li>RESTAURANT</li>
          <li>CONFERENCE HALL</li>
          <li>CONTACTS</li>
        </ul>
        <p className="font-helvetica"> +234 781 52 952 </p>
      </div>
    </nav>
  );
};

export default memo(Navbar);
