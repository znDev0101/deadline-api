// models/itemModel.js
const connectionDB = require("../connectionDB/connectionDB")

const getAllTimers = async () => {
  const [rows] = await connectionDB.query("SELECT * FROM settimer")
  return rows
}

const getTimerByUuid = async (uuid) => {
  const [rows] = await connectionDB.query(
    "SELECT * FROM settimer WHERE uuid = ?",
    [uuid]
  )
  return rows[0]
}

const createTimer = async (
  uuid,
  timer,
  namajobs,
  catatan,
  namaakun,
  nopembayaran
) => {
  const [result] = await connectionDB.query(
    "INSERT INTO settimer (uuid, timer, namajobs, catatan, namaakun, nopembayaran) VALUES (?, ?, ?, ?, ?, ?)",
    [
      uuid,
      timer,
      namajobs,
      catatan,
      JSON.stringify(namaakun),
      JSON.stringify(nopembayaran),
    ]
  )
  return { result }
}

const updateTimer = async (id, name, description) => {
  await connectionDB.query(
    "UPDATE settimer SET name = ?, description = ? WHERE id = ?",
    [name, description, id]
  )
}

const deleteTimer = async (id) => {
  await connectionDB.query("DELETE FROM settimer WHERE id = ?", [id])
}

module.exports = {
  getAllTimers,
  getTimerByUuid,
  createTimer,
  updateTimer,
  deleteTimer,
}
