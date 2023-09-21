// import db
const db = require("../Configs/posgres");

const read = () => {
  const sql = "select * from users";
  return db.query(sql);
};

const create = (full_name, password, email, no_phone, address) => {
  const sql =
    "insert into users (full_name,password,email,no_phone,address) values($1,$2,$3,$4,$5)";
  const values = [full_name, password, email, no_phone, address];
  return db.query(sql, values);
};

const readById = (id) => {
  const sql =
    "select full_name, email, address, password from users where id=$1";
  const values = [id];
  return db.query(sql, values);
};
const update = (full_name, email, password, address, id) => {
  const sql =
    "update users set full_name=$1, email=$2, password=$3, address =$4 where id = $5";
  const values = [full_name, email, password, address, id];
  return db.query(sql, values);
};

const del = (id) => {
  const sql = " delete from users where id=$1";
  const values = [id];
  return db.query(sql, values);
};

module.exports = { read, create, update, del, readById };
