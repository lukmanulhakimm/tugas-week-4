const { read, create, update, del } = require("../Models/categories.model");

const allCategory = async (req, res) => {
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

const createCategory = (req, res) => {
  const { body } = req;
  create(body.name_category)
    .then((data) => {
      res.status(201).json({
        msg: "data sudah masuk",
        result: data.rows,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "internal  server error",
        error: err,
      });
    });
};

const updateCategory = async (req, res) => {
  try {
    const { body, params } = req;

    await update(body.name_category, params.id);
    res.status(200).json({
      msg: `nama category untuk id ${params.id} berubah menjadi ${body.name_category}`,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { params } = req;

    const data = await del(params.id);
    res.status(200).json({
      msg: `category dengan id ${params.id} berhasil dihapus`,
      result: data.rows,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

module.exports = {
  allCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
