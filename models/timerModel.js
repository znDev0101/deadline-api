const mongoose = require("mongoose")

const timerSchema = mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  setTimer: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model("Timer", timerSchema)
