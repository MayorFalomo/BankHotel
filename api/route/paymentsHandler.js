import { handlePayments } from "../controllers/payment.js";
import express from "express";

const paymentRouter = express.Router();

paymentRouter.get(
  "/paystack/id/:id/amount/:amount/email/:email",
  handlePayments
);

export default paymentRouter;
