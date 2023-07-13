const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../Model/user.model");

// --------------->>>>>>>> Get User List <<<<<<<<-------------------

userRouter.get("/list", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// --------------->>>>>>>> Add New User <<<<<<<<-------------------

userRouter.post("/add", async (req, res) => {
  try {
    const new_user = new UserModel(req.body);
    await new_user.save();
    res.status(200).send({ msg: "New User Added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// --------------->>>>>>>> User Details Update <<<<<<<<-------------------

userRouter.patch("/update/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await UserModel.findByIdAndUpdate(_id, req.body);
    res.status(200).send({ msg: "User Details Updated" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// --------------->>>>>>>> User Delete <<<<<<<<-------------------

userRouter.delete("/delete/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(_id);
    res.status(200).send({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  userRouter,
};
