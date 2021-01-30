const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dil$H#N99",
  port: "3306",
  database: "Jupitor",
});

con.connect();

module.exports = con;
