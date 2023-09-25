// menghubungkan semua router
const express = require("express");
const mainRouter = express.Router();
const fs = require("fs");
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
const { singleUpload } = require("../Middlewares/diskUpload");
const { create } = require("../Models/images.model");
const { update } = require("../Models/images.model");
const { readById } = require("../Models/images.model");

mainRouter.post("/upload", singleUpload("image"), async (req, res) => {
  // console.log(req.file);
  if (!req.file) return res.status(422).json({ msg: "file not valid" });
  try {
    const filename = req.file.filename;
    const body = req.body;
    await create(filename, body.id_product);
    res.status(200).json({ msg: " data berhasil di upload" });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ msg: "internal server error" });
  }
});

mainRouter.patch("/update", singleUpload("image"), async (req, res) => {
  try {
    const body = req.body;
    const query = req.query;
    const filename = req.file?.filename || undefined;
    const result = await readById(query.id);
    if (result.rows.length < 1) {
      return res.status(404).json({ msg: "image not found" });
    }
    // menghapus file
    fs.unlink("public/img/" + result.rows[0].image, function (err) {
      if (err) throw err;
    });
    console.log(filename, body.id_product, query.id);
    const tes = await update(filename, body.id_product, query.id);
    console.log(tes);
    res.status(200).json({
      msg: `image sudah berubah`,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
});

mainRouter.use("/categories", isLogin, categoriesRouter);
mainRouter.use("/products", isLogin, productsRouter);
mainRouter.use("/images", isLogin, imagesRouter);
mainRouter.use("/promos", isLogin, promosRouter);
mainRouter.use("/orders", isLogin, ordersRouter);
mainRouter.use("/users", isLogin, isAdmin, usersRouter);
mainRouter.use("/order-detail", orderDetailRouter);
mainRouter.use("/auth", authRouter);

module.exports = mainRouter;
