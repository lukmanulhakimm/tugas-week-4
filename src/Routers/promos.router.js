const express = require("express");
const promosRouter = express.Router();
const {
  allPromos,
  createPromos,
  updatePromos,
  deletePromos,
} = require("../Handlers/promos.handler");
promosRouter.get("/", allPromos);
promosRouter.post("/", createPromos);
promosRouter.patch("/:id", updatePromos);
promosRouter.delete("/:id", deletePromos);

module.exports = promosRouter;
