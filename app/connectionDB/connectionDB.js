// db.js
const mysql = require("mysql2")

const connectionDB = mysql.createPool({
  host: "localhost", // Change to your DB host
  user: "root", // Change to your DB user
  password: "", // Change to your DB password
  database: "settimerdb", // Change to your DB name
  port: 3306,
})

module.exports = connectionDB.promise()
