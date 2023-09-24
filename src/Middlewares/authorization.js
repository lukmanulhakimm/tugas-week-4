const jwt = require("jsonwebtoken");

const { jwtKey, issuer } = require("../Configs/environments");

const isLogin = (req, res, next) => {
  const bearerToken = req.header("Authorization");
  if (!bearerToken) return res.status(401).json({ msg: "please login " });
  const token = bearerToken.split(" ")[1];
  jwt.verify(token, jwtKey, { issuer }, (error, data) => {
    if (error) {
      switch (error.name) {
        case "TokenExpiredError":
          return res.status(401).json({
            msg: "Access ended, please login",
          });
        case "NotBeforeError":
          return res.status(401).json({
            msg: "your access not started yet",
          });
        default:
          return res.status(401).json({ msg: "Invalid Token" });
      }
    }
    req.userInfo = data;
    next();
  });
};
const isAdmin = (req, res, next) => {
  if (req.userInfo.user_role !== "admin") {
    return res.status(403).json({ msg: "You don't have access to this route" });
  }
  next();
};

const isUser = (req, res, next) => {
  if (req.userInfo.user_role !== "user") {
    return res.status(403).json({ msg: "You don't have access to this route" });
  }
  next();
};

const isLogout = (req, res) => {};

module.exports = { isLogin, isAdmin, isUser, isLogout };
