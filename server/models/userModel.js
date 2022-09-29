import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
