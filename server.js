// server.js
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const timerRoute = require("./app/routes/timerRoute")

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." })
})

app.use("/api", timerRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
