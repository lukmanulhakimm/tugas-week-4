require("dotenv").config();
// import express
const express = require("express");
const server = express();

server.use(express.static("./public"));
// pasang parser untuk json dan form url encoded
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const mainRouter = require("./src/Routers/main.router");
server.use(mainRouter);
// port
server.listen(8000, () => {
  console.log(" app running port 8000");
});

// // connecting DB
// const pg = require("pg");
// const { Pool } = pg;
// // // inisialisai connection Object
// // const connectingString = 'postgresql://cofe_shop:root.localhost:5432/Dbcoffe_shop';
// const db = new Pool({
//   // connectingString,
//   host: "localhost",
//   database: "Dbcoffe_shop",
//   user: "cofe_shop",
//   password: "root",
// });
// menampilkan data table categories
// server.get("/categories", async (req, res) => {
//   try {
//     const sql = "select * from categories";
//     const result = await db.query(sql);
//     res.status(200).json({
//       msg: "sukses",
//       result: result.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menampilkan data table products
// server.get("/products", async (req, res) => {
//   try {
//     const sql = "select * from products";
//     const result = await db.query(sql);
//     res.status(200).json({
//       msg: "sukses",
//       result: result.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });

// menampilkan data table promos (read)
// server.get("/promos", async (req, res) => {
//   try {
//     const sql = " select * from promos;";
//     const result = await db.query(sql);
//     res.status(200).json({
//       msg: "sukses",
//       result: result.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menampilkan data table images (read)
// server.get("/images", async (req, res) => {
//   try {
//     const sql = "select * from images";
//     const result = await db.query(sql);
//     res.status(201).json({
//       msg: "sukses",
//       result: result.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menampilkan data table users (read)
// server.get("/users", async (req, res) => {
//   try {
//     const sql = "select * from users";
//     const result = await db.query(sql);
//     res.status(201).json({
//       msg: "sukses",
//       result: result.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menampilkan data table orders (read)
// server.get("/orders", async (req, res) => {
//   try {
//     const sql = "select * from orders";
//     const result = await db.query(sql);
//     res.status(201).json({
//       msg: "sukses",
//       result: result.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// server.get("/order-detail", async (req, res) => {
//   try {
//     const sql = "select * from order_detail";
//     const result = await db.query(sql);
//     res.status(201).json({
//       msg: "sukses",
//       result: result.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });

