const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: process.env.ROLE,
  database: process.env.DB_NAME,
  password: process.env.ROLE_PWD,
  port: process.env.DB_PORT, // The default port
});
