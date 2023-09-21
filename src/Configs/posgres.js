const { dbHost, dbName, dbUser, dbPass } = require("./environments");
// connecting DB
const pg = require("pg");
const { Pool } = pg;
// inisialisai connection Object
const db = new Pool({
  host: dbHost,
  database: dbName,
  user: dbUser,
  password: dbPass,
});

module.exports = db;
