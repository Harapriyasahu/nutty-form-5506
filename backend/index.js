const express = require("express");
const cors =require("cors");
const { connection } = require("./config/db.js");
const { userRouter } = require("./routes/user.routes.js");
const { projectRouter } = require("./routes/project.routes.js");
const { tagRouter } = require("./routes/tag.routes.js");
const taskRouter = require("./routes/Task.routes.js");

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());


app.use("/",userRouter);
app.use("/app/projects", projectRouter);
app.use("/app/tags",tagRouter);
app.use("/tasks",taskRouter);

app.get("/",( req,res)=>{
  res.send("Welcome to backend server home page");
});

app.listen(port, async () => {
  try {
    await connection;
    console.log(`app is listening on port ${port}`)
    console.log("conneted to DB");
  } catch (error) {
    console.log(error);
  }
});
