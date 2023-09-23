const jwt = require("jsonwebtoken");
const { jwtKey, issuer } = require("../Configs/environments");

const isLogin = (req, res, next) => {
  const bearerToken = req.header("Authorization");
  if (!bearerToken) return res.status(401).json({ msg: "silahkan login " });
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
      }
    }
    req.userInfo = data;
    next();
  });
};
const isRole = () => {};

module.exports = { isLogin, isRole };
