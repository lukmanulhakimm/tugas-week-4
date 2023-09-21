// import db
const db = require("../Configs/posgres");

const read = () => {
  const sql = "select * from products";
  console.log(sql);
  return db.query(sql);
};
const create = (
  name_product,
  description,
  price,
  size,
  stock,
  method_product,
  id_category,
  id_promo
) => {
  const sql =
    "insert into products (name_product,description,price,size,stock,method_product,id_category,id_promo) values($1,$2,$3,$4,$5,$6,$7,$8)";
  const values = [
    name_product,
    description,
    price,
    size,
    stock,
    method_product,
    id_category,
    id_promo,
  ];
  return db.query(sql, values);
};

const readById = (id) => {
  const sql =
    "select name_product, price, size,stock from products where id=$1";
  const values = [id];
  return db.query(sql, values);
};
const update = (name_product, price, size, stock, id) => {
  const sql =
    "update products set name_product = $1, price =$2,size= $3, stock = $4 where id =$5";
  const values = [name_product, price, size, stock, id];
  return db.query(sql, values);
};

const del = (id) => {
  const sql = "delete from products where id = $1";
  const values = [id];
  return db.query(sql, values);
};
const search = (search_name, search_price, orderByProduct, limit, page) => {
  const sql =
    "select products.id,products.name_product,products.description,products.stock, products.price,products.method_product, products.created_at, categories.name_category,promos.name_promo,promos.discount_percentage from products join categories on products.id_category  = categories.id left join promos on products.id_promo = promos.id where name_product like $1 or  price < $2 order by name_product " +
    orderByProduct +
    ",price asc, created_at asc limit $3 offset $4 ";
  const values = [`%${search_name}%`, search_price, limit, page];
  return db.query(sql, values);
};

module.exports = {
  read,
  create,
  update,
  del,
  readById,
  search,
};
