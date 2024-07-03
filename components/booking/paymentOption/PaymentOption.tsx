import {
  getAmount,
  getPaymentMethod,
  getPaymentStatus,
} from "@/app/GlobalRedux/features/user";
import { AppDispatch, RootState } from "@/app/GlobalRedux/store";
import FormAnimation from "@/components/animation/FormAnimation";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-select";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  setActiveForm: (arg: number) => void;
};

const PaymentOption = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id, email } = useSelector(
    (state: RootState) => state.userSlice.value
  );

  const confirmPayment = async () => {
    const amount = 100;

    const res = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_BASE_PAYMENT_URL}/id/${id}/amount/${
        amount * 100
      }/email/${email}`,
      data: {
        paymentStatus: "paid",
        amount: amount,
        email: email,
      },
    });

    if (res.data) {
      const response = res.data?.data?.authorization_url;
      window.location.href = response;
    }
  };

  return (
    <FormAnimation>
      <div className="min-[600px]:w-[70%] max-[600px]:w-[90%] m-auto">
        <h2 className=" font-helvetica scroll-m-20 text-2xl text-text_royal_green font-semibold mb-3 tracking-tight">
          Choose a payment Option
        </h2>
        <div className="my-3 flex flex-col gap-3">
          <div className="flex font-helvetica items-center justify-between gap-2">
            <p>Total </p>
            <p> NGN10,000 </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p>Taxes and fees </p>
            <p> NGN200 </p>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between">
            <p>Total Amount</p>
            <p>NGN 10,200 </p>
          </div>
          <Button onClick={confirmPayment} className="w-full my-1">
            Proceed to payments{" "}
          </Button>
          <p className="text-center font-helvetica">
            Pay with cash instead?{" "}
            <span
              className="cursor-pointer  text-blue-600"
              onClick={() => {
                dispatch(getAmount("10000"));
                dispatch(getPaymentMethod("Cash"));
                dispatch(getPaymentStatus("Processing"));
                props.setActiveForm(5);
              }}
            >
              Generate Receipt{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </FormAnimation>
  );
};

export default PaymentOption;
