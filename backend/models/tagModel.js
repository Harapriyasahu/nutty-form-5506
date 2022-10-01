const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    userId: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const TagModel = mongoose.model("tag", tagSchema);
module.exports = { TagModel };
