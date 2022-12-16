import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "must provide username"],
  },
  password: {
    type: String,
    required: [true, "must provide password"],
  },
  email: {
    type: String,
    required: [true, "must provide email"],
  },
});

const User = model("User", UserSchema);

export default User;
