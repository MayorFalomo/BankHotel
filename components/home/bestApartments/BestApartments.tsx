import React from "react";

type Props = {};

const BestApartments: React.FC = (props: Props) => {
  return (
    <div className="">
      <div className="h-[90vh]">
        <div className="h-[100%] w-full relative">
          <img className="w-full h-full" src="./best-room.png" alt="img" />
          <h1 className="absolute left-[30px] top-[50px] scroll-m-20 text-7xl font-normal tracking-tight first:mt-0 text-golden_yellow">
            BEST APARTMENTS{" "}
          </h1>
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            src="./Vector16.svg"
            alt="img"
          />
          <p className="absolute top-1/2 left-[30px] transform -translate-y-1/2 text-golden_yellow font-helvetica text-[20px] w-[300px] ">
            All room decoration was made with ecological certified and safe
            materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestApartments;
