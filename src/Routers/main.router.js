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
const authRouter = require("./auth.router");

const { isLogin, isAdmin, isUser } = require("../Middlewares/authorization");

mainRouter.use("/categories", categoriesRouter);
mainRouter.use("/products", isLogin, productsRouter);
mainRouter.use("/images", isLogin, imagesRouter);
mainRouter.use("/promos", isLogin, promosRouter);
mainRouter.use("/orders", isLogin, ordersRouter);
mainRouter.use("/users", isLogin, isAdmin, usersRouter);
mainRouter.use("/order-detail", orderDetailRouter);
mainRouter.use("/auth", authRouter);

module.exports = mainRouter;
