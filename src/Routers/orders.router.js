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
ordersRouter.post("/:id_user", createOrders);
ordersRouter.patch("/:id", updateOrders);
ordersRouter.delete("/:id", deleteOrders);
module.exports = ordersRouter;
