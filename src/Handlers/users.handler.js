const {
  read,
  create,
  update,
  del,
  readById,
} = require("../Models/users.model");
const allUsers = async (req, res) => {
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
const createUsers = async (req, res) => {
  try {
    const { body } = req;
    await create(
      body.full_name,
      body.password,
      body.email,
      body.no_phone,
      body.address
    );
    res.status(201).json({
      msg: " users baru sudah masuk sukses",
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const updateUsers = async (req, res) => {
  try {
    const { body, params } = req;
    const toUpdate = await readById(params.id);
    if (toUpdate.rows.length - 1)
      res.status(404).json({ msg: "data not found" });
    let rows = toUpdate.rows[0]; //history data sebelumnya
    // console.log("sebelumnya", rows);
    if (body.full_name) rows.full_name = body.full_name;
    if (body.email) rows.email = body.email;
    if (body.password) rows.password = body.password;
    if (body.address) rows.address = body.address;

    await update(
      rows.full_name,
      rows.email,
      rows.password,
      rows.address,
      params.id
    );

    res.status(200).json({
      msg: ` address dengan id ${params.id} sudah berubah `,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};
const deleteUsers = async (req, res) => {
  try {
    const { params } = req;
    const result = await del(params.id);
    if (result.rows.length - 1)
      return res.status(404).json({ msg: "id  not found" });
    res.status(200).json({
      msg: `users dengan id ${params.id} sudah terhapus`,
      result,
    });
  } catch (error) {
    if (error.code === "23503")
      return res.status(403).json({ msg: "status di tolak " });
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

module.exports = { allUsers, createUsers, updateUsers, deleteUsers };
