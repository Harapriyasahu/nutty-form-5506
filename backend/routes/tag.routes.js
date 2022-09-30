const { Router } = require("express");
const { checkUserAuth } = require("../middleware/authMiddleware");
const { TagModel } = require("../models/tagModel");

const tagRouter = Router();

tagRouter.use(checkUserAuth);

/* --------------For getting the all tags------------------ */

tagRouter.get("/", async (req, res) => {
  const userId = req.body.userId;
  const foundTag = await TagModel.find({ _id: userId });
  if (foundTag.length > 0) {
    res.send(foundTag);
  } else {
    return res.send({ message: "First create a tag" });
  }
});

/* --------------For getting a single Tag------------------ */

tagRouter.get("/:tagId", async (req, res) => {
  const { tagId } = req.params;

  const foundTag = await TagModel.findById({ _id: tagId });

  if (foundTag) {
    return res.send(tagId);
  } else {
    return res.send({ message: "tag doesn't exists" });
  }
});

/* --------------For creating a Tag ------------------ */

tagRouter.post("/create", async (req, res) => {
  const { name, userId } = req.body;
  // console.log(name,userId);
  const newTag = new TagModel({
    name,
    userId,
  });

  await newTag.save();
  return res.status(201).json({
    message: "Tag created",
    status: "success",
    tag: newTag,
  });
});

/* --------------For updating  a single Project------------------ */

tagRouter.patch("/edit/:tagId", async (req, res) => {
  const { tagId } = req.params;

  const foundTag = await TagModel.findById({ _id: tagId });

  if (foundTag) {
    await TagModel.findByIdAndUpdate(
      { _id: tagId, userId: req.body.userId },
      req.body,
      { new: true }
    );
    return res.send({ message: "Update success", status: "success" });
  } else {
    return res
      .staus(400)
      .send({ message: "Couldn't found the tag", status: "error" });
  }
});

/* --------------For deleting a single product----------------- */

tagRouter.delete("/delete/:tagId", async (req, res) => {
  const { tagId } = req.params;

  const foundTag = await TagModel.findById({ _id: tagId });

  if (foundTag) {
    await TagModel.deleteOne({ _id: tagId });
    return res
      .status(200)
      .send({ message: "delete success", status: "success" });
  } else {
    return res.send({
      message: "Couldn't found the tag",
      status: "error",
    });
  }
});

module.exports = { tagRouter };
