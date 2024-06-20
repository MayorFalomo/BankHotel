import React from "react";
import room from "../../../public/room-image.webp";
type Props = {};

const RoomHero = (props: Props) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(../room_hero.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundAttachment: "fixed",
        }}
        className="relative w-[100%] h-[90vh] "
      >
        <img
          className=" absolute left-0 top-[45%] hidden max-[450px]:flex "
          src="../roomVector16.svg"
          alt="img"
        />
        <h1 className="absolute leading-[70px] left-[20px] top-[40px] z-[1] text-start flex flex-col gap-[45px] 2xl:text-[100px] lg:text-[80px] sm:text-[80px] text-[80px] max-[480px]:text-[70px]  text-golden_yellow font-miracle">
          <span>Superior</span> <span> twin </span>{" "}
        </h1>
        <p className="absolute left-[20px] bottom-[100px] md:w-[400px] max-sm:w-[400px]  max-xl:w-[400px] max-[500px]:hidden leading-7 [&:not(:first-child)]: mt-3 lg:text-[17px] sm:text-[16px] max-sm:text-[14px] font-helvetica text-golden_yellow ">
          ALL ROOM DECORATION WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE
          MATERIALS
        </p>
        <div className="absolute right-[30px] bottom-[30px] md:w-[150px] sm:w-[120px] max-sm:w-[100px] max-[400px]:bottom-[-50px]">
          <img src="../coloured_wavy_btn.webp" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default RoomHero;
