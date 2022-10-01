const { Router } = require("express");
const { checkUserAuth } = require("../middleware/authMiddleware");
const ProjectModel = require("../models/projectModel");
const projectRouter = Router();


projectRouter.use(checkUserAuth);



/* --------------For getting the all Projects------------------ */

projectRouter.get("/", async (req, res) => {
const userId = req.body.userId;

  const foundProject = await ProjectModel.find();
  console.log(foundProject);
  if (foundProject.length > 0) {
    res.status(200).send(foundProject);
  } else {
    return res.send({ message: "First create a Project" });
  }
});


/* --------------For getting a single Project------------------ */

projectRouter.get("/:projectId", async (req, res) => {
  const { projectId } = req.params;
  // console.log("projectId", projectId);
  const foundProject = await ProjectModel.findById({ _id: projectId });

  if (foundProject) {
    return res.status(200).send(project);
  } else {
    return res.status(404).send({ message: "Project doesn't exists" });
  }
});



/* --------------For creating a project ------------------ */

projectRouter.post("/create", async (req, res) => {
  const { name, userId, email } = req.body;
  // console.log(name,userId);
  try{
    const newProject = new ProjectModel({
      name,
      userId,
      email,
    });
  
    await newProject.save();
    return res.status(201).json({
      message: "Project created",
      status: "success",
      project: newProject,
    });
  }catch(err){
    res.send(err);
  }
 
});


/* --------------For updating  a single Project------------------ */

projectRouter.patch("/edit/:projectId", async (req, res) => {
  const { projectId } = req.params;

  const foundProject = await ProjectModel.findById({ _id: projectId });

  if (foundProject) {
    await ProjectModel.findByIdAndUpdate(
      { _id: projectId, userId: req.body.userId },
      req.body,
      { new: true }
    );
    return res.send({ message: "Update success", status: "success" });
  } else {
    return res
      .staus(404)
      .send({ message: "Couldn't found the project", status: "error" });
  }
});


/* --------------For deleting a single product----------------- */

projectRouter.delete("/delete/:projectId", async (req, res) => {
  const { projectId } = req.params;

  const foundProject = await ProjectModel.findById({ _id: projectId });

  if (foundProject) {
    await ProjectModel.deleteOne({ _id: projectId });
    return res
      .status(200)
      .send({ message: "delete success", status: "success" });
  } else {
    return res.status(404).send({
      message: "Couldn't found the project",
      status: "error",
    });
  }
});

module.exports = { projectRouter };
