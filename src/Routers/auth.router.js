const authRouter = require("express").Router();
const argon = require("argon2");

authRouter.post("/", async (req, res) => {
  try {
    const { body } = req;
    const hashedPassword = await argon.hash(body.password);
    res.status(200).json({
      msg: "ok",
      data: {
        pwd: body.password,
        result: hashedPassword,
      },
    });
  } catch (error) {
    console.log(error);
    console.log(res.status(500).json({ msg: "error password", result: error }));
  }
});
module.exports = authRouter;
