import User from "./models/User.js";

export const resolvers = {
  Query: {
    //Query to return a single user by their id
    users: async (_, args) => {
      return User.findById(args.id);
    },
  },
  Mutation: {
    createNewUser: async (_, args) => {
      let user = {
        ...args.user,
        // _id: "463f3c41940cb5234dc71t1b",
        // userId: "463f3c41940cb5234dc71t1b",
      };
      const newUser = new User(user);
      const createdUser = await newUser.save();
      return createdUser;
    },
  },
};
