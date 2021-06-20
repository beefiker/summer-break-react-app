import * as config from "../../config";

const mysql = require("mysql");
const db = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USERID,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
});

module.exports = db;
