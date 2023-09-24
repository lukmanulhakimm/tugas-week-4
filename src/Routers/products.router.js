const express = require("express");
const productsRouter = express.Router();

const {
  allProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../Handlers/products.handler");
const { isAdmin } = require("../Middlewares/authorization");
productsRouter.get("/", allProducts);
productsRouter.post("/", isAdmin, createProducts);
productsRouter.patch("/:id", isAdmin, updateProducts);
productsRouter.delete("/:id", isAdmin, deleteProducts);

module.exports = productsRouter;
