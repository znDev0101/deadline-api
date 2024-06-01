const express = require("express")

let cors = require("cors")
const mongoose = require("mongoose")
const timerRoute = require("./Routes/timerRoute")
require("dotenv").config()
const app = express()

app.use(
  cors({
    origin: ["*", "https://dead-line-ku.vercel.app"],
    methods: ["POST", "PUT"],
  })
)

// Middleware for parsing request body
app.use(express.json())

app.get("/", (request, response) => {
  console.log(request)
  return response.status(234).send("MERN STACK CONNECTED HAPPY CODE")
})

app.use("/timer", timerRoute)

mongoose
  .connect(
    "mongodb+srv://zulfanurhuda01:zulfatasik28@timer-countdown.thkne8y.mongodb.net/?retryWrites=true&w=majority&appName=Timer-countdown",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("App connected to database")
    app.listen(3000, () => {
      console.log(`App is listening to port: 3000`)
    })
  })
  .catch((error) => {
    console.log(error)
  })

module.exports = app
