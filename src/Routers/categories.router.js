const express = require("express");
const categoriesRouter = express.Router();
const {
  allCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../Handlers/categories.handler");
categoriesRouter.get("/", allCategory);

categoriesRouter.post("/", createCategory);

categoriesRouter.patch("/:id", updateCategory);

categoriesRouter.delete("/:id", deleteCategory);

module.exports = categoriesRouter;
