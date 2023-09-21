const { read, create, update, del } = require("../Models/images.model");
const allImages = async (req, res) => {
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

const createImages = async (req, res) => {
  try {
    const { body, params } = req;

    await create(body.image, params.id_product);
    res.status(200).json({
      msg: "image baru sudah ditambahkan sukses",
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const updateImages = async (req, res) => {
  try {
    const { body, params } = req;

    await update(body.image, params.id_product, params.id);
    res.status(200).json({
      msg: `image id ${params.id} sudah berubah menjadi ${body.image}`,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const deleteImages = async (req, res) => {
  try {
    const { params } = req;

    await del(params.id);
    res.status(200).json({
      msg: `image dengan id ${params.id} sudah terhapus`,
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

module.exports = { allImages, createImages, updateImages, deleteImages };
