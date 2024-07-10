import React from "react";

type Props = {};

const Faq = (props: Props) => {
  return (
    <div className="bg-off-white font-helvetica border-2 border-transparent pb-[80px]  border-solid">
      <div className=" flex items-center justify-between gap-[10px] w-[95%] h-[100vh] max-[580px]:h-full mx-auto max-[580px]:flex-col-reverse max-[580px]:my-[20px]">
        <div className="hidden min-[580px]:flex w-[100px]">
          <img src="./button_down.webp" alt="img" />
        </div>
        <div className="flex flex-col items-start justify-between gap-[30px] h-[50%] w-[500px] max-[580px]:w-full max-[580px]:h-full ">
          <h2 className="scroll-m-20 border-b pb-2 text-5xl font-medium tracking-tight first:mt-0">
            01
          </h2>
          <div className=" max-[580px]:flex  max-[580px]:flex-row-reverse max-[580px]:gap-[20px]  max-[580px]:items-center w-full">
            <div className="">
              <h2 className="flex flex-col gap-[5px] items-start scroll-m-20 pb-2 text-5xl font-miracle font-normal tracking-[.10em] first:mt-0">
                <span>Ice</span> <span>Restaurant</span>
              </h2>

              <p className="leading-7 font-helvetica [&:not(:first-child)]:mt-2">
                The hotel’s exclusive infrastructure is complemented by the
                unique atmosphere of the Safe Restaurant. Author’s menu,
                extensive wine card, and live music will set you for the correct
                mood.
              </p>
            </div>
            <div className="flex min-[580px]:hidden min-w-[50px]">
              <img src="./button_down.webp" alt="img" />
            </div>
          </div>
        </div>
        <div className="max-w-[500px] max-[580px]:max-w-full">
          <img className="" src="./waiting_room.webp" alt="img" />
        </div>
      </div>
      <div className="w-[95%] mx-auto">
        <div className="flex flex-col gap-[30px] items-start w-full">
          <div className="flex justify-between items-center w-full border-b-2 pb-[25px] gap-[10px] max-[780px]:flex-col">
            <div className="flex items-start justify-between max-[780px]:w-full gap-[20px]">
              <div className="w-[250px] max-[770px]:mx-auto">
                <img src="./white_exterior.webp" alt="img" />
              </div>
              <h3 className="scroll-m-20 text-4xl max-[780px]:text-[30px] font-miracle font-normal tracking-[.10em] hidden max-[780px]:flex max-[770px]:text-end">
                02
              </h3>
            </div>
            <h3 className="scroll-m-20 text-4xl max-[550px]:text-[24px] font-miracle font-normal tracking-[.10em] flex max-[780px]:hidden">
              02
            </h3>
            <h3 className="scroll-m-20 text-4xl max-[780px]:text-[30px]  font-miracle font-normal tracking-[.10em]">
              Conference Hall{" "}
            </h3>
            <span className="">
              <svg
                className="min-[900px]:w-[90px] max-[900px]:w-[60px] max-[780px]:hidden"
                width="43"
                height="42"
                viewBox="0 0 93 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.3438 1C70.3438 1 71.888 6.83333 76.5207 11.8333C81.1535 16.8333 88.8747 21 88.8747 21C88.8747 21 81.1535 25.1667 76.5207 30.1667C71.888 35.1667 70.3438 41 70.3438 41"
                  stroke="#313F38"
                  strokeWidth="3"
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

          <div className="flex justify-between items-center mx-auto w-full border-b-2 pb-[25px] gap-[10px] max-[780px]:flex-col">
            <div className="flex items-start justify-between max-[780px]:w-full gap-[10px]">
              <div className="w-[250px] max-[780px]:mx-auto">
                <img src="./drink_chairs.webp" alt="img" />
              </div>
              <h3 className="scroll-m-20 text-4xl max-[780px]:text-[30px] max-[550px]:text-[24px] font-miracle font-normal tracking-[.10em] hidden max-[780px]:flex max-[780px]:text-end">
                03
              </h3>
            </div>
            <h3 className="scroll-m-20 text-4xl font-miracle font-normal tracking-[.10em] flex max-[780px]:hidden">
              03
            </h3>
            <h3 className="scroll-m-20 text-4xl max-[780px]:text-[30px] font-miracle font-normal tracking-[.10em]">
              Wine Bar "Reserve
            </h3>
            <span className="">
              <svg
                className="min-[900px]:w-[90px] max-[900px]:w-[60px] max-[780px]:hidden"
                width="43"
                height="42"
                viewBox="0 0 93 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.3438 1C70.3438 1 71.888 6.83333 76.5207 11.8333C81.1535 16.8333 88.8747 21 88.8747 21C88.8747 21 81.1535 25.1667 76.5207 30.1667C71.888 35.1667 70.3438 41 70.3438 41"
                  stroke="#313F38"
                  strokeWidth="3"
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
