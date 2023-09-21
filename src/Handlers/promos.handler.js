const { read, create, update, del } = require("../Models/promos.model");

const allPromos = async (req, res) => {
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
const createPromos = async (req, res) => {
  try {
    const { body } = req;

    await create(
      body.name_promo,
      body.discount_percentage,
      body.start_date,
      body.end_date
    );
    res.status(200).json({
      msg: " promos baru sukses di masukan",
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const updatePromos = async (req, res) => {
  try {
    const { body, params } = req;

    await update(body.discount_percentage, params.id);
    res.status(200).json({
      msg: `nama diskon id ${params.id} sudah berubah menjadi ${body.discount_percentage} `,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const deletePromos = async (req, res) => {
  try {
    const { params } = req;

    await del(params.id);
    res.status(200).json({
      msg: `promos dengan id ${params.id} sudah terhapus`,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

module.exports = { allPromos, createPromos, updatePromos, deletePromos };
