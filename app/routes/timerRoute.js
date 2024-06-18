// routes/itemRoutes.js
const express = require("express")
const router = express.Router()
const timerController = require("../controllers/timerController")

router.get("/timer", timerController.getAllTimers)
router.get("/timer/:uuid", timerController.getTimerByUuid)
router.post("/timer", timerController.createTimer)
router.put("/timer/:uuid", timerController.updateTimer)
router.delete("/timer/:uuid", timerController.deleteTimer)

module.exports = router
