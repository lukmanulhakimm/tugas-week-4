// import db
const db = require("../Configs/posgres");

const read = () => {
  const sql =
    "select image ,name_product, description,price,size,stock,name_category,name_promo from images join products on products.id = images.id_product left join categories  on categories.id =products.id_category left join promos on promos.id =products.id_promo;";
  return db.query(sql);
};

const readById = (id) => {
  const sql = "select * from images where id=$1";
  const values = [id];
  return db.query(sql, values);
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

module.exports = { read, create, update, del, readById };
