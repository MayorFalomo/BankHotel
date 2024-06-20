import React from "react";

type Props = {};

const OurService = (props: Props) => {
  return (
    <div className=" relative z-[5] border-[1px] border-transparent bg-regal_green">
      <div className=" w-[95%] mx-auto">
        <div className="flex items-start gap-[20px]">
          <div>
            <img src="../nice-area.png" alt="img" />
          </div>
          <div>
            <img src="../lounge.png" alt="img" />
          </div>
        </div>
        <div className="flex flex-col gap-[40px] my-[50px]">
          <h2 className=" text-[28px] relative z-[2] font-miracle text-white_text">
            At Your Service{" "}
          </h2>
          <p className=" w-[400px] font-helvetica text-white_text leading-7">
            The team of the Safe Restaurant aims to exceed all expectations of
            our guests. Our chef worked hard to develop a unique menu that
            features the best meals of the European cuisine that will match the
            tastes of the most demanding clients. Friendly and attentive waiters
            will ensure that you will enjoy your time in our restaurant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
