import React from "react";

type Props = {};

const BookingHeader = (props: Props) => {
  return (
    <div className="bg-regal_green ">
      <div className=" w-[95%] m-auto ">
        <h1 className=" flex items-center text-[100px] max-[1200px]:text-[80px] max-[950px]:text-[60px] text-white_text font-miracle">
          <span> BANK </span> <span className=" text-golden_yellow">HOTEL</span>
        </h1>
        <p className="text-[24px] pb-2 max-[1200px]:text-[20px] text-white_text font-helvetica">
          Superior taste for the connoisseur
        </p>
      </div>
    </div>
  );
};

export default BookingHeader;
