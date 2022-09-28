
const express = require("express");
const cors =require("cors");
const { connection } = require("./config/db.js");
const { userRouter } = require("./routes/user.routes.js");

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/",userRouter);

app.get("/",( req,res)=>{
  res.send("Welcome to backend server home page");
});

app.listen(port, async () => {
  try {
    await connection;
    console.log(`app is litening on port ${port}`)
    console.log("conneted to db");
  } catch (error) {
    console.log(error);
  }
});
