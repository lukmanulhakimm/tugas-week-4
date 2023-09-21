const db = require("../Configs/posgres");
const createUser = (userName, password, email, no_phone) => {
  const sql =
    " INSERT INTO users (full_name,password,email,no_phone) VALUES($1,$2,$3,$4) ";
  const VALUES = [userName, password, email, no_phone];
  return db.query(sql, VALUES);
};

module.exports = { createUser };
