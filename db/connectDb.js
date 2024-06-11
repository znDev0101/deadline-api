const Pool = require("pg").Pool

const pool = new Pool({
  user: "set_timersdb_owner",
  // user: "postgres",
  // host: "api-v1.timlist.my.id",
  host: "ep-billowing-shadow-a1zj1o50.ap-southeast-1.aws.neon.tech",
  database: "set_timersdb",
  // database: "set_timersdb",
  // password: "123",
  password: "XuYe4FTqv1EQ",
  port: 5432,
})

module.exports = pool
