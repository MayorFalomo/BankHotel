import express from "express";
import {
  newUserInfo,
  paymentStatus,
  userDates,
  usersRoomSpec,
} from "../controllers/user-controller.js";

const userRouter = express.Router();

//ROUTES
userRouter.post("/create-user", newUserInfo);
userRouter.post("/room", usersRoomSpec);
userRouter.post("/save-dates", userDates);
userRouter.post("/update-payment-status", paymentStatus);

export default userRouter;
