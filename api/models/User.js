import mongoose from "mongoose";
("mongoose");

const UserSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: String,
    //   required: false,
    // },
    userId: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
      unique: false,
    },

    profileDp: {
      type: String,
      required: false,
      default:
        "https://i.pinimg.com/564x/33/f4/d8/33f4d8c6de4d69b21652512cbc30bb05.jpg",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    checkIn: {
      type: String,
      required: false,
    },
    checkOut: {
      type: String,
      required: false,
    },
    amount: {
      type: Number,
      required: false,
    },
    paymentStatus: {
      type: String,
      required: false,
    },
    roomDetails: [
      // {
      //   roomType: "",
      //   numberOfRooms: "",
      //   roomService: "",
      //   roomDescription: "",
      //   roomNumber: "",
      // },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
