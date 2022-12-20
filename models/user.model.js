import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Must provide username"],
  },
  displayName: {
    type: String,
    required: [true, "Must provide display name"],
  },
  email: {
    type: String,
    required: [true, "Must provide email"],
  },
  password: {
    type: String,
    required: [true, "Must provide password"],
  },
  role: {
    type: String,
    enum: ["default", "mod", "admin"], // possible values
    default: "default", // default value
  },
});

const User = model("User", UserSchema);

export default User;
