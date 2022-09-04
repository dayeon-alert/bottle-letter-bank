const mysql = require("mysql");
const sql = require("./sql.js"); // SQL 쿼리문이 작성되어 있는 파일
const config = require("../config/key.js");
const pool = mysql.createPool(config.mysqlURI);

const query = async (alias, values) => {
  formatQuery = mysql.format(sql[alias], values);
  return new Promise((resolve, reject) =>
    pool.query(formatQuery, (error, results) => {
      if (error) {
        console.log(error);
        reject({
          error,
        });
      } else {
        resolve(results);
      }
    })
  );
};

module.exports = {
  query,
};
