const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };
