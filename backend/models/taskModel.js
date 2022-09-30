const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  {
        title: { type: String, required: true },
        description: { type: String, required: true, trim: true},
        projectId: { type: String, required: true }

    },
    { versionKey: false, timestamps: true }
);

const TaskModel = mongoose.model("task", taskSchema);
module.exports = { TaskModel };









