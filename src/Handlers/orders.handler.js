const { read, create, update, del } = require("../Models/orders.model");

const allOrders = async (req, res) => {
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
const createOrders = async (req, res) => {
  try {
    const { body, params } = req;

    await create(
      body.date_order,
      params.id_user,
      body.rating,
      body.total_price,
      body.status_order
    );
    res.status(201).json({
      msg: "data orders baru sukses",
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const updateOrders = async (req, res) => {
  try {
    const { body, params } = req;

    await update(body.status_order, params.id);
    res.status(200).json({
      msg: `status order dengan id ${params.id} sudah berubah menjadi ${body.status_order}`,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const deleteOrders = async (req, res) => {
  try {
    const { params } = req;

    await del(params.id);
    res.status(200).json({
      msg: `orders dengan id ${params.id} sudah terhapus`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'delete on table "orders" violates foreign key constraint "fk_order_detail" on table "order_detail',
    });
  }
};

module.exports = { allOrders, createOrders, updateOrders, deleteOrders };
