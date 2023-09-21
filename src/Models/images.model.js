// import db
const db = require("../Configs/posgres");

const read = () => {
  const sql = "select * from images";
  return db.query(sql);
};

const create = (image, id_product) => {
  const sql = "insert into images(image,id_product) values($1,$2)";
  const values = [image, id_product];
  return db.query(sql, values);
};

const update = (image, id_product, id) => {
  const sql = "update images set image =$1, id_product=$2 where id=$3";
  const values = [image, id_product, id];
  return db.query(sql, values);
};

const del = (id) => {
  const sql = "delete	from images where id =$1;";
  const values = [id];
  return db.query(sql, values);
};

module.exports = { read, create, update, del };
