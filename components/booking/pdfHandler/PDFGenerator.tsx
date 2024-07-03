import React from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/GlobalRedux/store";
import { useDispatch } from "react-redux";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Button } from "@/components/ui/button";
import Moment from "moment";

interface IProps {
  setActiveForm: (arg: number) => void;
}

const PDFGenerator: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    id,
    name,
    email,
    checkIn,
    checkOut,
    amount,
    paymentStatus,
    paymentMethod,
    roomDetails,
  } = useSelector((state: RootState) => state.userSlice.value);

  const generatePDF = () => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const checkInDate = Moment(checkIn).format("ddd, MMM Do YYYY");
    const checkOutDate = Moment(checkOut).format("ddd, MMM Do YYYY");

    const docDefinition: any = {
      content: [
        {
          text: "BankHotel Suites",
          style: "header",
          alignment: "center",
        },
        {
          text: "Invoice Statement",
          style: "subheader",
          alignment: "center",
        },
        {
          text: `Guest ID: ${id} `,
          style: "entry",
        },
        {
          text: `Payment Method: ${paymentMethod} `,
          style: "entry",
        },
        {
          alignment: "justify",
          style: "entry",
          columns: [
            {
              text: `Name: ${name}`,
            },
            {
              text: `Email: ${email}`,
            },
          ],
        },
        {
          alignment: "justify",
          style: "ent",
          columns: [
            {
              text: `Check-In-Date: ${checkInDate}`,
            },
            {
              text: `Check-Out-Dates: ${checkOutDate}`,
            },
          ],
        },
        {
          alignment: "justify",
          style: "ent",
          columns: [
            {
              text: `Amount: N${amount}.00 only`,
            },
            {
              text: `Payment status: ${paymentStatus}`,
            },
          ],
        },
        // {
        //   image: photo,
        //   width: 200,
        //   height: 200,
        //   alignment: "center",
        //   borderRadius: "50%",
        // },
        {
          text: "Room Details:",
          style: "subheader",
        },
        ...(roomDetails ?? []).map((room) => [
          {
            alignment: "justify",
            style: "entry",
            columns: [
              {
                text: `Rooms Taken: ${room.numberOfRooms}`,
              },
              {
                text: `Room Service: ${room.roomService}`,
              },
            ],
          },
          {
            text: `Room Description: ${room.roomDescription}`,
            style: "roomDescription",
          },
        ]),

        {
          text:
            "This document is copyrighted by BankHotel and retain the right to withold the document if the bearer is found liable to have cheated",
          style: "entry",
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment: "center",
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 20, 0, 10],
        },
        entry: {
          margin: [0, 10, 0, 10],
        },
        ent: {
          margin: [0, 10, 0, 10],
        },
        roomDescription: {
          margin: [0, 10, 0, 10],
        },
      },
    };
    pdfMake.createPdf(docDefinition).download("BankHotel_confirmation.pdf");
  };

  return (
    <div className=" flex justify-center items-center h-full w-full ">
      <div className="flex items-center gap-4">
        <Button
          className="bg-white border-2 border-black text-black hover:text-white"
          onClick={() => props.setActiveForm(1)}
        >
          {" "}
          Refill form{" "}
        </Button>
        <Button onClick={generatePDF}>Download PDF </Button>
      </div>
    </div>
  );
};

export default PDFGenerator;
