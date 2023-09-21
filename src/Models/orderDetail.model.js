// import db
const db = require("../Configs/posgres");

const read = () => {
  const sql = "select * from order_detail";
  return db.query(sql);
};

const create = (id_product, id_order, hot, quantity) => {
  const sql =
    "insert into order_detail (id_product,id_order,hot,quantity) values($1,$2,$3,$4)";
  const values = [id_product, id_order, hot, quantity];
  return db.query(sql, values);
};

const update = (quantity, id_product) => {
  const sql = "update order_detail set quantity = $1 where id_product = $2";
  const values = [quantity, id_product];
  return db.query(sql, values);
};

const del = (id_product) => {
  const sql = "delete from order_detail where id_product = $1";
  const values = [id_product];
  return db.query(sql, values);
};

module.exports = { read, create, update, del };
