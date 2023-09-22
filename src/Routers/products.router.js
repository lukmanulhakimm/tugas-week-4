const express = require("express");
const productsRouter = express.Router();
const {
  allProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../Handlers/products.handler");
productsRouter.get("/", allProducts);
productsRouter.post("/", createProducts);
productsRouter.patch("/:id", updateProducts);
productsRouter.delete("/:id", deleteProducts);

module.exports = productsRouter;
