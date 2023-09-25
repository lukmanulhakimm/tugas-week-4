const jwt = require("jsonwebtoken");

const { jwtKey, issuer } = require("../Configs/environments");
const { getLogout } = require("../Models/auth.model");

const isLogin = async (req, res, next) => {
  const bearerToken = req.header("Authorization");

  if (!bearerToken) return res.status(401).json({ msg: "please login " });
  const token = bearerToken.split(" ")[1];
  req.tokenNew = token;
  // cek apakah sudah logout
  try {
    const logout = await getLogout(token);
    // apakah rowCount > 0

    if (logout.rowCount > 0) {
      // jika lebih dari 0 maka return token sudah tidak valid
      return res.status(401).json({ msg: "token tidak valid " });
    }
  } catch (error) {
    console.log(error);
  }
  // getogoutTOken(token) => select * from logout_tokens where token= token
  // apablila ada tokennya, berarti dia sudah logout
  // langsung return, token not valid;

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

module.exports = { isLogin, isAdmin, isUser };
