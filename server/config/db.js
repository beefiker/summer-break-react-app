// import * as config from "../../config";

const mysql = require("mysql");
const db = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USERID,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  multipleStatements: true,
  typeCast: function (field, next) {
    if (field.type == "VAR_STRING") {
      return field.string();
    }
    return next();
  },
});

module.exports = db;
