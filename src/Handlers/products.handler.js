const {
  read,
  create,
  update,
  del,
  search,
  orderBy,
  page,
  readById,
} = require("../Models/products.model");

const allProducts = async (req, res) => {
  try {
    const result = await read();
    res.status(200).json({
      msg: "sukses",
      result: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const createProducts = async (req, res) => {
  try {
    const { body } = req;
    await create(
      body.name_product,
      body.description,
      body.price,
      body.size,
      body.stock,
      body.method_product,
      body.id_category,
      body.id_promo
    );
    res.status(201).json({
      msg: "products baru sukses",
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const updateProducts = async (req, res) => {
  try {
    const { body, params } = req;
    const toUpdate = await readById(params.id);
    console.log("isinya", toUpdate);
    if (toUpdate.rows.length - 1)
      res.status(404).json({ msg: "data not found" });
    let rows = toUpdate.rows[0];
    if (body.name_product) rows.name_product = body.name_product;
    if (body.price) rows.price = body.price;
    if (body.size) rows.size = body.size;
    if (body.stock) rows.stock = body.stock;

    await update(
      rows.name_product,
      rows.price,
      rows.size,
      rows.stock,
      params.id
    );
    res.status(200).json({
      msg: `update sukses`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const deleteProducts = async (req, res) => {
  try {
    const { params } = req;

    await del(params.id);
    res.status(200).json({
      msg: `product dengan id ${params.id} berhasil dihapus`,
    });
  } catch (error) {
    console.log(error);
    if (error.code === "23503")
      return res.status(403).json({ msg: "delete di tolak " });
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const searchProducts = async (req, res) => {
  try {
    const { query } = req;

    const result = await search(query.name);
    if (result.rows.length === 0)
      return res.status(404).json({
        msg: " data tidak ditemukan",
      });
    res.status(200).json({
      msg: "sukses",
      result: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const orderByProducts = async (req, res) => {
  try {
    const { query } = req;

    const result = await orderBy(
      query.name,
      query.price,
      query.order_name,
      query.order_price,
      query.date
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        msg: " data tidak ditemukan",
      });
    res.status(200).json({
      msg: " sukses menampilkan data",
      result: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const paginationProducts = async (req, res) => {
  try {
    const { query } = req;

    const result = await page(query.limit, query.page);
    res.status(200).json({
      msg: " sukses menampilkan data",
      result: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

module.exports = {
  allProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  searchProducts,
  orderByProducts,
  paginationProducts,
};
