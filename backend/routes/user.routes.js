const express = require("express");
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UserModel } = require("../models/userModel.js");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const isEmailPresent = await UserModel.findOne({ email });
  // console.log(isEmailPresent);
  if (isEmailPresent) {
    res.status(400).send({ status: "Failed", message: "Email already exists" });
  } else {
    bcrypt
      .hash(password, 10)
      .then(async function (hash) {
        const newUser = new UserModel({ ...req.body, password: hash });
        await newUser.save();
        return res.status(201).json({
          message: "Signup Sussessfull",
          status: "Success",
          user: newUser,
        });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(400)
          .send({ status: "Failed", message: "Unable to Register" });
      });
  }
});

userRouter.post("/login", async (req, res) => {
  try{
  const { email, password } = req.body;
  if (email && password) {
    const user = await UserModel.findOne({ email });
    //   console.log(user);
    let hash = user?.password;
    bcrypt.compare(password, hash, function (err, result) {
      if (err) {
        res.send({
          message: "Something went wrong, plz try again later",
          status: "Failed",
        });
      }
      if (result) {
        const token = jwt.sign(
          { userId: user._id,  email: email },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "5h",
          }
        );
        res
          .status(200)
          .send({
            status: "Success",
            message: "Login Success",
            token: token,
            user: user,
          });
      } else {
        res
          .status(400)
          .send({ status: "Failed", message: "Invalid Credentials" });
      }
    });
  } else {
    res
      .status(400)
      .send({ status: "Failed", message: "All Fields are Required" });
  }
}catch(err){
  console.log(err)
  res.status(400).send({ status: "Failed", message: "Unable to Login" })
}
});

module.exports = { userRouter };
