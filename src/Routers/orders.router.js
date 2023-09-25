const express = require("express");
const ordersRouter = express.Router();
const { isUser } = require("../Middlewares/authorization");
const {
  allOrders,
  createOrders,
  updateOrders,
  deleteOrders,
} = require("../Handlers/orders.handler");

ordersRouter.get("/", allOrders);
ordersRouter.post("/:id_user", isUser, createOrders);
ordersRouter.patch("/:id", isUser, updateOrders);
ordersRouter.delete("/:id", isUser, deleteOrders);
module.exports = ordersRouter;
