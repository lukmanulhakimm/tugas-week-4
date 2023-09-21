// import db
const db = require("../Configs/posgres");

const read = () => {
  const sql = " select * from promos;";
  return db.query(sql);
};
const create = (name_promo, discount_percentage, start_date, end_date) => {
  const sql =
    "insert into promos(name_promo,discount_percentage,start_date,end_date) values($1,$2,$3,$4)";
  const values = [name_promo, discount_percentage, start_date, end_date];
  return db.query(sql, values);
};

const update = (discount_percentage, id) => {
  const sql = "update promos set discount_percentage= $1 where id =$2 ";
  const values = [discount_percentage, id];
  return db.query(sql, values);
};
const del = (id) => {
  const sql = " delete from promos where id= $1";
  const values = [id];
  db.query(sql, values);
};

module.exports = { read, create, update, del };
