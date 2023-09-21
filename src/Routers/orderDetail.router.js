const express = require("express");
const orderDetailRouter = express.Router();
const {
  allOrderDetail,
  createOrderDetail,
  updateOrderDetail,
  deleteOrderDetail,
} = require("../Handlers/orderDetail.handler");

orderDetailRouter.get("/", allOrderDetail);
orderDetailRouter.post("/:id_product/:id_order", createOrderDetail);
orderDetailRouter.patch("/:id_product", updateOrderDetail);
orderDetailRouter.delete("/:id_product", deleteOrderDetail);

module.exports = orderDetailRouter;
