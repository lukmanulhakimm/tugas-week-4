const express = require("express");
const productsRouter = express.Router();
const {
  allProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  searchProducts,
  orderByProducts,
  paginationProducts,
} = require("../Handlers/products.handler");
productsRouter.get("/", allProducts);
productsRouter.post("/", createProducts);
productsRouter.patch("/:id", updateProducts);
productsRouter.delete("/:id", deleteProducts);
productsRouter.get("/search", searchProducts);
productsRouter.get("/order-by", orderByProducts);
productsRouter.get("/pagination", paginationProducts);

module.exports = productsRouter;
