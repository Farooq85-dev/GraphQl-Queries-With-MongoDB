import { User } from "../Models/user.model";

// Query Resolvers
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const getUserbyId = async (parent: any, args: { id: string }) => {
  try {
    const user = await User.findById(args.id);
    return user;
  } catch (error) {
    console.log(error);
  }
};

// Exporting All Queries
export { getAllUsers, getUserbyId };
