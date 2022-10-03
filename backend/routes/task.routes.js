const {Router} = require("express");
const { TaskModel } = require("../models/taskModel");

const taskRouter = Router();


taskRouter.get("/:projectId", async (req,res) => {
    const {projectId} = req.params;

    const foundTasks = await TaskModel.find({projectId})
    
    if(foundTasks.length > 0){
        return res.send(foundTasks);
    }
    else{
        return res.send({messgae:"Please create a tasks first"});
    }
})

taskRouter.get("/singletask/:taskId", async (req,res) => {
    const {taskId} = req.params;

    const foundTask = await TaskModel.findOne({_id:taskId})
    if(foundTask){
        return res.send(foundTask);
    }
    else{
        return res.status(404).send({messgae:"Task doesn't exists"})
    }
});

taskRouter.post("/:projectId/create", async (req,res) => {
    const {projectId} = req.params;
    const {title,description} = req.body;

    try{
        const newTask = new TaskModel({
            title,
            description,
            projectId
        })

        await newTask.save();
        return res.status(201).send({message:"Task Created"})
    }
    catch(err){
        console.log(err);
        return res.status(400).send({message:"Something went wrong"})
    }
    
});



taskRouter.patch("/update/:taskId", async (req,res) => {
    const {taskId} = req.params;

    const foundTask = await TaskModel.findOne({_id:taskId})
    
    if(foundTask){
        await TagModel.findByIdAndUpdate(
            { _id: taskId,  },
            req.body,
            { new: true }
          );
          return res.send({ message: "Update success", status: "success" });
        } else {
          return res
            .staus(400)
            .send({ message: "Couldn't found the tag", status: "error" });
        }
})



taskRouter.delete("/delete/:taskId", async (req,res) => {
    const {taskId} = req.params;

    const foundTask = await TaskModel.findOne({_id:taskId})
    
    if(foundTask){
        await TaskModel.deleteOne({_id:taskId});
        return res
        .status(200)
        .send({ message: "task deleted successfully", status: "success" });
    } else {
      return res.status(404).send({
        message: "Couldn't found the task",
        status: "error",
      });
    }
})


module.exports = taskRouter;