import FormAnimation from "@/components/animation/FormAnimation";
import React from "react";

type Props = {
  setActiveForm: (arg: number) => void;
};

const PaymentOption = (props: Props) => {
  return (
    <FormAnimation>
      <div>
        <h1>Payment Option</h1>
      </div>
    </FormAnimation>
  );
};

export default PaymentOption;
