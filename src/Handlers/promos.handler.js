const {
  read,
  create,
  update,
  del,
  readById,
} = require("../Models/promos.model");

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
    const toUpdate = await readById(params.id);
    if (toUpdate.rows.length - 1)
      res.status(404).json({ msg: "data not found" });
    let rows = toUpdate.rows[0];
    if (body.name_promo) rows.name_promo = body.name_promo;
    if (body.discount_percentage)
      rows.discount_percentage = body.discount_percentage;
    if (body.start_date) rows.start_date = body.start_date;
    if (body.end_date) rows.end_date = body.end_date;
    await update(
      rows.name_promo,
      rows.discount_percentage,
      rows.start_date,
      rows.end_date,
      params.id
    );
    res.status(200).json({
      msg: `nama diskon id ${params.id} sudah berubah`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "internal server error",
      error,
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
