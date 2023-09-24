const argon = require("argon2");
const jwt = require("jsonwebtoken");
const { createUser, getUserPassword } = require("../Models/auth.model");
const { jwtKey, issuer } = require("../Configs/environments");

const register = async (req, res) => {
  try {
    const { body } = req;
    const hashedPassword = await argon.hash(body.password);
    await createUser(
      body.userName,
      hashedPassword,
      body.email,
      body.no_phone,
      body.address
    );
    return res.status(201).json({
      msg: "register berhasil ",
      data: {
        userName: body.userName,
        email: body.email,
      },
    });
  } catch (error) {
    if (error.code === "23505")
      if (error.detail.includes("email"))
        return res.status(400).json({ msg: "email sudah terdaftar" });
    if (error.detail.includes("no_phone"))
      return res.status(400).json({ msg: "no phone sudah terdaftar" });
    res.status(500).json({
      msg: "internal server error",
      result: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const {
      body: { email, clientPassword },
    } = req;
    const result = await getUserPassword(email);
    // console.log("contoh", result.rows[0]);
    if (!result.rows.length)
      return res.status(400).json({ msg: "email not registered" });
    const { password, full_name, user_role } = result.rows[0];
    const isValid = await argon.verify(password, clientPassword);
    if (!isValid)
      return res.status(401).json({ msg: "password does not match" });
    const payLoad = {
      full_name,
      email,
      user_role,
    };
    jwt.sign(
      payLoad,
      jwtKey,
      {
        expiresIn: "1d",
        issuer,
      },
      (error, token) => {
        if (error) throw error;
        res.status(200).json({
          msg: `selamat datang ${full_name}`,
          data: {
            token,
            userInfo: { email, full_name },
          },
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "internal server error" });
  }
};

module.exports = { register, login };
