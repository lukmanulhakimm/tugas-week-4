const argon = require("argon2");
const { createUser } = require("../Models/auth.model");

const register = async (req, res) => {
  const { body } = req;
  try {
    const hashedPassword = await argon.hash(body.password);
    await createUser(body.userName, hashedPassword, body.email, body.no_phone);
    res.status(201).json({
      msg: "register berhasil ",
      data: { userName, email },
    });
  } catch (error) {
    console.log(error);
    if (error.code === "23502")
      return res.status(400).json({
        msg: "sudah ada password",
        result: error,
      });
    res.status(500).json({
      //  status error tetapi query masuk ke db
      msg: "internal server error",
      result: error,
    });
  }
};

module.exports = { register };
