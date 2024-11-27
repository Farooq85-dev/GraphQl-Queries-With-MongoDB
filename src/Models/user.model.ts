import mongoose, { model, Schema } from "mongoose";

const userSechema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    address: {
      type: String,
      required: true,
    },
    hobbies: {
      type: [String],
      required: true,
    },
    courses: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

export const User = model("User", userSechema);
