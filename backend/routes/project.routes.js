const { Router } = require("express");
const ProjectModel = require("../models/projectModel");

const projectRouter = Router();

projectRouter.get("/", async (req, res) => {
  const { userId } = req.body;
  const project = await ProjectModel.find({ userId });
  if (project.length > 0) {
    res.send(project);
  } else {
    return res.send({ message: "failed" });
  }
});

projectRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  const project = await ProjectModel.findOne({ _id: id });

  if (project) {
    return res.send(project);
  } else {
    return res.send({ message: "failed" });
  }
});

projectRouter.post("/create", async (req, res) => {
  const { name, userId, email } = req.body;
  // console.log(name,userId);
  const newProject = new ProjectModel({
    name,
    userId,
    email,
  });

  await newProject.save();
  return res.status(201).json({
    message: "Project created",
    status: "Success",
    project: newProject,
  });
});

module.exports = projectRouter;
