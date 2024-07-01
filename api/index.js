import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./route/userRoute.js";
import paymentRouter from "./route/paymentsHandler.js";
const app = express();
const port = 7000;
dotEnv.config({ path: "./vars/.env" });

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected To MongoDB"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api", userRouter);
app.use("/api", paymentRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
