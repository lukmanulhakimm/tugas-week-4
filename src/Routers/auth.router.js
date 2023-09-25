const authRouter = require("express").Router();

const { register, login, logout } = require("../Handlers/auth.handler");
const { isLogin } = require("../Middlewares/authorization");
authRouter.post("/register", register);
authRouter.post("/", login);
authRouter.post("/logout", isLogin, logout);
module.exports = authRouter;
