const {
  read,
  create,
  update,
  del,
  readById,
  search,
  getTotalData,
} = require("../Models/products.model");

const allProducts = async (req, res) => {
  try {
    const { query } = req;
    // console.log(query);
    const result = await search(
      query.search_name,
      query.search_price,
      query.orderByProduct,
      query.per_page,
      query.page
    );
    const totalData = await getTotalData();
    res.status(200).json({
      msg: "sukses",
      data: result.rows,
      pagination: {
        page: parseInt(query.page),
        total_show: parseInt(result.rows.length),
        total_data: parseInt(totalData.rows[0].total_product),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "internal server error",
      mesh: error,
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
    console.log(error);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const updateProducts = async (req, res) => {
  try {
    const { body, params } = req;
    const toUpdate = await readById(params.id);
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
    if (error.code === "23503")
      return res.status(403).json({ msg: "status di tolak " });
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
};
