const express = require("express")

let cors = require("cors")
const mongoose = require("mongoose")
const timerRoute = require("./Routes/timerRoute")
require("dotenv").config()
const app = express()

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("App connected to database")
  })
  .catch((error) => {
    console.log(error)
  })

const corsOptions = {
  origin: ["https://dead-line-ku.vercel.app/", "*"],
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
}

app.use(cors(corsOptions))

// Middleware for parsing request body
app.use(express.json())

app.get("/", (request, response) => {
  console.log(request)
  return response.status(234).send("MERN STACK CONNECTED HAPPY CODE")
})

app.use("/timer", timerRoute)

app.listen(3000, () => {
  console.log(`App is listening to port: 3000`)
})
