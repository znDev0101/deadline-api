const express = require("express")
const router = express.Router()

const {
  getTimerByUuid,
  createTimer,
} = require("../controllers/timerController")

router.get("/:uuid", getTimerByUuid)

router.post("/create-timer", createTimer)

module.exports = router
