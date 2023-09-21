// menghubungkan semua router
const express = require("express");
const mainRouter = express.Router();
// import file
const categoriesRouter = require("./categories.router");
const productsRouter = require("./products.router");
const imagesRouter = require("./images.router");
const promosRouter = require("./promos.router");
const ordersRouter = require("./orders.router");
const usersRouter = require("./users.router");
const orderDetailRouter = require("./orderDetail.router");

mainRouter.use("/categories", categoriesRouter);
mainRouter.use("/products", productsRouter);
mainRouter.use("/images", imagesRouter);
mainRouter.use("/promos", promosRouter);
mainRouter.use("/orders", ordersRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/order-detail", orderDetailRouter);

module.exports = mainRouter;
