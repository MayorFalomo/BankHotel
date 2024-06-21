import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <div className=" bg-off-white  border-0 border-transparent">
        <div className=" h-[50vh] flex justify-center  items-center">
          <h1
            className={`xl:text-[150px] text-center lg:text-[120px] sm:text-[100px] text-[80px] max-[480px]:text-[70px] font-miracle`}
          >
            <span className=" text-golden_yellow"> CONTACT </span>{" "}
            <span className=" text-text_royal_green">US </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
