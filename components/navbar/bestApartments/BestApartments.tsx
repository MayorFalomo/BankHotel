import React from "react";

type Props = {};

const BestApartments = (props: Props) => {
  return (
    <div>
      <div className="relative">
        <img src="./best-room.png" alt="img" />
        <h1 className="absolute left-[30px] top-[50px] scroll-m-20 text-6xl font-normal tracking-tight first:mt-0 text-golden_yellow">
          BEST APARTMENTS{" "}
        </h1>
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          src="./Vector16.svg"
          alt="img"
        />
        <p className="absolute top-1/2 transform -translate-y-1/2 text-golden_yellow ">
          All room decoration was made with ecological certified and safe
          materials.
        </p>
      </div>
    </div>
  );
};

export default BestApartments;
