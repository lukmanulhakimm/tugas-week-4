const argon = require("argon2");
const { createUser } = require("../Models/auth.model");

const register = async (req, res) => {
  try {
    const { body } = req;
    const hashedPassword = await argon.hash(body.password);
    await createUser(body.userName, hashedPassword, body.email, body.no_phone);
    return res.status(201).json({
      msg: "register berhasil ",
      data: {
        userName: body.userName,
        email: body.email,
      },
    });
  } catch (error) {
    console.log("blablaba", error);
    if (error.code === "23505")
      return res.status(400).json({
        msg: "email sudah terdaftar",
        result: error,
      });
    console.log(error);
    res.status(500).json({
      //  status error tetapi data postman masuk ke db
      msg: "internal server error",
      result: error,
    });
  }
};

module.exports = { register };
