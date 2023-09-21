const { read, create, update, del } = require("../Models/orderDetail.model");

const allOrderDetail = async (req, res) => {
  try {
    const result = await read();
    res.status(201).json({
      msg: "sukses",
      result: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const createOrderDetail = async (req, res) => {
  try {
    const { body, params } = req;

    await create(params.id_product, params.id_order, body.hot, body.quantity);
    res.status(201).json({
      msg: "orders_detail sudah di masukan dan sukses",
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const updateOrderDetail = async (req, res) => {
  try {
    const { body, params } = req;

    await update(body.quantity, params.id_product);
    res.status(200).json({
      msg: ` quantity dengan id_product ${params.id_product} sudah berubah menjadi ${body.quantity} `,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const deleteOrderDetail = async (req, res) => {
  try {
    const { params } = req;

    await del(params.id_product);
    res.status(200).json({
      msg: `orders dengan id ${params.id_product} sudah terhapus`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

module.exports = {
  allOrderDetail,
  createOrderDetail,
  updateOrderDetail,
  deleteOrderDetail,
};
