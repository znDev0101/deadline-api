const express = require("express")

let cors = require("cors")
const timerRoute = require("./Routes/timerRoute")
require("dotenv").config()
const app = express()
const port = 3000

const corsOptions = {
  origin: "https://timlist.my.id",
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

// Middleware for parsing request body
app.use(express.json())

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://timlist.my.id") // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
//   res.header("Access-Control-Allow-Credentials", true)
//   next()
// })

app.listen(port, () => console.log(`app listening port : ${port}`))

app.get("/", (request, response) => {
  console.log(request)
  return response.status(234).send("PERN STACK CONNECTED HAPPY CODE")
})

app.use("/api/v1/settimers", timerRoute)

module.exports = app
