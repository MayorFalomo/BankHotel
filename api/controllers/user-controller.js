import User from "../models/User.js";

export const newUserInfo = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = {
      name,
      email,
      password,
    };
    // console.log(user, "users");
    const UserData = new User(user);
    const savedUser = await UserData.save();
    // console.log(savedUser, "saved User");
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

export const usersRoomSpec = async (req, res) => {
  const {
    id,
    roomType,
    numberOfRooms,
    roomService,
    roomDescription,
  } = req.body;
  try {
    const user = await User.findById(id);
    user.roomDetails.push({
      roomType,
      numberOfRooms,
      roomService,
      roomDescription,
    });
    // console.log(updatedUser);
    // console.log(user, "new user");
    await user.save();
    res.status(200).json("Saved successfully");
  } catch (error) {
    console.log(error, "Error");
  }
};

export const userDates = async (req, res) => {
  const { id, checkInDate, checkOutDate } = req.body;
  console.log(id);
  try {
    const user = await User.findById(id);
    user.checkIn = checkInDate;
    user.checkOut = checkOutDate;
    await user.save();
    res.status(200).json("Dates saved successfully");
  } catch (error) {
    console.log("An error has occurred");
  }
};

export const paymentStatus = async (req, res) => {
  const { id, paymentStatus } = req.body;
  try {
    const user = await User.findById(id);
    user.paymentStatus = paymentStatus;
    await user.save();
  } catch (error) {
    console.log(error);
  }
};
