const express = require("express");
const { Router } = require("express");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userModel");
require("dotenv").config();

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const isEmailPresent = await UserModel.findOne({ email });
    // console.log(isEmailPresent);
    if (isEmailPresent) {
      res
        .status(400)
        .send({ status: "Failed", message: "Email already exists" });
    } else {
      bcrypt
        .hash(password, 10)
        .then(async function (hash) {
          const newUser = new UserModel({ ...req.body, password: hash });
          await newUser.save();

          return res.status(201).send({
            message: "Signup Sussessfull",
            status: "success",
            user: newUser,
          });
        })
        .catch((err) => {
          // console.log(err);

          return res
            .status(400)
            .send({ status: "Failed", message: "Unable to Register" });
        });
    }
  } catch (err) {
    res.send(err);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await UserModel.findOne({ email });
      //   console.log(user);
      if (user) {
        let hash = user.password;
        bcrypt.compare(password, hash, function (err, result) {
          if (err) {
            return res.send({
              message: "Something went wrong, plz try again later",
              status: "error",
            });
          }
          if (result) {
            const token = jwt.sign(
              { userId: user._id, email: email },
              process.env.JWT_SECRET_KEY,
              {
                expiresIn: "5h",
              }
            );
            return res.status(200).send({
              status: "success",
              message: "Login Successfull!!!",
              token: token,
              user: user,
            });
          } else {
            return res
              .status(400)
              .send({ status: "error", message: "Invalid Credentials" });
          }
        });
      } else {
        return res
          .status(400)
          .send({ status: "error", message: "Invalid Credentials" });
      }
    } else {
      return res
        .status(400)
        .send({ status: "error", message: "All Fields are Required" });
    }
  } catch (err) {
    // console.log(err);
    return res
      .status(400)
      .send({ status: "error", message: "Unable to Login" });
  }
});

userRouter.post("/forgotten_password", async (req, res) => {
  const { email } = req.body;
  if (email) {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "15m",
      });
      const link = `http://localhost:3000/api/reset-password/${user._id}/${token}`;

      console.log(link);

      let info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: "TimeCamp - Password Reset Link",
        html: `It seems you have forgotten your TimeCamp password. That's OK, it happens to the best of us! Would you like to reset your password:<a href=${link}>Click Here</a> to Reset Your Password
          <p> If you do not wish to reset your password, ignore this message. It will expire in 15 minutes.</p>
          `,
      });
      res.send({
        status: "success",
        message: "Password Reset Email Sent... Please Check Your Email",
      });
    } else {
      res
        .status(400)
        .send({ status: "failed", message: "Email doesn't exists" });
    }
  } else {
    res
      .status(400)
      .send({ status: "failed", message: "Email Field is Required" });
  }
});

module.exports = { userRouter };
