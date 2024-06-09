import React from "react";

type Props = {};

const Faq = (props: Props) => {
  return (
    <div className="bg-off-white font-helvetica border-2 border-transparent pb-[80px]  border-solid">
      <div className=" flex items-center justify-between gap-[10px] w-[95%] h-[100vh]  mx-auto">
        <div className="w-[100px]">
          <img src="./button_down.png" alt="img" />
        </div>
        <div className="flex flex-col items-start justify-between gap-[30px] h-[50%] w-[500px]">
          <h2 className="scroll-m-20 border-b pb-2 text-5xl font-medium tracking-tight first:mt-0">
            01
          </h2>
          <div>
            <h2 className="flex flex-col gap-[5px] items-start scroll-m-20 pb-2 text-5xl font-miracle font-normal tracking-[.10em] first:mt-0">
              <span>Ice</span> <span>Restaurant</span>
            </h2>
            <p className="leading-7 font-helvetica [&:not(:first-child)]:mt-2">
              The hotel’s exclusive infrastructure is complemented by the unique
              atmosphere of the Safe Restaurant. Author’s menu, extensive wine
              card, and live music will set you for the correct mood.
            </p>
          </div>
        </div>
        <div className="max-w-[500px] ">
          <img className="" src="./waiting_room.png" alt="img" />
        </div>
      </div>
      <div className="w-[95%] mx-auto">
        <div className="flex flex-col gap-[30px] items-start w-full">
          <div className="flex justify-between items-center w-full border-b-2 pb-[25px] gap-[10px]">
            <div className="w-[250px]">
              <img src="./white_exterior.png" alt="img" />
            </div>
            <h3 className="scroll-m-20 text-4xl font-miracle font-normal tracking-[.10em]">
              02
            </h3>
            <h3 className="scroll-m-20 text-4xl font-miracle font-normal tracking-[.10em]">
              Conference Hall{" "}
            </h3>
            <span className="cursor-pointer">
              <svg
                width="93"
                height="42"
                viewBox="0 0 93 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.3438 1C70.3438 1 71.888 6.83333 76.5207 11.8333C81.1535 16.8333 88.8747 21 88.8747 21C88.8747 21 81.1535 25.1667 76.5207 30.1667C71.888 35.1667 70.3438 41 70.3438 41"
                  stroke="#313F38"
                  stroke-width="3"
                />
                <rect
                  x="0.5"
                  y="21.6426"
                  width="1.28571"
                  height="85.982"
                  transform="rotate(-90 0.5 21.6426)"
                  fill="#313F38"
                  stroke="#313F38"
                />
              </svg>
            </span>
          </div>

          <div className="flex justify-between items-center gap-[10px] w-full border-b-2 pb-[25px]">
            <div className="w-[250px]">
              <img src="./drink_chairs.png" alt="img" />
            </div>
            <h3 className="scroll-m-20 text-4xl font-miracle font-normal tracking-[.10em]">
              03
            </h3>
            <h3 className="scroll-m-20 text-4xl font-miracle font-normal tracking-[.10em]">
              Wine Bar "Reserve"{" "}
            </h3>
            <span className="cursor-pointer">
              <svg
                width="93"
                height="42"
                viewBox="0 0 93 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.3438 1C70.3438 1 71.888 6.83333 76.5207 11.8333C81.1535 16.8333 88.8747 21 88.8747 21C88.8747 21 81.1535 25.1667 76.5207 30.1667C71.888 35.1667 70.3438 41 70.3438 41"
                  stroke="#313F38"
                  stroke-width="3"
                />
                <rect
                  x="0.5"
                  y="21.6426"
                  width="1.28571"
                  height="85.982"
                  transform="rotate(-90 0.5 21.6426)"
                  fill="#313F38"
                  stroke="#313F38"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
