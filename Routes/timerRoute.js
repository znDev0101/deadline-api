const express = require("express")
const Timer = require("../models/timerModel.js")
const router = express.Router()

router.post("/create-timer", async (req, res) => {
  try {
    if (!req.body.uuid || !req.body.setTimer) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      })
    }
    const newTimer = {
      uuid: req.body.uuid,
      setTimer: req.body.setTimer,
    }

    const timer = await Timer.create(newTimer)

    return res.status(201).send(timer)

    // console.log("oke bisa works")
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
})

module.exports = router
