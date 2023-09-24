// import db
const db = require("../Configs/posgres");
const moment = require("moment");
const read = () => {
  const sql = "select * from categories where deleted_at is null";
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
  const timeStamp = moment().format("YYYY-MM-DD H:mm:ss");
  console.log(timeStamp);
  const sql =
    "update categories  set deleted_at='" + timeStamp + "' where id=" + id;
  console.log(sql);
  return db.query(sql);
};
module.exports = { read, create, update, del };
