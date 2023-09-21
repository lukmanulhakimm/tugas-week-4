const express = require("express");
const usersRouter = express.Router();
const {
  allUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../Handlers/users.handler");

usersRouter.get("/", allUsers);
usersRouter.post("/", createUsers);
usersRouter.patch("/:id", updateUsers);
usersRouter.delete("/:id", deleteUsers);
module.exports = usersRouter;
