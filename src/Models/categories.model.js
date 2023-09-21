// import db
const db = require("../Configs/posgres");

const read = () => {
  const sql = "select * from categories";
  return db.query(sql);
};
const create = (name_category) => {
  const sql =
    "insert into categories(name_category) values($1) returning id, name_category";
  const values = [name_category];
  return db.query(sql, values);
};

const update = (name_category, id) => {
  const sql = "update categories set name_category =$1 where id =$2";
  const values = [name_category, id];
  return db.query(sql, values);
};

const del = (id) => {
  const sql = "delete from categories where id =$1";
  const values = [id];
  return db.query(sql, values);
};
module.exports = { read, create, update, del };
