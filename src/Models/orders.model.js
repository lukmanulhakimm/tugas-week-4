// import db
const db = require("../Configs/posgres");

const read = () => {
  const sql = "select * from orders";
  return db.query(sql);
};
const create = (date_order, id_user, rating, total_price, status_order) => {
  const sql =
    "insert into orders (date_order,id_user,rating,total_price,status_order) values($1,$2,$3,$4,$5)";
  const values = [date_order, id_user, rating, total_price, status_order];
  return db.query(sql, values);
};

const update = (status_order, id) => {
  const sql = "update orders set status_order =$1 where id =$2";
  const values = [status_order, id];
  return db.query(sql, values);
};

const del = (id) => {
  const sql = "delete from orders where id =$1";
  const values = [id];
  return db.query(sql, values);
};

module.exports = { read, create, update, del };