// menambah data categories (create)
// server.post("/categories", (req, res) => {
//   const { body } = req;
//   const sql =
//     "insert into categories(name_category) values($1) returning id, name_category";
//   const values = [body.name_category];
//   db.query(sql, values)
//     .then((data) => {
//       res.status(201).json({
//         msg: "data sudah masuk",
//         result: data.rows,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         msg: "internal  server error",
//         error: err,
//       });
//     });
// });
// menambah data product (create)
// server.post("/products", async (req, res) => {
//   const { body } = req;
//   try {
//     const sql =
//       "insert into products (name_product,description,price,size,stock,method_product,id_category,id_promo) values($1,$2,$3,$4,$5,$6,$7,$8)";
//     const values = [
//       body.name_product,
//       body.description,
//       body.price,
//       body.size,
//       body.stock,
//       body.method_product,
//       body.id_category,
//       body.id_promo,
//     ];
//     await db.query(sql, values);
//     res.status(201).json({
//       msg: "products baru sukses",
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menambahkan data promos (create)
// server.post("/promos", async (req, res) => {
//   try {
//     const { body } = req;
//     const sql =
//       "insert into promos(name_promo,discount_percentage,start_date,end_date) values($1,$2,$3,$4)";
//     const values = [
//       body.name_promo,
//       body.discount_percentage,
//       body.start_date,
//       body.end_date,
//     ];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: " promos baru sukses di masukan",
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menambahkan images (create)
// server.post("/images/:id_product", async (req, res) => {
//   try {
//     const { body, params } = req;
//     const sql = "insert into images(image,id_product) values($1,$2)";
//     const values = [body.image, params.id_product];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: "image baru sudah ditambahkan sukses",
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menambahkan users (create)
// server.post("/users", async (req, res) => {
//   try {
//     const sql =
//       "insert into users (full_name,password,email,no_phone,address) values($1,$2,$3,$4,$5)";
//     const { body } = req;
//     const values = [
//       body.full_name,
//       body.password,
//       body.email,
//       body.no_phone,
//       body.address,
//     ];
//     await db.query(sql, values);
//     res.status(201).json({
//       msg: " users baru sudah masuk sukses",
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menambahkan orders (create)
// server.post("/orders/:id_user", async (req, res) => {
//   try {
//     const { body, params } = req;
//     const sql =
//       "insert into orders (date_order,id_user,rating,total_price,status_order) values($1,$2,$3,$4,$5)";
//     const values = [
//       body.date_order,
//       params.id_user,
//       body.rating,
//       body.total_price,
//       body.status_order,
//     ];
//     await db.query(sql, values);
//     res.status(201).json({
//       msg: "data orders baru sukses",
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menambahkan order_detail (create)
// server.post("/order-detail/:id_product/:id_order", async (req, res) => {
//   try {
//     const { body, params } = req;
//     const sql =
//       "insert into order_detail (id_product,id_order,hot,quantity) values($1,$2,$3,$4)";
//     const values = [
//       params.id_product,
//       params.id_order,
//       body.hot,
//       body.quantity,
//     ];
//     await db.query(sql, values);
//     res.status(201).json({
//       msg: "orders_detail sudah di masukan dan sukses",
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// merubah table categories (update)
// server.patch("/categories/:id", async (req, res) => {
//   try {
//     const { body, params } = req;
//     const sql = "update categories set name_category =$1 where id =$2";
//     const values = [body.name_category, params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `nama category untuk id ${params.id} berubah menjadi ${body.name_category}`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// merubah data table product (update)
// server.patch("/products/:id", async (req, res) => {
//   try {
//     const { body, params } = req;
//     const sql = "update products set name_product  = $1 where id =$2";
//     const values = [body.name_product, params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `name product id ${params.id} sudah berubah menjadi ${body.name_product}`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// merubah data table promos (update)
// server.patch("/promos/:id", async (req, res) => {
//   try {
//     const { body, params } = req;
//     const sql = "update promos set discount_percentage= $1 where id =$2 ";
//     const values = [body.discount_percentage, params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `nama diskon id ${params.id} sudah berubah menjadi ${body.discount_percentage} `,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// merubah data table images
// server.patch("/images/:id/:id_product", async (req, res) => {
//   try {
//     const { body, params } = req;
//     const sql = "update images set image =$1, id_product=$2 where id=$3";
//     const values = [body.image, params.id_product, params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `image id ${params.id} sudah berubah menjadi ${body.image}`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// merubah data table users
// server.patch("/users/:id", async (req, res) => {
//   try {
//     const { body, params } = req;
//     const sql = "update users set address =$1 where id = $2";
//     const values = [body.address, params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: ` address dengan id ${params.id} sudah berubah menjadi ${body.address}`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// merubah data table orders
// server.patch("/orders/:id", async (req, res) => {
//   try {
//     const { body, params } = req;
//     const sql = "update orders set status_order =$1 where id =$2";
//     const values = [body.status_order, params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `status order dengan id ${params.id} sudah berubah menjadi ${body.status_order}`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// merubah data table order_detail
// server.patch("/orders-detail/:id_product", async (req, res) => {
//   try {
//     const { body, params } = req;
//     const sql = "update order_detail set quantity = $1 where id_product = $2";
//     const values = [body.quantity, params.id_product];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: ` quantity dengan id_product ${params.id_product} sudah berubah menjadi ${body.quantity} `,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menghapus data tabel categories
// server.delete("/categories/:id", async (req, res) => {
//   try {
//     const { params } = req;
//     const sql = "delete from categories where id =$1 returning id";
//     const values = [params.id];
//     const data = await db.query(sql, values);
//     res.status(200).json({
//       msg: `category dengan id ${params.id} berhasil dihapus`,
//       result: data.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server erorr",
//     });
//   }
// });
// menghapus data tabel products belum jalan
// server.delete("/products/:id", async (req, res) => {
//   try {
//     const { params } = req;
//     const sql = "delete from products where id = $1";
//     const values = [params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `product dengan id ${params.id} berhasil dihapus`,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       msg: 'delete on table "products" violates foreign key constraint "fk_product_image" on table "images"',
//     });
//   }
// });
// menghapus data tabel promos
// server.delete("/promos/:id", async (req, res) => {
//   try {
//     const { params } = req;
//     const sql = " delete from promos where id= $1";
//     const values = [params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `promos dengan id ${params.id} sudah terhapus`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menghapus data tabel images
// server.delete("/images/:id", async (req, res) => {
//   try {
//     const { params } = req;
//     const sql = "delete	from images where id =$1;";
//     const values = [params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `image dengan id ${params.id} sudah terhapus`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menghapus data tabel users belum jalan
// server.delete("/users/:id", async (req, res) => {
//   try {
//     const { params } = req;
//     const sql = " delete from users where id=$1";
//     const values = [params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `users dengan id ${params.id} sudah terhapus`,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: 'delete on table "users" violates foreign key constraint "fk_user_order" on table "orders"',
//     });
//   }
// });
// menghapus data tabel orders
// server.delete("/orders/:id", async (req, res) => {
//   try {
//     const { params } = req;
//     const sql = "delete from orders where id =$1";
//     const values = [params.id];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `orders dengan id ${params.id} sudah terhapus`,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       msg: 'delete on table "orders" violates foreign key constraint "fk_order_detail" on table "order_detail',
//     });
//   }
// });
// menghapus data tabel orders_detail
// server.delete("/orders-detail/:id_product", async (req, res) => {
//   try {
//     const { params } = req;
//     const sql = "delete from order_detail where id_product = $1";
//     const values = [params.id_product];
//     await db.query(sql, values);
//     res.status(200).json({
//       msg: `orders dengan id ${params.id_product} sudah terhapus`,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menampilkan berdasarkan nama
// server.get("/products/search", async (req, res) => {
//   try {
//     const { query } = req;
//     const sql =
//       "select p.id, p.name_product,p.description,p.stock, p.price,p.size, p.created_at,categories.name_category, promos.name_promo ,promos.discount_percentage from products p join categories on p.id_category  = categories.id left join promos on p.id_promo = promos.id where name_product like $1";
//     const values = [`%${query.name}%`];
//     const result = await db.query(sql, values);
//     if (result.rows.length === 0)
//       return res.status(404).json({
//         msg: " data tidak ditemukan",
//       });
//     res.status(200).json({
//       msg: "sukses",
//       result: result.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// menampilkan table product berdasarkan nama, harga, tanggal yang diurutkan
// server.get("/products/order-by", async (req, res) => {
//   try {
//     const { query } = req;
//     const sql =
//       "select products.id,products.name_product,products.description,products.stock, products.price,products.method_product, products.created_at, categories.name_category,promos.name_promo,promos.discount_percentage from products join categories on products.id_category  = categories.id left join promos on products.id_promo = promos.id where name_product like $1 or price < $2 order by name_product asc ,price asc, created_at asc ;";
//     const values = [`%${query.name}%`, query.price];
//     const result = await db.query(sql, values);
//     if (result.rows.length === 0)
//       return res.status(404).json({
//         msg: " data tidak ditemukan",
//       });
//     res.status(200).json({
//       msg: " sukses menampilkan data",
//       result: result.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
// pagination
// server.get("/products/pagination", async (req, res) => {
//   try {
//     const { query } = req;
//     const sql =
//       "select products.id,products.name_product,products.description,products.stock, products.price,products.method_product, products.created_at, categories.name_category,promos.name_promo,discount_percentage from products join categories on products.id_category  = categories.id left join promos on products.id_promo = promos.id order by id asc limit $1 offset $2 ";
//     const values = [query.line, query.slide];
//     const result = await db.query(sql, values);
//     res.status(200).json({
//       msg: " sukses menampilkan data",
//       result: result.rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: "internal server error",
//     });
//   }
// });
