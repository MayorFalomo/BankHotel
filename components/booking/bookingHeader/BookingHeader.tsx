import React from "react";

type Props = {};

const BookingHeader = (props: Props) => {
  return (
    <div className="bg-regal_green w-full border-[1px] border-transparent ">
      <div className=" w-[95%] m-auto ">
        <h1 className=" flex items-center text-[100px] max-[1200px]:text-[80px] max-[950px]:text-[60px] text-white_text font-miracle">
          <span> BANK </span> <span className=" text-golden_yellow">HOTEL</span>
        </h1>
        <p className="text-[20px] pb-2 max-[1200px]:text-[18px] max-[600px]:text-[16px] text-white_text font-helvetica">
          Superior taste for the connoisseur
        </p>
      </div>
    </div>
  );
};

export default BookingHeader;
