const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: "3306",
  database: "elearning",
});

con.connect();

module.exports = con;
