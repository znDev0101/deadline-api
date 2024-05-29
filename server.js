const express = require("express")
require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")
const timerRoute = require("./Routes/timerRoute")

const app = express()

app.use(cors())

// Middleware for parsing request body
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("App connected to database")
  })
  .catch((error) => {
    console.log(error)
  })

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)

// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get("/", (request, response) => {
  console.log(request)
  return response.status(234).send("Welcome To MERN Stack Tutorial")
})

app.use("/timer", timerRoute)

app.listen(3000, () => {
  console.log(`App is listening to port: 3000`)
})
