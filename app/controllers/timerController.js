// controllers/itemController.js
const Timer = require("../models/timerModel")

const getAllTimers = async (req, res) => {
  try {
    const timer = await Timer.getAllTimers()
    res.json(timer)
  } catch (err) {
    console.error(err)
    res.status(500).send("Server error")
  }
}

const getTimerByUuid = async (req, res) => {
  const { uuid } = req.params
  try {
    const timer = await Timer.getTimerByUuid(uuid)
    res.json(timer)
  } catch (err) {
    console.error(err)
    res.status(500).send("Server error")
  }
}

const createTimer = async (req, res) => {
  const { uuid, timer, namajobs, catatan, namaakun, nopembayaran } = req.body
  try {
    const newTimer = await Timer.createTimer(
      uuid,
      timer,
      namajobs,
      catatan,
      namaakun,
      nopembayaran
    )
    res.json(newTimer)
  } catch (err) {
    console.error(err)
    res.status(500).send("Server error")
  }
}

const updateTimer = async (req, res) => {
  const { uuid } = req.params
  const { name, description } = req.body
  try {
    await Timer.updateTimer(uuid, name, description)
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.status(500).send("Server error")
  }
}

const deleteTimer = async (req, res) => {
  const { uuid } = req.params
  try {
    await Timer.deleteTimer(uuid)
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.status(500).send("Server error")
  }
}

module.exports = {
  getAllTimers,
  getTimerByUuid,
  createTimer,
  updateTimer,
  deleteTimer,
}
