const express = require("express");
const categoriesRouter = express.Router();
const {
  allCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../Handlers/categories.handler");
const { isAdmin } = require("../Middlewares/authorization");
categoriesRouter.get("/", allCategory);

categoriesRouter.post("/", isAdmin, createCategory);

categoriesRouter.patch("/:id", isAdmin, updateCategory);

categoriesRouter.delete("/:id", isAdmin, deleteCategory);

module.exports = categoriesRouter;
