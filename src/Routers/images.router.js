const express = require("express");
const imagesRouter = express.Router();

const {
  allImages,
  createImages,
  updateImages,
  deleteImages,
} = require("../Handlers/images.handler");
const { isAdmin } = require("../Middlewares/authorization");
const { singleUpload } = require("../Middlewares/diskUpload");

imagesRouter.get("/", allImages);
imagesRouter.post("/:id_product", isAdmin, createImages);
imagesRouter.patch("/:id/:id_product", isAdmin, updateImages);
imagesRouter.delete("/:id", isAdmin, deleteImages);

module.exports = imagesRouter;
