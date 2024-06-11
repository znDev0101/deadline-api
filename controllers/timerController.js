const pool = require("../db/connectDb")
const cors = require("cors")

// SELECT TIMER
const getTimerByUuid = async (req, res) => {
  const { uuid } = req.params

  try {
    const selectTimer = await pool.query(
      `SELECT * FROM public.settimers WHERE uuid = $1`,
      [uuid]
    )
    return res.status(200).json(selectTimer.rows[0])
  } catch (error) {
    console.log("Error message " + error.message)
  }
}

// CREATE TIMER
const createTimer = async (req, res) => {
  try {
    const { uuid, timer, namaakun, nopembayaran, namajobs, catatan } = req.body

    const newTimer = await pool.query(
      `INSERT INTO public.settimers (uuid,timer,namaakun,nopembayaran,namajobs,catatan) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [uuid, timer, namaakun, nopembayaran, namajobs, catatan]
    )

    return res.status(201).json(newTimer.rows[0])
  } catch (error) {
    console.log("error message" + error.message)
  }
}

module.exports = {
  getTimerByUuid,
  createTimer,
}
