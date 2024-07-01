import User from "../models/User.js";
import https from "https";

export const handlePayments = async (req, res) => {
  const { id, amount, email, paymentStatus } = req.params;
  try {
    const user = await User.findById(id);
    user.amount = amount;

    //For paystack
    const params = JSON.stringify({
      email: email,
      amount: amount,
      paymentStatus: paymentStatus,
    });

    const options = {
      hostname: `${process.env.HOSTNAME}`,
      port: 443,
      path: "/transaction/initialize",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    };

    const reqpaystack = https
      .request(options, (respaystack) => {
        let data = "";

        respaystack.on("data", (chunk) => {
          data += chunk;
        });

        respaystack.on("end", () => {
          res.send(data);
          //   console.log(JSON.parse(data));
        });
      })
      .on("error", (error) => {
        console.error(error);
      });
    reqpaystack.write(params);
    reqpaystack.end();
    console.log(reqpaystack, "reqpay");
    user.paymentStatus = "paid";
    await user.save();
  } catch (error) {
    console.log(error);
  }
};
