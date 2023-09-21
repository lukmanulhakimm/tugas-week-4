const express = require("express");
const imagesRouter = express.Router();

const {
  allImages,
  createImages,
  updateImages,
  deleteImages,
} = require("../Handlers/images.handler");

imagesRouter.get("/", allImages);
imagesRouter.post("/:id_product", createImages);
imagesRouter.patch("/:id/:id_product", updateImages);
imagesRouter.delete("/:id", deleteImages);

module.exports = imagesRouter;
