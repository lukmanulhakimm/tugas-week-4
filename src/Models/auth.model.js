const db = require("../Configs/posgres");
const createUser = (userName, password, email, no_phone, address) => {
  const sql =
    " INSERT INTO users (full_name,password,email,no_phone,address) VALUES($1,$2,$3,$4,$5) ";
  const VALUES = [userName, password, email, no_phone, address];
  return db.query(sql, VALUES);
};
const getUserPassword = (email) => {
  const sql =
    "select password, full_name, user_role  from users where email= $1 ";
  const VALUES = [email];
  return db.query(sql, VALUES);
};

const getLogout = (token) => {
  const sql = "select token from logoutToken where token=$1";
  const values = [token];
  return db.query(sql, values);
};
const insertLogout = (token) => {
  const sql = "insert into logouttoken(token) values($1)";
  const values = [token];
  return db.query(sql, values);
};

module.exports = { createUser, getUserPassword, getLogout, insertLogout };
