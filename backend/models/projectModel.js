const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true },
    email: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
