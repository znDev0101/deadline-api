const mongoose = require("mongoose")

const timerSchema = mongoose.Schema({
  uuid: {
    type: String,
    require: true,
  },
  setTimer: {
    type: Number,
    require: true,
  },
})

module.exports = mongoose.model("Timer", timerSchema)
